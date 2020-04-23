import { createMaxCharacterLength } from '../createMaxCharacterLength.js'
import { testValidatorValues } from './helpers/index.js'

describe('validator: createMaxCharacterLength', () => {
    const maxSixChars = createMaxCharacterLength(6)
    const errorMessage = 'Please enter a maximum of 6 characters'

    /*
     * Since createMaxCharacterLength calls createNumberRange internally
     * a lot of things have been tested there and here we focus
     * purely on the bounderies
     */

    describe('allows strings with a lower or equal length than the upper bound', () => {
        testValidatorValues(maxSixChars, undefined, ['a', '123456'])
    })

    describe('rejects strings a length above the upper bound', () => {
        testValidatorValues(maxSixChars, errorMessage, [
            '1234567',
            'some even longer text here....',
        ])
    })
})
