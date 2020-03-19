import { boolean, invalidBooleanMessage } from '../boolean.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: boolean', () => {
    allowsEmptyValues(boolean)

    describe('allows boolean values', () => {
        testValidatorValues(boolean, undefined, [true, false])
    })

    describe('rejects non-boolean values', () => {
        testValidatorValues(boolean, invalidBooleanMessage, [
            'text',
            3,
            {},
            [],
            () => {},
        ])
    })
})
