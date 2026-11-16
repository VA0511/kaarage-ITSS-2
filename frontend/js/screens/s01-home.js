// S01 Trang chủ — transitions: Chọn Tra cứu → S02, Chọn Diễn đạt → S04

import * as termService from '../services/termService.js';
import { getConcepts } from '../services/suggestionService.js';
import { collectRefs } from '../utils/dom.js';
import { icons } from '../ui/icons.js';

let refs = {};

const template = () => `
  <header class="screen-head home-head">
    <p class="eyebrow">S01</p>
    <h1 class="screen-title" tabindex="-1">Thuật ngữ IT tiếng Nhật, gọn trong một chỗ.</h1>
    <p class="lead">Tra nhanh khi nghe giảng. Diễn đạt dễ dàng khi phát biểu.</p>
  </header>

  <div class="choices">
    <button type="button" class="choice" data-nav="S02">
      <span class="choice-mark" lang="ja" aria-hidden="true">検</span>
      <span class="choice-body">
        <span class="choice-title">Tra cứu</span>
        <span class="choice-desc">Tìm thuật ngữ và lưu từ để ôn tập.</span>
        <span class="choice-meta" data-ref="lookupMeta"></span>
      </span>
      <span class="choice-arrow">${icons.arrowRight}</span>
    </button>

    <button type="button" class="choice" data-nav="S04">
      <span class="choice-mark" lang="ja" aria-hidden="true">話</span>
      <span class="choice-body">
        <span class="choice-title">Diễn đạt</span>
        <span class="choice-desc">Nói một khái niệm bằng tiếng Nhật đơn giản.</span>
        <span class="choice-meta" data-ref="expressMeta"></span>
      </span>
      <span class="choice-arrow">${icons.arrowRight}</span>
    </button>
  </div>
`;

export default {
  id: 'S01',

  mount(root) {
    root.innerHTML = template();
    refs = collectRefs(root);
  },

  onEnter() {
    refs.lookupMeta.textContent = `${termService.getTermCount()} thuật ngữ · ${termService.getSavedCount()} đã lưu`;
    refs.expressMeta.textContent = `${getConcepts().length} chủ đề mẫu`;
  }
};
