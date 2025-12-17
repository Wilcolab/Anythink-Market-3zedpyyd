// Utilities for string conversions

/**
 * Convert a string to camelCase.
 *
 * Rules:
 * - Accepts a single string argument.
 * - Trims leading/trailing whitespace before processing.
 * - Treats spaces, hyphens (`-`) and underscores (`_`) as word separators.
 * - Removes other non-alphanumeric characters (preserves Unicode letters and numbers).
 * - The first word is entirely lowercase; each subsequent word starts with an uppercase letter.
 * - Returns an empty string for empty input (after trimming) or for inputs containing no word characters.
 *
 * @param {string} text - The input string to convert.
 * @throws {TypeError} If `text` is `null`/`undefined` or not a string.
 * @returns {string} The camelCased string.
 *
 * @example
 * toCamelCase('hello world'); // 'helloWorld'
 * @example
 * toCamelCase('  This-is_an Example!  '); // 'thisIsAnExample'
 */
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

  // Split into words, strip remaining non-letter/number chars inside words, and lower-case
  const words = separated
    .split(' ')
    .map(w => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase())
    .filter(Boolean);

  if (words.length === 0) return '';

  const [first, ...rest] = words;
  const tail = rest.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return first + tail;
}

/**
 * Convert a string to dot.case (lowercase words separated by dots).
 *
 * Rules:
 * - Accepts a single string argument.
 * - Trims leading/trailing whitespace before processing.
 * - Treats spaces, hyphens (`-`) and underscores (`_`) as word separators.
 * - Removes other non-alphanumeric characters (preserves Unicode letters and numbers).
 * - All output is lowercase, words are joined with `.`.
 * - Returns an empty string for empty input (after trimming) or for inputs containing no word characters.
 *
 * @param {string} text - The input string to convert.
 * @throws {TypeError} If `text` is `null`/`undefined` or not a string.
 * @returns {string} The dotted lowercase string.
 *
 * @example
 * toDotCase('Hello World'); // 'hello.world'
 * @example
 * toDotCase(' hello__world-test '); // 'hello.world.test'
 */
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

  // Split into words, strip remaining non-letter/number chars inside words, and lower-case
  const words = separated
    .split(' ')
    .map(w => w.replace(/[^\p{L}\p{N}]/gu, '').toLowerCase())
    .filter(Boolean);

  if (words.length === 0) return '';

  return words.join('.');
}

/**
 * Convert a string to kebab-case (lowercase words separated by hyphens).
 *
 * Steps:
 * - Validate input: must be a non-empty string (throws TypeError otherwise).
 * - Trim whitespace and convert to lowercase.
 * - Replace sequences of non-alphanumeric characters with a single hyphen.
 * - Remove remaining invalid characters and strip leading/trailing hyphens.
 *
 * @param {string} text - The input string to convert.
 * @throws {TypeError} If `text` is null/undefined, not a string, or is an empty string after trimming.
 * @returns {string} The kebab-case string.
 *
 * @example
 * toKebabCase('Hello World'); // 'hello-world'
 * @example
 * toKebabCase(' hello__world-test '); // 'hello-world-test'
 */
function toKebabCase(text) {
  if (text === null || text === undefined) {
    throw new TypeError('toKebabCase: input is null or undefined; expected a non-empty string');
  }
  if (typeof text !== 'string') {
    throw new TypeError(`toKebabCase: expected string but received ${typeof text}`);
  }

  const trimmed = text.trim();
  if (trimmed === '') {
    throw new TypeError('toKebabCase: expected a non-empty string');
  }

  // Normalize and collapse separators to hyphens
  let s = trimmed.toLowerCase();
  // Replace any sequence of non-letter/number characters with a single hyphen
  s = s.replace(/[^\p{L}\p{N}]+/gu, '-');
  // Remove any characters that are not letters, numbers or hyphens (safety step)
  s = s.replace(/[^\p{L}\p{N}-]+/gu, '');
  // Trim leading/trailing hyphens
  s = s.replace(/^-+|-+$/g, '');

  return s;
}

module.exports = { toCamelCase, toDotCase, toKebabCase };