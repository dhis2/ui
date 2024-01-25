import { validateInput } from './calendar-input.js'

describe('validateInput', () => {
    it('should return true when the input is valid with - as delimiter', () => {
        expect(validateInput('2024-01-15')).toBe(true)
    })

    it('should return true when the input is valid with / as delimiter', () => {
        expect(validateInput('2024/01/15')).toBe(true)
    })

    it('should return false when the input different delimiters', () => {
        expect(validateInput('2024/01-15')).toBe(false)
    })

    it('should return false when the input is incorrect', () => {
        expect(validateInput('202-01-15')).toBe(false)
    })
})
