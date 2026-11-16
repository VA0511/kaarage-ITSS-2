// Inline SVG icons (24×24, stroke based, inherit currentColor).

const svg = (body, fill = 'none') =>
  `<svg class="icon" viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;

const BOOKMARK = '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z"/>';

export const icons = {
  arrowLeft: svg('<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>'),
  arrowRight: svg('<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>'),
  home: svg('<path d="M4 10.5L12 4l8 6.5"/><path d="M6 9.5V20h12V9.5"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'),
  bookmark: svg(BOOKMARK),
  bookmarkFilled: svg(BOOKMARK, 'currentColor'),
  copy: svg('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/>'),
  plus: svg('<path d="M12 5v14"/><path d="M5 12h14"/>')
};
