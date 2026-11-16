// Business logic for terms: search, saved words (bookmarks) and quick notes.
// Screens call these functions instead of touching data or storage directly.

import { TERMS, DEFAULT_SAVED_IDS } from '../data/terms.js';
import { ALL_LESSONS, NOTE_LESSON } from '../data/lessons.js';
import { load, save } from './storage.js';
import { normalize } from '../utils/text.js';

const STORAGE = { saved: 'saved-ids', notes: 'notes' };

let notes = load(STORAGE.notes, []);
// Set keeps insertion order, so the last item is the most recently saved.
const savedIds = new Set(load(STORAGE.saved, DEFAULT_SAVED_IDS));

function allTerms() {
  return [...notes, ...TERMS];
}

function findTerm(id) {
  return allTerms().find((term) => term.id === id);
}

export { findTerm as getTerm };

function persist() {
  save(STORAGE.saved, [...savedIds]);
  save(STORAGE.notes, notes);
}

function searchableText(term) {
  return normalize([term.kanji, term.reading, term.en, term.vi, term.shortDesc].join(' '));
}

export function getTermCount() {
  return TERMS.length;
}

export function searchTerms({ query = '', lesson = ALL_LESSONS } = {}) {
  const q = normalize(query);
  return allTerms().filter((term) => {
    if (lesson !== ALL_LESSONS && term.lesson !== lesson) return false;
    return !q || searchableText(term).includes(q);
  });
}

export function isSaved(id) {
  return savedIds.has(id);
}

export function getSavedCount() {
  return getSavedTerms().length;
}

// Newest first.
export function getSavedTerms() {
  return [...savedIds].reverse().map(findTerm).filter(Boolean);
}

// Returns the new saved state of the term.
export function toggleSaved(id) {
  if (savedIds.has(id)) {
    savedIds.delete(id);
  } else if (findTerm(id)) {
    savedIds.add(id);
  }
  persist();
  return savedIds.has(id);
}

// Save a word heard in class but not found in the glossary, to look up later.
export function addNote(text) {
  const value = text.trim();
  if (!value) return null;

  let note = notes.find((n) => normalize(n.kanji) === normalize(value));
  if (!note) {
    note = {
      id: `note-${Date.now()}`,
      lesson: NOTE_LESSON,
      isNote: true,
      kanji: value,
      reading: '',
      en: '',
      vi: 'Từ ghi nhanh — cần tra lại',
      shortDesc: '',
      plainJp: '',
      deepExpl: 'Hỏi lại giảng viên hoặc bạn bè để xác nhận cách viết và nghĩa chính xác.',
      quote: ''
    };
    notes = [note, ...notes];
  }
  savedIds.delete(note.id);
  savedIds.add(note.id);
  persist();
  return note;
}
