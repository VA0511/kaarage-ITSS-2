// Screen transition diagram (画面遷移図). Single source of truth for navigation:
// the router only allows the edges listed here.
//
//   S01 Trang chủ ──Chọn Tra cứu──▶ S02 Tra cứu ──Xem từ đã lưu──▶ S03 Ôn tập
//                ◀──Trang chủ────            ◀──Quay lại────────
//                ◀──────────────────Trang chủ──────────────────────
//
//   S01 Trang chủ ──Chọn Diễn đạt─▶ S04 Diễn đạt ──Nhấn Xem gợi ý─▶ S05 Gợi ý
//                ◀──Trang chủ────              ◀──Nhấn Thử lại───
//                ◀──────────────────Trang chủ──────────────────────

export const START_SCREEN = 'S01';

export const SCREEN_TITLES = {
  S01: 'Trang chủ',
  S02: 'Tra cứu',
  S03: 'Ôn tập',
  S04: 'Diễn đạt',
  S05: 'Gợi ý'
};

export const TRANSITIONS = {
  S01: { S02: 'Chọn Tra cứu', S04: 'Chọn Diễn đạt' },
  S02: { S01: 'Trang chủ', S03: 'Xem từ đã lưu' },
  S03: { S02: 'Quay lại', S01: 'Trang chủ' },
  S04: { S01: 'Trang chủ', S05: 'Nhấn Xem gợi ý' },
  S05: { S04: 'Nhấn Thử lại', S01: 'Trang chủ' }
};
