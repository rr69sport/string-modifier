import isString from '../helpers/is-string.js'
import { normaliceCharacters, removeSymbols } from '../helpers/special-chars.js'
/**
 * Convert a string to pascal case
 * @param {string} string string to convert
 * @returns converted string
 * @example "Some long string" => "SomeLongString"
 */
const pascalCase = (string) => {
  if (isString(string)) {
    const normalizedString = normaliceCharacters(string)
    const removedSymbols = removeSymbols(normalizedString)
    const stringToArray = removedSymbols.split(' ')
    const stringToUpperCase = stringToArray.map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
    const stringToUpperCaseJoined = stringToUpperCase.join('')
    return stringToUpperCaseJoined
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}

export default pascalCase
