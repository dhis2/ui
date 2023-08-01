import { integer } from '../integer.js'
import {
    testValidatorValues,
    allowsEmptyValues,
} from '../test-helpers/index.js'

const invalidIntegerMessage = 'Please provide a round number without decimals'

describe('validator: integer', () => {
    allowsEmptyValues(integer)

    describe('allows integers and string representations of integers', () => {
        testValidatorValues(integer, undefined, [
            -2,
            0,
            2,
            10000,
            '-2',
            '0',
            '2',
            '10000',
            12e4,
        ])
    })

    describe('rejects other data types and leading zeros', () => {
        testValidatorValues(integer, invalidIntegerMessage, [
            'text',
            '014',
            true,
            {},
            [],
            () => {},
        ])
    })

    describe('rejects floats and string representations of floats', () => {
        testValidatorValues(integer, invalidIntegerMessage, [
            0.23456,
            5.987,
            1e-12,
            '4.0',
            '4.000',
            '4,0',
            '0.23456',
            '5.987',
            '1e-12',
        ])
    })
})
