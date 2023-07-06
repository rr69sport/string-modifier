import { describe, expect, it } from 'vitest'
import { normaliceCharacters, removeSymbols } from '../src/helpers/special-chars.js'

describe('Normalice characters and remove symbols', () => {
  it('normalice characters', () => {
    expect(normaliceCharacters('Some string with á É Ê strange characters')).toBe('Some string with a E E strange characters')
  })

  it('remove symbols', () => {
    expect(removeSymbols('Some string#with #~€¬ symbols')).toBe('Some string with symbols')
  })
})
