// Builds the S05 suggestion from the S04 selection.

import { CONCEPTS, createCustomConcept } from '../data/concepts.js';
import { SITUATIONS } from '../data/situations.js';

export function getConcepts() {
  return CONCEPTS;
}

export function getSituations() {
  return SITUATIONS;
}

export function buildSuggestion({ conceptId, customText = '', situation }) {
  const custom = customText.trim();
  const concept = custom
    ? createCustomConcept(custom)
    : CONCEPTS.find((c) => c.id === conceptId) || CONCEPTS[0];
  const situationInfo = SITUATIONS.find((s) => s.id === situation) || SITUATIONS[0];
  const template = concept.templates[situationInfo.id];

  return {
    label: concept.label,
    jpTerm: concept.jpTerm,
    enTerm: concept.enTerm,
    situationLabel: situationInfo.label,
    sentence: { jp: template.lead + template.phrase, vi: template.vi },
    plain: { jp: concept.plainJp, romaji: concept.plainRomaji, vi: concept.plainVi },
    metaphor: concept.metaphor,
    enMapping: concept.enMapping
  };
}
