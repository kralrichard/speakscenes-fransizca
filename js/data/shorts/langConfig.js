// ============================================================================
// Language configuration — FRENCH (fr-FR). Apostrophes are token separators,
// so elisions ("j'ai" -> j + ai, "l'avion" -> l + avion) align consistently
// between content and the recognizer. The single-letter elision tokens are
// listed as function words so dropping one is a minor error. "ne" is treated
// as a function word (spoken French drops it); "pas" carries the negation.
// ============================================================================

export const LOCALE = 'fr-FR';
export const APP_LANG = 'Fransızca';
// localStorage namespace — MUST be unique per clone (same-origin hosting).
export const APP_KEY = 'ss-fr';

export const FUNCTION_WORDS = [
  'le', 'la', 'les', 'l', 'un', 'une', 'des', 'de', 'du', 'd', 'et', 'ou', 'à',
  'au', 'aux', 'en', 'dans', 'sur', 'avec', 'pour', 'est', 'suis', 'sont', 'était',
  'je', 'j', 'tu', 'il', 'elle', 'on', 'nous', 'vous', 'ils', 'elles', 'me', 'm',
  'te', 't', 'se', 's', 'ce', 'c', 'ça', 'qui', 'que', 'qu', 'y', 'ne', 'n',
  'ici', 'là', 'oui', 'aussi', 'si', 'mais', 'plaît'
];

export const NEGATION_WORDS = ['pas', 'jamais', 'rien', 'personne', 'aucun', 'aucune', 'non'];

export const NUMBER_WORDS = [
  'zéro', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'vingt', 'trente',
  'quarante', 'cinquante', 'soixante', 'cent', 'mille'
];

export const FILLER_WORDS = ['euh', 'heu', 'hmm', 'hein', 'ben'];

export const DIGIT_WORDS = {
  '0': 'zéro', '1': 'un', '2': 'deux', '3': 'trois', '4': 'quatre', '5': 'cinq',
  '6': 'six', '7': 'sept', '8': 'huit', '9': 'neuf', '10': 'dix', '11': 'onze',
  '12': 'douze', '20': 'vingt', '100': 'cent', '1000': 'mille'
};

export const CONTRACTIONS = [];
export const ASR_EQUIVALENTS = [['ok', 'okay']];
