(function () {
  document.addEventListener('click', async function (event) {
    const button = event.target.closest('[data-poris-copy-expression]');
    if (!button) return;
    const code = button.parentElement.querySelector('code');
    try {
      await navigator.clipboard.writeText(button.dataset.porisCopyExpression);
      button.textContent = button.dataset.copiedLabel;
    } catch (_) {
      // Keep the literal available even if clipboard permissions are denied.
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  });
})();
