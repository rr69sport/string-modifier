import isString from '../helpers/is-string.js'
/**
 * Convert a string to snake case
 * @param {string} string string to convert
 * @returns converted string
 * @example "Some long string" => "some_long_string"
 */
const snakeCase = (string) => {
  if (isString(string)) {
    const stringModified = string.replace(/ /g, '_')
    return stringModified.toLowerCase()
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}

export default snakeCase