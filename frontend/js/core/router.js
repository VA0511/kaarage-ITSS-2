// Minimal in-memory router. Any element with data-nav="Sxx" navigates on click,
// but only along the edges defined in routes.js.
//
// There is deliberately no URL/hash routing: the browser Back button could
// otherwise create transitions that are not in the diagram (e.g. S03 → S01 → back).

import { START_SCREEN, TRANSITIONS } from './routes.js';

const screens = new Map(); // id -> { el, screen }
const listeners = [];
let current = null;

export function registerScreen(id, el, screen) {
  screens.set(id, { el, screen });
}

export function getCurrentScreen() {
  return current;
}

export function canNavigate(from, to) {
  return Boolean(TRANSITIONS[from] && TRANSITIONS[from][to]);
}

export function onNavigate(listener) {
  listeners.push(listener);
}

export function navigate(to) {
  if (!canNavigate(current, to)) {
    console.warn(`[router] Blocked transition ${current} → ${to}: not in screen diagram.`);
    return false;
  }
  show(to, { focus: true });
  return true;
}

function show(id, { focus }) {
  const target = screens.get(id);
  if (!target) throw new Error(`[router] Unknown screen ${id}`);

  screens.forEach(({ el }, key) => {
    el.hidden = key !== id;
  });
  current = id;

  if (target.screen.onEnter) target.screen.onEnter();
  listeners.forEach((fn) => fn(id));

  window.scrollTo(0, 0);
  if (focus) {
    const heading = target.el.querySelector('.screen-title');
    if (heading) heading.focus({ preventScroll: true });
  }
}

export function startRouter() {
  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-nav]');
    if (!trigger) return;
    event.preventDefault();
    navigate(trigger.dataset.nav);
  });
  show(START_SCREEN, { focus: false });
}
