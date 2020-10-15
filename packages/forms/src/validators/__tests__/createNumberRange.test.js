import { createNumberRange } from '../createNumberRange.js'
import { requiredArgumentErrorMessage } from '../helpers/index.js'
import { testValidatorValues, allowsEmptyValues } from '../test-helpers'

describe('validator: createNumberRange', () => {
    const betweenSixAndTen = createNumberRange(6, 10)
    const errorMessage = 'Number cannot be less than 6 or more than 10'

    it('should throw an error when lower or upper bound are not a number', () => {
        expect(() => {
            createNumberRange(undefined, undefined)
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createNumberRange('test', 'test')
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createNumberRange(1, undefined)
        }).toThrowError(requiredArgumentErrorMessage)
        expect(() => {
            createNumberRange(undefined, 0)
        }).toThrowError(requiredArgumentErrorMessage)
    })

    it('should create a function', () => {
        expect(typeof betweenSixAndTen).toEqual('function')
    })

    allowsEmptyValues(betweenSixAndTen)

    describe('allows floats, integers and string representations of numbers', () => {
        testValidatorValues(betweenSixAndTen, undefined, [
            7,
            7.1,
            0.71e1,
            '7',
            '7.1',
        ])
    })

    describe('allows within-range numbers', () => {
        testValidatorValues(betweenSixAndTen, undefined, [
            6,
            8,
            10,
            9.999999,
            6.000001,
        ])
    })

    describe('rejects non-numerical values', () => {
        testValidatorValues(betweenSixAndTen, errorMessage, [
            'test',
            true,
            {},
            [],
            () => {},
        ])
    })

    describe('rejects out-of-range numbers', () => {
        testValidatorValues(betweenSixAndTen, errorMessage, [
            3,
            5,
            5.999999,
            10.000001,
            1000000,
        ])
    })
})
