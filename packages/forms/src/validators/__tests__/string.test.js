import { string, invalidStringMessage } from '../string.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: string', () => {
    allowsEmptyValues(string)

    describe('allows strings', () => {
        testValidatorValues(string, undefined, [
            'text',
            '1',
            '0.15',
            'true',
            'false',
        ])
    })

    describe('rejects other data types', () => {
        testValidatorValues(string, invalidStringMessage, [
            1,
            true,
            {},
            [],
            () => {},
        ])
    })
})
