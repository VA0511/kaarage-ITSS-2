const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

// Escape any value before interpolating it into an HTML template.
export function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (ch) => ESCAPES[ch]);
}

// Collect every [data-ref="name"] element under root into { name: element }.
export function collectRefs(root) {
  const refs = {};
  root.querySelectorAll('[data-ref]').forEach((el) => {
    refs[el.dataset.ref] = el;
  });
  return refs;
}
