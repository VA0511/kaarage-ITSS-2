// S04 Diễn đạt — transitions: Trang chủ → S01, Nhấn Xem gợi ý → S05

import { state } from '../core/state.js';
import { navigate } from '../core/router.js';
import { getConcepts, getSituations } from '../services/suggestionService.js';
import { esc, collectRefs } from '../utils/dom.js';
import { icons } from '../ui/icons.js';

let refs = {};

const template = () => `
  <nav class="screen-nav" aria-label="Điều hướng">
    <button type="button" class="btn btn-ghost" data-nav="S01">${icons.arrowLeft}<span>Trang chủ</span></button>
  </nav>

  <header class="screen-head">
    <p class="eyebrow">S04</p>
    <h1 class="screen-title" tabindex="-1">Diễn đạt</h1>
    <p class="lead">Quên thuật ngữ tiếng Nhật? Chọn ý muốn nói để nhận cách diễn đạt đơn giản.</p>
  </header>

  <form class="express-form" data-ref="form" novalidate>
    <fieldset class="field">
      <legend class="field-label">1. Khái niệm</legend>
      <div class="chips" data-ref="concepts" role="group" aria-label="Khái niệm mẫu"></div>
      <label class="sr-only" for="custom-concept">Hoặc tự nhập khái niệm</label>
      <input id="custom-concept" class="input" type="text" data-ref="custom"
        placeholder="Hoặc tự nhập, ví dụ: API, cache, phân quyền…" autocomplete="off" />
    </fieldset>

    <fieldset class="field">
      <legend class="field-label">2. Tình huống</legend>
      <div class="options" data-ref="situations" role="group" aria-label="Tình huống phát biểu"></div>
    </fieldset>

    <div class="form-actions">
      <button type="submit" class="btn btn-primary btn-lg"><span>Xem gợi ý</span>${icons.arrowRight}</button>
    </div>
  </form>
`;

function renderConcepts() {
  const usingCustom = Boolean(state.express.customText.trim());
  refs.concepts.innerHTML = getConcepts().map(
    (concept) => `
      <button type="button" class="chip" data-concept="${esc(concept.id)}"
        aria-pressed="${!usingCustom && concept.id === state.express.conceptId}">${esc(concept.label)}</button>`
  ).join('');
}

function renderSituations() {
  refs.situations.innerHTML = getSituations().map(
    (s) => `
      <button type="button" class="option" data-situation="${esc(s.id)}"
        aria-pressed="${s.id === state.express.situation}">
        <span class="option-title">${esc(s.label)}</span>
        <span class="option-jp" lang="ja">${esc(s.jp)}</span>
      </button>`
  ).join('');
}

export default {
  id: 'S04',

  mount(root) {
    root.innerHTML = template();
    refs = collectRefs(root);

    refs.concepts.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-concept]');
      if (!chip) return;
      state.express.conceptId = chip.dataset.concept;
      state.express.customText = '';
      refs.custom.value = '';
      renderConcepts();
    });

    refs.custom.addEventListener('input', () => {
      state.express.customText = refs.custom.value;
      renderConcepts();
    });

    refs.situations.addEventListener('click', (event) => {
      const option = event.target.closest('[data-situation]');
      if (!option) return;
      state.express.situation = option.dataset.situation;
      renderSituations();
    });

    refs.form.addEventListener('submit', (event) => {
      event.preventDefault();
      navigate('S05');
    });
  },

  onEnter() {
    refs.custom.value = state.express.customText;
    renderConcepts();
    renderSituations();
  }
};
