function toCamelCase(text) {
  if (!text) return '';
  // Récupère les "mots" constitués de lettres ou chiffres (support Unicode)
  const words = String(text).match(/[\p{L}\p{N}]+/gu);
  if (!words) return '';
  const [first, ...rest] = words.map(w => w.toLowerCase());
  return first + rest.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}