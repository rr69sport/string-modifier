import isString from '../helpers/is-string.js'
import { normaliceCharacters, removeSymbols } from '../helpers/special-chars.js'
/**
 * Convert a string to camel case
 * @param {string} string string to convert
 * @returns converted string
 * @example "Some long string" => "someLongString"
 */
const camelCase = (string) => {
  if (isString(string)) {
    const normalizedString = normaliceCharacters(string)
    const removedSymbols = removeSymbols(normalizedString)
    const stringToArray = removedSymbols.split(' ')
    const stringToUpperCase = stringToArray.map(string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
    const stringToUpperCaseJoined = stringToUpperCase.join('')
    const stringFirstLetterLowerCase = stringToUpperCaseJoined.charAt(0).toLowerCase() + stringToUpperCaseJoined.slice(1)

    return stringFirstLetterLowerCase
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}

export default camelCase
