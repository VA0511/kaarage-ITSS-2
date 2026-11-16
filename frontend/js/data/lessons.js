// Lesson groups used to filter the term list on S02.

export const ALL_LESSONS = 'all';
export const NOTE_LESSON = 'note';

export const LESSONS = [
  { id: 'itss09', label: 'ITSS Bài 09' },
  { id: 'dbnet', label: 'CSDL & Mạng' },
  { id: 'swe', label: 'Kỹ thuật phần mềm' }
];

export const LESSON_FILTERS = [{ id: ALL_LESSONS, label: 'Tất cả' }, ...LESSONS];
