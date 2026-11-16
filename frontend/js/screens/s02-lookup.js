// S02 Tra cứu — transitions: Trang chủ → S01, Xem từ đã lưu → S03

import { state } from '../core/state.js';
import { ALL_LESSONS, LESSON_FILTERS } from '../data/lessons.js';
import * as termService from '../services/termService.js';
import { esc, collectRefs } from '../utils/dom.js';
import { icons } from '../ui/icons.js';
import { showToast } from '../ui/toast.js';

let refs = {};

const template = () => `
  <nav class="screen-nav" aria-label="Điều hướng">
    <button type="button" class="btn btn-ghost" data-nav="S01">${icons.arrowLeft}<span>Trang chủ</span></button>
    <button type="button" class="btn btn-primary" data-nav="S03">
      ${icons.bookmark}<span>Xem từ đã lưu</span><span class="count" data-ref="savedCount"></span>
    </button>
  </nav>

  <header class="screen-head">
    <p class="eyebrow">S02</p>
    <h1 class="screen-title" tabindex="-1">Tra cứu</h1>
  </header>

  <div class="search">
    ${icons.search}
    <label class="sr-only" for="term-search">Tìm thuật ngữ</label>
    <input id="term-search" class="input search-input" type="search" data-ref="search"
      placeholder="Kanji, cách đọc hoặc nghĩa" autocomplete="off" />
  </div>

  <div class="chips" data-ref="lessons" role="group" aria-label="Lọc theo bài học"></div>

  <p class="result-count" data-ref="summary" aria-live="polite"></p>
  <ul class="term-list" data-ref="list"></ul>
`;

function saveButton(term) {
  const saved = termService.isSaved(term.id);
  return `
    <button type="button" class="save-btn" data-action="toggle-save" data-id="${esc(term.id)}"
      aria-pressed="${saved}" aria-label="${saved ? 'Bỏ lưu' : 'Lưu'} ${esc(term.kanji)}">
      ${saved ? icons.bookmarkFilled : icons.bookmark}<span>${saved ? 'Đã lưu' : 'Lưu'}</span>
    </button>`;
}

function termItem(term) {
  const sub = [term.reading, term.en].filter(Boolean).map(esc).join(' · ');
  return `
    <li class="term">
      <div class="term-body">
        <p class="term-jp" lang="ja">${esc(term.kanji)}${term.isNote ? ' <span class="tag">Ghi nhanh</span>' : ''}</p>
        ${sub ? `<p class="term-sub">${sub}</p>` : ''}
        <p class="term-vi">${esc(term.vi)}</p>
        ${term.shortDesc ? `<p class="term-desc">${esc(term.shortDesc)}</p>` : ''}
      </div>
      ${saveButton(term)}
    </li>`;
}

function emptyState(query) {
  const q = query.trim();
  return `
    <li class="empty">
      <p>Không tìm thấy thuật ngữ phù hợp.</p>
      ${q ? `
        <p class="empty-hint">Nghe được từ này trên lớp? Lưu lại để tra sau.</p>
        <button type="button" class="btn btn-outline" data-action="save-note">${icons.plus}<span>Lưu “${esc(q)}”</span></button>
      ` : ''}
    </li>`;
}

function renderSavedCount() {
  refs.savedCount.textContent = termService.getSavedCount();
}

function renderLessons() {
  refs.lessons.innerHTML = LESSON_FILTERS.map(
    (lesson) => `
      <button type="button" class="chip" data-lesson="${esc(lesson.id)}"
        aria-pressed="${lesson.id === state.lookup.lesson}">${esc(lesson.label)}</button>`
  ).join('');
}

function renderList() {
  const results = termService.searchTerms(state.lookup);
  refs.summary.textContent = `${results.length} thuật ngữ`;
  refs.list.innerHTML = results.length ? results.map(termItem).join('') : emptyState(state.lookup.query);
}

function onListClick(event) {
  const toggle = event.target.closest('[data-action="toggle-save"]');
  if (toggle) {
    const id = toggle.dataset.id;
    const saved = termService.toggleSaved(id);
    // Replace only the button so keyboard focus stays in place.
    toggle.outerHTML = saveButton(termService.getTerm(id));
    refs.list.querySelector(`[data-id="${CSS.escape(id)}"]`).focus();
    renderSavedCount();
    showToast(saved ? 'Đã lưu vào Ôn tập' : 'Đã bỏ lưu');
    return;
  }

  if (event.target.closest('[data-action="save-note"]')) {
    const note = termService.addNote(state.lookup.query);
    if (!note) return;
    state.lookup.lesson = ALL_LESSONS;
    renderLessons();
    renderList();
    renderSavedCount();
    showToast(`Đã lưu “${note.kanji}” vào Ôn tập`);
  }
}

export default {
  id: 'S02',

  mount(root) {
    root.innerHTML = template();
    refs = collectRefs(root);

    refs.search.addEventListener('input', () => {
      state.lookup.query = refs.search.value;
      renderList();
    });

    refs.lessons.addEventListener('click', (event) => {
      const chip = event.target.closest('[data-lesson]');
      if (!chip) return;
      state.lookup.lesson = chip.dataset.lesson;
      renderLessons();
      renderList();
    });

    refs.list.addEventListener('click', onListClick);
  },

  onEnter() {
    refs.search.value = state.lookup.query;
    renderLessons();
    renderList();
    renderSavedCount();
  }
};
