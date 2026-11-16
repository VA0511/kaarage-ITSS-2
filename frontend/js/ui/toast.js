// Short feedback message at the bottom of the screen.

const DURATION_MS = 2200;
let timer = null;

export function showToast(message) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  clearTimeout(timer);
  timer = setTimeout(() => {
    el.hidden = true;
  }, DURATION_MS);
}
