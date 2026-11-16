// S05 Gợi ý — transitions: Nhấn Thử lại → S04, Trang chủ → S01

import { state } from '../core/state.js';
import { buildSuggestion } from '../services/suggestionService.js';
import { esc, collectRefs } from '../utils/dom.js';
import { icons } from '../ui/icons.js';
import { copyText } from '../ui/clipboard.js';
import { showToast } from '../ui/toast.js';

let refs = {};

const template = () => `
  <nav class="screen-nav" aria-label="Điều hướng">
    <button type="button" class="btn btn-ghost" data-nav="S04">${icons.arrowLeft}<span>Thử lại</span></button>
    <button type="button" class="btn btn-ghost" data-nav="S01">${icons.home}<span>Trang chủ</span></button>
  </nav>
  <div data-ref="content"></div>
`;

const copyButton = (text) => `
  <button type="button" class="btn btn-outline btn-sm" data-copy="${esc(text)}">${icons.copy}<span>Sao chép</span></button>`;

function content(s) {
  const sub = [s.label !== s.jpTerm ? s.label : '', s.enTerm].filter(Boolean).map(esc).join(' · ');
  return `
    <header class="screen-head">
      <p class="eyebrow">S05 · ${esc(s.situationLabel)}</p>
      <h1 class="screen-title" tabindex="-1" lang="ja">${esc(s.jpTerm)}</h1>
      ${sub ? `<p class="lead">${sub}</p>` : ''}
    </header>

    <div class="stack">
      <article class="card card-accent">
        <h2 class="card-label">Câu phát biểu mẫu</h2>
        <p class="jp-text jp-lg" lang="ja">${esc(s.sentence.jp)}</p>
        <p class="vi-text">${esc(s.sentence.vi)}</p>
        <div class="card-actions">${copyButton(s.sentence.jp)}</div>
      </article>

      <article class="card">
        <h2 class="card-label">Cách nói đơn giản</h2>
        <p class="jp-text" lang="ja">${esc(s.plain.jp)}</p>
        <p class="romaji">${esc(s.plain.romaji)}</p>
        <p class="vi-text">${esc(s.plain.vi)}</p>
        <div class="card-actions">${copyButton(s.plain.jp)}</div>
      </article>

      <article class="card">
        <h2 class="card-label">Ví dụ đời thường</h2>
        <p>${esc(s.metaphor)}</p>
        <h2 class="card-label card-label-spaced">Từ khóa tiếng Anh</h2>
        <p class="mono">${esc(s.enMapping)}</p>
      </article>
    </div>
  `;
}

export default {
  id: 'S05',

  mount(root) {
    root.innerHTML = template();
    refs = collectRefs(root);

    refs.content.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-copy]');
      if (!button) return;
      const ok = await copyText(button.dataset.copy);
      showToast(ok ? 'Đã sao chép' : 'Không thể sao chép');
    });
  },

  onEnter() {
    refs.content.innerHTML = content(buildSuggestion(state.express));
  }
};
