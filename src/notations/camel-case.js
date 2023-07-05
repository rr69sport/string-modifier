import isString from '../../helpers/is-string.js'
/**
 * Convert a string to camel case
 * @param {string} string string to convert
 * @returns converted string
 * @example "Some long string" => "someLongString"
 */
const camelCase = (string) => {
  if (isString(string)) {
    const stringToArray = string.split(' ')
    const stringToUpperCase = stringToArray.map(string => string.charAt(0).toUpperCase() + string.slice(1))
    const stringToUpperCaseJoined = stringToUpperCase.join('')
    const stringFirstLetterLowerCase = stringToUpperCaseJoined.charAt(0).toLowerCase() + stringToUpperCaseJoined.slice(1)
    return stringFirstLetterLowerCase
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}

export default camelCase