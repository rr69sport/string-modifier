
import camelCase from './notations/camel-case.js'
import kebabCase from './notations/kebab-case.js'
import pascalCase from './notations/pascal-case.js'
import snakeCase from './notations/snake-case.js'

const convertTo = {
  /**
   * Convert a string to snake case
   * @param {string} string string to convert
   * @returns converted string
   * @example "Some long string" => "some_long_string"
   */
  snakeCase: (string) => snakeCase(string),

  /**
   * Convert a string to kebab case
   * @param {string} string string to convert
   * @returns converted string
   * @example "Some long string" => "some-long-string"
   */
  kebabCase: (string) => kebabCase(string),
  
  /**
   * Convert a string to pascal case
   * @param {string} string string to convert
   * @returns converted string
   * @example "Some long string" => "SomeLongString"
   */
  pascalCase: (string) => pascalCase(string),
  
  /**
   * Convert a string to camel case
   * @param {string} string string to convert
   * @returns converted string
   * @example "Some long string" => "someLongString"
   */
  camelCase: (string) => camelCase(string),
}

export default  convertTo