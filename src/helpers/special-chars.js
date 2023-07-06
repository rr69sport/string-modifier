import isString from './is-string.js'

/**
 *  normalice characters from a string
 * @param {string} string - String to normalice characters
 * @example
 * "some text á É with characters Ó Ò" => "some text with characters"
 */
export const normaliceCharacters = (string) => {
  if (isString(string)) {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}

/**
 *  Remove symbols from a string
 * @param {string} string - String to remove symbols
 * @example
 * "some text with #$%&!symbols" => "some text with symbols"
 */
export const removeSymbols = (string) => {
  if (isString(string)) {
    return string.replace(/[^a-zA-Z0-9 ]/g, ' ').replace(/\s+/g, ' ')
  } else {
    throw TypeError(`The argument "${string}" must be a string.`)
  }
}
