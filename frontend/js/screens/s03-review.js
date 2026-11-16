// S03 Ôn tập — transitions: Quay lại → S02, Trang chủ → S01

import { state } from '../core/state.js';
import * as termService from '../services/termService.js';
import { esc, collectRefs } from '../utils/dom.js';
import { icons } from '../ui/icons.js';
import { showToast } from '../ui/toast.js';

let refs = {};

const template = () => `
  <nav class="screen-nav" aria-label="Điều hướng">
    <button type="button" class="btn btn-ghost" data-nav="S02">${icons.arrowLeft}<span>Quay lại</span></button>
    <button type="button" class="btn btn-ghost" data-nav="S01">${icons.home}<span>Trang chủ</span></button>
  </nav>

  <header class="screen-head screen-head-row">
    <div>
      <p class="eyebrow">S03</p>
      <h1 class="screen-title" tabindex="-1">Ôn tập</h1>
      <p class="lead" data-ref="summary"></p>
    </div>
    <button type="button" class="switch" data-ref="hideToggle" aria-pressed="false">
      <span class="switch-track" aria-hidden="true"></span>
      <span>Ẩn nghĩa</span>
    </button>
  </header>

  <ul class="review-list" data-ref="list"></ul>
`;

function explanation(term) {
  const rows = [
    ['Tiếng Nhật đơn giản', term.plainJp, 'ja'],
    ['Giải thích thêm', term.deepExpl, ''],
    ['Ví dụ trong bài', term.quote, 'ja']
  ].filter(([, text]) => text);

  if (!rows.length) return '';
  return `
    <details class="explain">
      <summary>Giải thích</summary>
      <dl>
        ${rows.map(([label, text, lang]) => `
          <dt>${label}</dt>
          <dd${lang ? ` lang="${lang}"` : ''}>${esc(text)}</dd>`).join('')}
      </dl>
    </details>`;
}

function reviewCard(term) {
  const sub = [term.reading, term.en].filter(Boolean).map(esc).join(' · ');
  return `
    <li class="card review-card">
      <div class="review-head">
        <div>
          <p class="term-jp" lang="ja">${esc(term.kanji)}</p>
          ${sub ? `<p class="term-sub">${sub}</p>` : ''}
        </div>
        <button type="button" class="icon-btn" data-action="remove" data-id="${esc(term.id)}"
          aria-label="Bỏ lưu ${esc(term.kanji)}" title="Bỏ lưu">${icons.bookmarkFilled}</button>
      </div>
      <button type="button" class="reveal-btn" data-action="reveal">Hiện nghĩa</button>
      <div class="review-meaning">
        <p class="term-vi">${esc(term.vi)}</p>
        ${explanation(term)}
      </div>
    </li>`;
}

function render() {
  const terms = termService.getSavedTerms();
  const hide = state.review.hideMeaning;

  refs.summary.textContent = terms.length ? `${terms.length} từ đã lưu` : '';
  refs.hideToggle.hidden = !terms.length;
  refs.hideToggle.setAttribute('aria-pressed', String(hide));
  refs.list.classList.toggle('is-hiding', hide);

  refs.list.innerHTML = terms.length
    ? terms.map(reviewCard).join('')
    : `<li class="empty">
         <p>Chưa có từ nào được lưu.</p>
         <p class="empty-hint">Bấm “Lưu” bên cạnh thuật ngữ ở màn hình Tra cứu.</p>
         <button type="button" class="btn btn-outline" data-nav="S02">${icons.arrowLeft}<span>Quay lại Tra cứu</span></button>
       </li>`;
}

export default {
  id: 'S03',

  mount(root) {
    root.innerHTML = template();
    refs = collectRefs(root);

    refs.hideToggle.addEventListener('click', () => {
      state.review.hideMeaning = !state.review.hideMeaning;
      render();
    });

    refs.list.addEventListener('click', (event) => {
      const remove = event.target.closest('[data-action="remove"]');
      if (remove) {
        termService.toggleSaved(remove.dataset.id);
        render();
        showToast('Đã bỏ lưu');
        return;
      }
      const reveal = event.target.closest('[data-action="reveal"]');
      if (reveal) reveal.closest('.review-card').classList.add('is-revealed');
    });
  },

  onEnter() {
    render();
  }
};
