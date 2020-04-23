import { createMinCharacterLength } from '../createMinCharacterLength.js'
import { testValidatorValues } from './helpers/index.js'

describe('validator: createMinCharacterLength', () => {
    const atLeastSixChars = createMinCharacterLength(6)
    const errorMessage = 'Please enter at least 6 characters'

    /*
     * Since createMinCharacterLength calls createCharacterLengthRange internally
     * a lot of things have been tested there and here we focus
     * purely on the bounderies
     */

    describe('allows strings with an equal or greater length than the lower bound', () => {
        testValidatorValues(atLeastSixChars, undefined, [
            '123456',
            'an even longer string',
        ])
    })

    describe('rejects strings a length below the lower bound', () => {
        testValidatorValues(atLeastSixChars, errorMessage, ['a', '12345'])
    })
})
