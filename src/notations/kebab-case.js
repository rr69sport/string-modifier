import isString from '../helpers/is-string.js'
import { normaliceCharacters, removeSymbols } from '../helpers/special-chars.js'
/**
 * Convert a string to kebab case
 * @param {string} string string to convert
 * @returns converted string
 * @example "Some long string" => "some-long-string"
 */
const kebabCase = (string) => {
  if (isString(string)) {
    const normalizedString = normaliceCharacters(string)
    const removedSymbols = removeSymbols(normalizedString)
    const stringModified = removedSymbols.replace(/ /g, '-')
    return stringModified.toLowerCase()
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}

export default kebabCase
