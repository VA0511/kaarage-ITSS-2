// UI state shared between screens for the current session (not persisted).
// Saved words live in termService because they must survive reloads.

import { ALL_LESSONS } from '../data/lessons.js';
import { DEFAULT_CONCEPT_ID } from '../data/concepts.js';
import { DEFAULT_SITUATION } from '../data/situations.js';

export const state = {
  lookup: { query: '', lesson: ALL_LESSONS },
  review: { hideMeaning: false },
  express: { conceptId: DEFAULT_CONCEPT_ID, customText: '', situation: DEFAULT_SITUATION }
};
