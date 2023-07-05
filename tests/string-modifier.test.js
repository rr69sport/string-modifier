import { describe, expect, it } from 'vitest'
import convertTo from '../src/index.js'

const textToConvert = 'Some loNg text to convert'

const camelText = convertTo.camelCase(textToConvert)
const pascalText = convertTo.pascalCase(textToConvert)
const kebabText = convertTo.kebabCase(textToConvert)
const snakeText = convertTo.snakeCase(textToConvert)

describe('String convert', () => {
  it('to camelCase', () => {
    expect(camelText).toBe('someLongTextToConvert')
  })

  it('to pascalCase', () => {
    expect(pascalText).toBe('SomeLongTextToConvert')
  })

  it('to kebabCase', () => {
    expect(kebabText).toBe('some-long-text-to-convert')
  })

  it('to snakeCase', () => {
    expect(snakeText).toBe('some_long_text_to_convert')
  })
})
