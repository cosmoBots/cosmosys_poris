(function() {
  function initializeValidationRunner(root) {
    var runner = root.querySelector('.poris-validation-runner');
    var button = root.querySelector('#runPorisValidation');
    var status = root.querySelector('#porisValidationRunStatus');
    var table = root.querySelector('#porisValidationResults');
    var body = table && table.querySelector('tbody');
    var runtimePanel = root.querySelector('#porisRuntimeState');
    if (!runner || !button || !status || !table || !body) return;

    var interpolate = function(template, values) {
      return template.replace(/%\{(\w+)\}/g, function(_match, key) { return String(values[key] == null ? '' : values[key]); });
    };

    function renderRuntime(state, operations) {
      var nodes = runtimePanel && runtimePanel.querySelector('#porisRuntimeNodes');
      var operationList = runtimePanel && runtimePanel.querySelector('#porisRuntimeOperations');
      if (!runtimePanel || !nodes) return;
      nodes.replaceChildren();
      if (operationList) operationList.replaceChildren();
      var empty = runtimePanel.querySelector('#porisRuntimeEmpty');
      if (empty) empty.remove();
      state.forEach(function(entry) {
        var mode = document.createElement('li');
        mode.textContent = interpolate(runtimePanel.dataset.modeTemplate, { name: entry.name, mode: entry.mode_name });
        nodes.appendChild(mode);
        if (entry.value_name) {
          var value = document.createElement('li');
          var template = entry.data == null ? runtimePanel.dataset.valueWithoutDataTemplate : runtimePanel.dataset.valueTemplate;
          value.textContent = interpolate(template, { name: entry.name, value: entry.value_name, data: entry.data });
          nodes.appendChild(value);
        }
      });
      operations.forEach(function(operation) {
        if (!operationList) return;
        var line = document.createElement('li');
        line.textContent = operation.accepted ? operation.call : operation.call + ' — ' + runtimePanel.dataset.rejectedLabel + ': ' + operation.reason;
        operationList.appendChild(line);
      });
    }

    function appendResult(result, operations) {
      var row = body.querySelector('[data-step-index="' + result.index + '"]');
      if (!row) return;
      var log = row.querySelector('.poris-validation-log');
      var indicator = row.querySelector('.poris-validation-check');
      var passed = result.status === 'passed';
      var failed = result.status === 'failed';
      var unverified = result.status === 'unverified';
      row.classList.remove('poris-validation-row-failed', 'poris-validation-row-unverified');
      if (failed || unverified) row.classList.add('poris-validation-row-' + result.status);
      log.replaceChildren();
      operations.forEach(function(operation) {
        var line = document.createElement('div');
        var detail = operation.accepted ? (operation.result || 'accepted') : runner.dataset.failedLabel + ': ' + operation.reason;
        line.textContent = operation.call + ' → ' + detail;
        log.appendChild(line);
      });
      if (unverified && result.query_reason) {
        var reason = document.createElement('div');
        reason.textContent = (result.query_description || 'Query') + ' — ' + (result.query_expected || '') + ': ' + result.query_reason;
        log.appendChild(reason);
      } else if (result.query_description) {
        var queryResult = document.createElement('div');
        queryResult.textContent = 'Query: ' + result.query_description + ' → ' + result.query_expected + ' (' + (result.query_result ? 'true' : 'false') + ')';
        log.appendChild(queryResult);
      }
      indicator.className = 'poris-validation-result-' + result.status;
      indicator.textContent = passed ? '✓' : (failed ? '✗' : (unverified ? '?' : '—'));
      indicator.setAttribute('aria-label', passed ? runner.dataset.passedLabel : (failed ? runner.dataset.failedLabel : (unverified ? runner.dataset.unverifiedLabel : runner.dataset.skippedLabel)));
    }

    button.addEventListener('click', function() {
      button.disabled = true;
      status.textContent = runner.dataset.runningLabel;
      body.querySelectorAll('tr').forEach(function(row) {
        row.classList.remove('poris-validation-row-failed', 'poris-validation-row-unverified');
        row.querySelector('.poris-validation-log').replaceChildren();
        var check = row.querySelector('.poris-validation-check');
        check.className = 'poris-validation-check';
        check.textContent = '';
        check.removeAttribute('aria-label');
      });

      var operationLog = [];
      var runId = null;
      var hadUnverifiedStep = false;
      function runStep(stepIndex) {
        var startedAt = Date.now();
        window.fetch(runner.dataset.runUrl, {
          method: 'POST',
          credentials: 'same-origin',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json', 'X-CSRF-Token': runner.dataset.csrfToken },
          body: JSON.stringify({ step_index: stepIndex, run_id: runId })
        }).then(function(response) {
          return response.json().then(function(payload) {
            if (!response.ok) throw new Error(payload.error || response.statusText);
            return payload;
          });
        }).then(function(payload) {
          runId = payload.run_id;
          var result = Object.assign({}, payload.result, {
            query_reason: payload.query_reason,
            query_description: payload.query_description,
            query_expected: payload.query_expected,
            query_result: payload.query_result
          });
          appendResult(result, payload.operations || []);
          operationLog = operationLog.concat(payload.operations || []);
          renderRuntime(payload.state || [], operationLog);
          (payload.skipped || []).forEach(function(skipped) { appendResult(skipped, []); });
          if (payload.result.status === 'unverified') hadUnverifiedStep = true;
          if (payload.result.status === 'failed') {
            status.textContent = runner.dataset.failedLabel;
            button.disabled = false;
          } else if (payload.complete) {
            status.textContent = hadUnverifiedStep ? runner.dataset.unverifiedLabel : runner.dataset.passedLabel;
            button.disabled = false;
          } else {
            window.setTimeout(function() { runStep(stepIndex + 1); }, Math.max(0, 500 - (Date.now() - startedAt)));
          }
        }).catch(function(error) {
          status.textContent = error.message;
          button.disabled = false;
        });
      }
      runStep(0);
    });
  }

  function initializeProjectTabs() {
    var content = document.getElementById('porisProjectTabContent');
    if (!content || content.dataset.bound === '1') return;
    content.dataset.bound = '1';
    var nav = document.querySelector('.poris-project-tabs');
    var controller = null;
    var requestNumber = 0;

    function selectLink(link, updateHistory) {
      if (!link) return;
      if (nav) nav.querySelectorAll('[data-poris-tab-link]').forEach(function(candidate) {
        var selected = candidate === link;
        candidate.classList.toggle('selected', selected);
        if (selected) candidate.setAttribute('aria-current', 'page');
        else candidate.removeAttribute('aria-current');
      });
      if (updateHistory && window.location.href !== link.href) window.history.pushState({}, '', link.href);
      if (controller) controller.abort();
      controller = new AbortController();
      var currentRequest = ++requestNumber;
      content.innerHTML = '<p class="poris-tab-loading" role="status" aria-live="polite"><span class="poris-tab-spinner" aria-hidden="true"></span></p>';
      content.querySelector('.poris-tab-loading').appendChild(document.createTextNode(content.dataset.loadingText));

      window.fetch(link.dataset.panelUrl, {
        credentials: 'same-origin',
        headers: { Accept: 'text/html', 'X-Requested-With': 'XMLHttpRequest' },
        signal: controller.signal
      }).then(function(response) {
        if (!response.ok) throw new Error('PORIS tab request failed');
        return response.text();
      }).then(function(html) {
        if (currentRequest !== requestNumber) return;
        content.innerHTML = html;
        if (link.dataset.tab === 'configuration' && window.initPorisConfigurationTab) return window.initPorisConfigurationTab(content);
        if (link.dataset.tab === 'automated_validation') initializeValidationRunner(content);
      }).catch(function(error) {
        if (error.name === 'AbortError' || currentRequest !== requestNumber) return;
        content.innerHTML = '';
        var message = document.createElement('p');
        message.className = 'nodata';
        message.setAttribute('role', 'alert');
        message.textContent = content.dataset.errorText;
        content.appendChild(message);
      });
    }

    if (nav) nav.addEventListener('click', function(event) {
      var link = event.target.closest('[data-poris-tab-link]');
      if (!link || !nav.contains(link) || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      selectLink(link, true);
    });

    content.addEventListener('click', function(event) {
      var button = event.target.closest('.poris-generation-ack');
      if (!button) return;
      var message = content.querySelector('.poris-generation-ack-message');
      if (message) message.textContent = button.dataset.message;
    });

    window.addEventListener('popstate', function() {
      var tab = new URL(window.location.href).searchParams.get('tab') || 'configuration';
      var link = nav && nav.querySelector('[data-tab="' + tab + '"]');
      if (link) selectLink(link, false);
    });

    var initialUrl = new URL(content.dataset.initialUrl, window.location.href);
    var initialTab = initialUrl.searchParams.get('tab') || 'configuration';
    var initialLink = nav && nav.querySelector('[data-tab="' + initialTab + '"]');
    selectLink(initialLink, false);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initializeProjectTabs);
  else initializeProjectTabs();
})();
