/**
 * Converts a string to Pascal case (each word starts with an uppercase letter without spaces or symbols).
 * @param {string} text - The input string to convert.
 * @returns {string} The Pascal case representation of the input string.
 */
function toPascalCase(text) {
  return text
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace(/[^\w-]+/g, "")
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1));
}

/**
 * Transforms a string to camelCase.
 * @param {string} input - The input string to transform.
 * @returns {string} - The camelCase string.
 */
function camelCase(input) {
  return input
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (e, r) =>
      0 == +e ? "" : 0 === r ? e.toLowerCase() : e.toUpperCase()
    )
    .replace(/[^\w]+/g, "")
    .replace(/^\w/, (c) => c.toLowerCase());
}

/**
 * Slugifies a string.
 * @param {string} str - The input string to slugify.
 * @param {boolean} numbers - Whether to include numbers in the slug.
 * @returns {string} - The slugified string.
 */
function slugify(str, numbers = true) {
  str = str.replace(/^\s+|\s+$/g, "");
  str = str.toLowerCase();
  if (numbers) {
    str = str.replace(/[^a-z0-9 -]/g, "");
  } else {
    str = str.replace(/[^a-z -]/g, "");
  }
  str = str.replace(/\s+/g, "-").replace(/-+/g, "-");
  return str;
}

/**
 * Converts a string to lowercase.
 * @param {string} text - The input string to convert.
 * @returns {string} The lowercase representation of the input string.
 */
function toLower(text) {
  return text.toLowerCase();
}

/**
 * Converts a string to uppercase.
 * @param {string} text - The input string to convert.
 * @returns {string} The uppercase representation of the input string.
 */
function toUpper(text) {
  return text.toUpperCase();
}

/**
 * Converts a string to title case (each word starts with an uppercase letter).
 * @param {string} text - The input string to convert.
 * @returns {string} The title case representation of the input string.
 */
function toTitleCase(text) {
  return text.toLowerCase().replace(/(?:^|\s|-|_)\w/g, function (match) {
    return match.toUpperCase();
  });
}

/**
 * Object containing methods to convert strings to different formats.
 */
export default {
  camel: camelCase,
  slug: slugify,
  lower: toLower,
  upper: toUpper,
  title: toTitleCase,
  pascal: toPascalCase,
};
