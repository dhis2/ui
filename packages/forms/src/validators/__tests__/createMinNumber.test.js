import { createMinNumber } from '../createMinNumber.js'
import { testValidatorValues } from './helpers/index.js'

describe('validator: createMinNumber', () => {
    const atLeastSix = createMinNumber(6)
    const errorMessage = 'Please enter a number of at least 6'

    /*
     * Since createMinNumber calls createNumberRange internally
     * a lot of things have been tested there and here we focus
     * purely on the bounderies
     */

    describe('allows numbers equal to or greater than the lower bound', () => {
        testValidatorValues(atLeastSix, undefined, [6, 6.00001, 1000000])
    })

    describe('rejects numbers below the lower bound', () => {
        testValidatorValues(atLeastSix, errorMessage, [-10000, 0, 1, 5.999999])
    })
})
