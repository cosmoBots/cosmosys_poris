(function() {
  function initializeSidebar(root) {
    if (root.dataset.initialized === '1') return;
    root.dataset.initialized = '1';
    var panel = root.querySelector('.poris-sidebar-viewer-panel');
    var error = root.querySelector('.poris-sidebar-error');
    var urls = JSON.parse(root.querySelector('.poris-sidebar-urls').textContent);
    var app;
    var requestId = 0;

    function mount(target) {
      var xml = JSON.parse(target.querySelector('.poris-sidebar-model-xml').textContent);
      import(root.dataset.viewerModuleUrl).then(function(viewer) {
        if (!target.isConnected) return;
        app = viewer.createPorisViewerPanel('', target.querySelector('.poris-sidebar-viewer'), { compact: true, modelXml: xml });
      }).catch(function() {
        error.textContent = 'No se pudo iniciar porisViewer.';
        error.hidden = false;
      });
    }

    root.querySelectorAll('.poris-scope-link').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        root.querySelectorAll('.poris-scope-link').forEach(function(candidate) {
          candidate.classList.toggle('selected', candidate === link);
          if (candidate === link) candidate.setAttribute('aria-current', 'page');
          else candidate.removeAttribute('aria-current');
        });
        var current = ++requestId;
        error.hidden = true;
        fetch(urls[link.dataset.scope], {
          credentials: 'same-origin',
          headers: { Accept: 'text/html', 'X-Requested-With': 'XMLHttpRequest' }
        }).then(function(response) {
          if (response.redirected) throw new Error('Authentication required');
          if (!response.ok) throw new Error('HTTP ' + response.status);
          return response.text();
        }).then(function(html) {
          var template = document.createElement('template');
          template.innerHTML = html;
          var nextPanel = template.content.querySelector('.poris-sidebar-viewer-panel');
          if (!nextPanel) throw new Error('Invalid PORIS panel');
          if (current !== requestId) return;
          if (app) app.unmount();
          panel.replaceWith(nextPanel);
          panel = nextPanel;
          mount(panel);
        }).catch(function() {
          if (current !== requestId) return;
          error.textContent = 'No se pudo cargar el modelo PORIS.';
          error.hidden = false;
        });
      });
    });
    mount(panel);
  }

  document.addEventListener('cosmosys:issue-panel-loaded', function(event) {
    if (event.detail.location !== 'sidebar') return;
    var root = event.detail.content.querySelector('[data-cosmosys-poris-sidebar]');
    if (root) initializeSidebar(root);
  });
})();
