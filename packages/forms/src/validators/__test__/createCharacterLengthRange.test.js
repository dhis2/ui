import { createCharacterLengthRange } from '../createCharacterLengthRange.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'
import { requiredArgumentErrorMessage } from '../helpers/index.js'

describe('validator: createCharacterLengthRange', () => {
    const betweenSixAndTenChars = createCharacterLengthRange(6, 10)
    const inValidMsg = 'Please enter between 6 and 10 characters'

    it('should throw an error when lower or upper bound are not a number', () => {
        expect(() => {
            createCharacterLengthRange(undefined, undefined)
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createCharacterLengthRange('test', 'test')
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createCharacterLengthRange(1, undefined)
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createCharacterLengthRange(undefined, 0)
        }).toThrowError(requiredArgumentErrorMessage)
    })

    it('should create a function', () => {
        expect(typeof betweenSixAndTenChars).toEqual('function')
    })

    allowsEmptyValues(betweenSixAndTenChars)

    describe('allows within-range strings', () => {
        testValidatorValues(betweenSixAndTenChars, undefined, [
            'abcdef', // 6
            'abcdefgh',
            'abcdefghij', // 10
        ])
    })

    describe('rejects non-string values', () => {
        testValidatorValues(betweenSixAndTenChars, inValidMsg, [
            true,
            3,
            {},
            [],
            () => {},
        ])
    })

    describe('rejects out-of-range strings', () => {
        testValidatorValues(betweenSixAndTenChars, inValidMsg, [
            'a',
            'abcde', // 5
            'abcdefghijk', // 11
            'abcdefghijklmnopqrstuvw',
        ])
    })
})
