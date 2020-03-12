import { integer, invalidIntegerMessage } from '../integer.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

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

    describe('rejects other data types', () => {
        testValidatorValues(integer, invalidIntegerMessage, [
            'text',
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
            '0.23456',
            '5.987',
            '1e-12',
        ])
    })
})
