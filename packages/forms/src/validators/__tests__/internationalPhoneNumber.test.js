import {
    internationalPhoneNumber,
    invalidInternationalPhoneNumberMessage,
} from '../internationalPhoneNumber.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: internationalPhoneNumber', () => {
    allowsEmptyValues(internationalPhoneNumber)

    describe('allows valid phone numbers', () => {
        testValidatorValues(internationalPhoneNumber, undefined, [
            '+31(0)725111889',
            '068.468.0076',
            '1-724-187-8238',
            '(967) 211-7114',
            '(978) 242-4017',
            '105-535-1160',
            '147-357-7565',
            '(974) 309-3992',
            '+1-228-630-0639',
            '917.258.5059',
            '888-814-8989',
        ])
    })

    describe('rejects non-string values', () => {
        testValidatorValues(
            internationalPhoneNumber,
            invalidInternationalPhoneNumberMessage,
            [true, 3, {}, [], () => {}]
        )
    })

    describe('rejects invalid phone numbers', () => {
        testValidatorValues(
            internationalPhoneNumber,
            invalidInternationalPhoneNumberMessage,
            [
                'sometext123', // text
                '+3172%^$#%*182838485868', // special characters
                '+31725111889101112131415', // too long
                '0031_72_5111889', // bad separators
            ]
        )
    })
})
