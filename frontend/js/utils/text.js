// Lowercase and strip Vietnamese diacritics so "khoa chinh" matches "Khóa chính".
export function normalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .trim();
}
