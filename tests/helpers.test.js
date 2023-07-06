import { describe, expect, it } from 'vitest'
import isString from '../src/helpers/is-string.js'

describe('Is string', () => {
  it('should receive a string as a parameter', () => {
    expect(isString('Is string')).toBe(true)
  })
})
