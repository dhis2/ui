import { hasValue, hasValueMessage } from '../hasValue.js'
import { testValidatorValues } from './helpers/index.js'

describe('validator: hasValue', () => {
    describe('should return undefined for allowed values', () => {
        testValidatorValues(hasValue, undefined, [
            'test',
            false,
            true,
            0,
            1,
            {},
            [],
            new Date(),
        ])
    })

    describe('should return the error message for disallowed values', () => {
        testValidatorValues(hasValue, hasValueMessage, ['', undefined, null])
    })
})
