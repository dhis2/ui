import { boolean } from '../boolean.js'
import {
    testValidatorValues,
    allowsEmptyValues,
} from '../test-helpers/index.js'

const invalidBooleanMessage = 'Please provide a boolean value'

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
