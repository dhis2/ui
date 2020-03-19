import { number, invalidNumberMessage } from '../number.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: number', () => {
    allowsEmptyValues(number)

    describe('allows numbers and string representations of numbers', () => {
        testValidatorValues(number, undefined, [
            -2,
            0,
            2,
            10000,
            '-2',
            '0',
            '2',
            '10000',
            12e4,
            0.23456,
            5.987,
            1e-12,
            '0.23456',
            '5.987',
            '1e-12',
        ])
    })

    describe('rejects other data types', () => {
        testValidatorValues(number, invalidNumberMessage, [
            'text',
            true,
            {},
            [],
            () => {},
        ])
    })
})
