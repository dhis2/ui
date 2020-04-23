import { dhis2Password, errorMessages } from '../dhis2Password.js'
import { testValidatorValues, allowsEmptyValues } from './helpers/index.js'

describe('validator: dhis2Password', () => {
    allowsEmptyValues(dhis2Password)

    it('should return undefined for a valid password', () => {
        expect(dhis2Password('Testing123!')).toEqual(undefined)
    })

    describe('rejects value types other than string', () => {
        testValidatorValues(dhis2Password, errorMessages.notString, [
            true,
            3,
            {},
            [],
            () => {},
        ])
    })

    it('should return the "password too short" message if password is less than 8 characters', () => {
        expect(dhis2Password('123')).toEqual(errorMessages.tooShort)
    })

    it('should return the "password too long" message if password is more than 34 characters', () => {
        expect(
            dhis2Password('abcdefghijklmnopqrstuvwxyz12345678910111213')
        ).toEqual(errorMessages.tooLong)
    })

    it('should return the "no lowercase" message if password does not contain lower case characters', () => {
        expect(dhis2Password('TESTING123!')).toEqual(errorMessages.noLowerCase)
    })

    it('should return the "no uppercase" message if password has no uppercase characters', () => {
        expect(dhis2Password('testing123!')).toEqual(errorMessages.noUpperCase)
    })

    it('should return the "no number" message if password has no digits', () => {
        expect(dhis2Password('Testing!')).toEqual(errorMessages.noNumber)
    })

    it('should return the "no special character" message if password has no special characters', () => {
        expect(dhis2Password('Testing123')).toEqual(
            errorMessages.noSpecialCharacter
        )
    })
})
