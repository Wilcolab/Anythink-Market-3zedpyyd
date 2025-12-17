// Utilities for string conversions

function toCamelCase(text) {
  if (text === null || text === undefined) {
    throw new TypeError('toCamelCase: input is null or undefined; expected a string');
  }
  if (typeof text !== 'string') {
    throw new TypeError(`toCamelCase: expected string but received ${typeof text}`);
  }

  const trimmed = text.trim();
  if (trimmed === '') return '';

  // Replace separators (spaces, hyphens, underscores) with single space
  const separated = trimmed.replace(/[-_\s]+/g, ' ');

  // Split into words and remove any non-letter/number characters inside words
  const words = separated
    .split(' ')
    .map(w => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase())
    .filter(Boolean);

  if (words.length === 0) return '';

  const [first, ...rest] = words;
  const tail = rest.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return first + tail;
}

function toDotCase(text) {
  if (text === null || text === undefined) {
    throw new TypeError('toDotCase: input is null or undefined; expected a string');
  }
  if (typeof text !== 'string') {
    throw new TypeError(`toDotCase: expected string but received ${typeof text}`);
  }

  const trimmed = text.trim();
  if (trimmed === '') return '';

  // Replace separators (spaces, hyphens, underscores) with single space
  const separated = trimmed.replace(/[-_\s]+/g, ' ');

  // Split into words and remove any non-letter/number characters inside words
  const words = separated
    .split(' ')
    .map(w => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase())
    .filter(Boolean);

  if (words.length === 0) return '';

  return words.join('.');
}

module.exports = { toCamelCase, toDotCase };

