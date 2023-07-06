import { describe, expect, it } from 'vitest'
import convertTo from '../src/index.js'

const { camelCase, pascalCase, kebabCase, snakeCase } = convertTo

describe('String convert', () => {
  it('to camelCase', () => {
    expect(camelCase('Some long string@ to convert.')).toBe('someLongStringToConvert')
  })

  it('to pascalCase', () => {
    expect(pascalCase('Some lÓng#string to_@convért.')).toBe('SomeLongStringToConvert')
  })

  it('to kebabCase', () => {
    expect(kebabCase('Some long strÍng tó convert.')).toBe('some-long-string-to-convert')
  })

  it('to snakeCase', () => {
    expect(snakeCase('Some lóng__--string to cÓnvert.')).toBe('some_long_string_to_convert')
  })
})
