import { createMaxNumber } from '../createMaxNumber.js'
import { testValidatorValues } from './helpers/index.js'

describe('validator: createMaxNumber', () => {
    const maxSix = createMaxNumber(6)
    const errorMessage = 'Please enter a number with a maximum of 6'

    /*
     * Since createMaxNumber calls createNumberRange internally
     * a lot of things have been tested there and here we focus
     * purely on the bounderies
     */

    describe('allows numbers up to and including the upper bound', () => {
        testValidatorValues(maxSix, undefined, [-1000, 0, 1, 6])
    })

    describe('rejects numbers above the upper bound', () => {
        testValidatorValues(maxSix, errorMessage, [6.000001, 7, 100000])
    })
})
