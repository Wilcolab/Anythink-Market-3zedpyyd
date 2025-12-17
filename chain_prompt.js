/**
 * Convert a string to kebab-case (lowercase words separated by hyphens).
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

  let s = trimmed.toLowerCase();
  s = s.replace(/[^\p{L}\p{N}]+/gu, '-');       // collapse non-alnum sequences to '-'
  s = s.replace(/[^\p{L}\p{N}-]+/gu, '');       // remove anything not letter/number/hyphen
  s = s.replace(/^-+|-+$/g, '');                // trim hyphens

  return s;
}