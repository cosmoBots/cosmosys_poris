const SVG_NS = 'http://www.w3.org/2000/svg';
const tags = new Set(['svg', 'g', 'a', 'title', 'desc', 'polygon', 'polyline', 'ellipse', 'rect', 'circle', 'path', 'line', 'text', 'tspan']);
const attributes = new Set(['viewBox', 'width', 'height', 'transform', 'points', 'd', 'cx', 'cy', 'rx', 'ry', 'r',
  'x', 'y', 'x1', 'y1', 'x2', 'y2', 'dx', 'dy', 'stroke-width', 'stroke-dasharray', 'stroke-linejoin',
  'stroke-linecap', 'fill-opacity', 'stroke-opacity', 'opacity', 'font-family', 'font-size', 'font-weight',
  'font-style', 'text-anchor', 'dominant-baseline']);

// GraphViz SVG was safe as an <img>, not necessarily as active page markup.
// Rebuild only drawing primitives. No scripts, styles, images, foreignObject,
// event handlers, external resources or arbitrary IDs enter the host document.
export function drawingSvg(source, document) {
  if (source.localName !== 'svg' || source.namespaceURI !== SVG_NS) throw new Error('Invalid diagram');
  const copy = node => {
    if (node.nodeType === 3) return document.createTextNode(node.textContent);
    if (node.namespaceURI !== SVG_NS || !tags.has(node.localName)) return null;
    const clean = document.createElementNS(SVG_NS, node.localName);
    for (const attribute of node.attributes) {
      if (!attribute.namespaceURI && attributes.has(attribute.name)) clean.setAttribute(attribute.name, attribute.value);
      if (['fill', 'stroke'].includes(attribute.name) && /^(#[\da-f]{3,8}|[a-z]+|rgb\([\d.,%\s]+\))$/i.test(attribute.value)) clean.setAttribute(attribute.name, attribute.value);
    }
    const classes = (node.getAttribute('class') || '').split(/\s+/).filter(name => ['node', 'cluster', 'edge', 'graph'].includes(name));
    if (classes.length) clean.setAttribute('class', classes.join(' '));
    if (node.localName === 'a') {
      const href = node.getAttribute('href') || node.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
      try {
        const url = new URL(href, document.baseURI);
        if (url.origin === new URL(document.baseURI).origin && /\/issues\/\d+$/.test(url.pathname) && !url.search && !url.hash) {
          clean.setAttribute('href', url.href);
          clean.setAttribute('target', '_top');
        }
      } catch { /* Drawing remains readable without an invalid link. */ }
    }
    for (const child of node.childNodes) {
      const safe = copy(child);
      if (safe) clean.appendChild(safe);
    }
    return clean;
  };
  return copy(source);
}

export function selectedItemIds(state) {
  const ids = new Set();
  for (const row of state) {
    // Synthetic Unknown modes have no item and must not activate a stale value.
    if (!/^[1-9]\d*$/.test(String(row.mode_id))) continue;
    ids.add(String(row.mode_id));
    if (/^[1-9]\d*$/.test(String(row.value_id))) ids.add(String(row.value_id));
  }
  return ids;
}

export function highlightConfiguration(svg, state) {
  const ids = selectedItemIds(state);
  for (const node of svg.querySelectorAll('g.node')) {
    const title = [...node.children].find(child => child.localName === 'title')?.textContent;
    const id = /^issue_(\d+)$/.exec(title || '')?.[1];
    const outline = node.querySelector('polygon, ellipse, rect, circle, path');
    if (outline) outline.toggleAttribute('data-poris-runtime-outline', !!id && ids.has(id));
  }
  for (const edge of svg.querySelectorAll('g.edge')) {
    const title = [...edge.children].find(child => child.localName === 'title')?.textContent;
    const endpoints = /^issue_(\d+)->issue_(\d+)$/.exec(title || '');
    edge.toggleAttribute('data-poris-runtime-edge', !!endpoints && ids.has(endpoints[1]) && ids.has(endpoints[2]));
  }
}

// Graphviz's outer pad belongs to a standalone sheet, not the runtime panel.
// Crop to drawing groups, excluding the graph's transparent background polygon,
// and preserve rendered text scale when changing the viewport dimensions.
export function trimDrawingPadding(svg) {
  const box = svg.viewBox.baseVal;
  if (!(box.width > 0 && box.height > 0) || !svg.getBoundingClientRect().width) return;
  const matrix = svg.getScreenCTM();
  if (!matrix) return;
  const inverse = matrix.inverse();
  const points = [...svg.querySelectorAll('g.node, g.cluster, g.edge, g.graph > text')].flatMap(group => {
    const rect = group.getBBox();
    const matrix = group.getScreenCTM();
    if (!(rect.width || rect.height) || !matrix) return [];
    const relative = inverse.multiply(matrix);
    return [[rect.x, rect.y], [rect.x + rect.width, rect.y],
      [rect.x, rect.y + rect.height], [rect.x + rect.width, rect.y + rect.height]]
      .map(([x, y]) => new DOMPoint(x, y).matrixTransform(relative));
  });
  if (!points.length) return;
  const scale = Math.hypot(matrix.a, matrix.b);
  if (!(scale > 0 && Number.isFinite(scale))) return;
  const pad = 4; // Keep outlines and arrowheads clear of the viewport edge.
  const stable = value => Number(value.toFixed(6));
  const left = stable(Math.min(...points.map(point => point.x)) - pad);
  const top = stable(Math.min(...points.map(point => point.y)) - pad);
  const width = stable(Math.max(...points.map(point => point.x)) - left + pad);
  const height = stable(Math.max(...points.map(point => point.y)) - top + pad);
  svg.setAttribute('viewBox', `${left} ${top} ${width} ${height}`);
  svg.setAttribute('width', `${width * scale}px`);
  svg.setAttribute('height', `${height * scale}px`);
}

export function initializeRuntimeDiagrams() {
  let current = null;
  let controller;
  const receive = event => {
    if (!Array.isArray(event.detail?.state)) return;
    if (current) {
      current.state = event.detail.state;
      if (current.svg) highlightConfiguration(current.svg, current.state);
    }
  };
  const mount = async () => {
    controller?.abort();
    const root = document.querySelector('[data-poris-runtime-diagram]');
    current = null;
    if (!root) return;
    controller = new AbortController();
    const diagram = {root, state: JSON.parse(root.querySelector('[data-runtime-diagram-state]').textContent)};
    current = diagram;
    try {
      const response = await fetch(root.dataset.url, {credentials: 'same-origin', signal: controller.signal});
      if (!response.ok) throw new Error('Diagram unavailable');
      const parsed = new DOMParser().parseFromString(await response.text(), 'image/svg+xml');
      if (parsed.querySelector('parsererror')) throw new Error('Invalid diagram');
      const svg = drawingSvg(parsed.documentElement, document);
      if (current !== diagram) return;
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', root.dataset.label);
      diagram.svg = svg;
      highlightConfiguration(svg, diagram.state);
      root.querySelector('[data-runtime-diagram-image]').replaceChildren(svg);
      trimDrawingPadding(svg);
      root.dataset.ready = 'true';
    } catch (error) {
      // The original image is retained on failure; never break the runtime.
      if (error.name !== 'AbortError' && current === diagram) root.dataset.ready = 'failed';
    }
  };
  document.addEventListener('poris:runtime-confirmed', receive);
  document.addEventListener('poris:tab-ready', mount);
  document.addEventListener('poris:tab-selected', () => {controller?.abort(); current = null;});
  mount();
}
