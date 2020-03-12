import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

const LOWER_CASE_PATTERN = /^(?=.*[a-z]).+$/
const UPPER_CASE_PATTERN = /^(?=.*[A-Z]).+$/
const DIGIT_PATTERN = /^(?=.*[0-9]).+$/
// Using this regex to match all non-alphanumeric characters to match server-side implementation
// https://github.com/dhis2/dhis2-core/blob/master/dhis-2/dhis-services/dhis-service-core/src/main/java/org/hisp/dhis/user/SpecialCharacterValidationRule.java#L39
const SPECIAL_CHARACTER_PATTERN = /[^a-zA-Z0-9]/

const notString = i18n.t('Password should be a string')
const tooShort = i18n.t('Password should be at least 8 characters long')
const tooLong = i18n.t('Password should be no longer than 34 characters')
const noLowerCase = i18n.t(
    'Password should contain at least one lowercase letter'
)
const noUpperCase = i18n.t(
    'Password should contain at least one UPPERCASE letter'
)
const noNumber = i18n.t('Password should contain at least one number')
const noSpecialCharacter = i18n.t(
    'Password should have at least one special character'
)

/**
 * Tests if a given password is compliant with the password restrictions.
 * This function checks all restrictions below, but returns when the first violation was found:
 * - At least 8 characters
 * - No more than 34 characters
 * - Contains at least 1 lowercase character
 * - Contains at least 1 UPPERCASE character
 * - Contains at least 1 number
 * - Contains at least 1 special character
 */
const dhis2Password = value => {
    if (isEmpty(value)) {
        return undefined
    }

    if (!isString(value)) {
        return notString
    }

    if (value.length < 8) {
        return tooShort
    }

    if (value.length > 35) {
        return tooLong
    }

    if (!LOWER_CASE_PATTERN.test(value)) {
        return noLowerCase
    }

    if (!UPPER_CASE_PATTERN.test(value)) {
        return noUpperCase
    }

    if (!DIGIT_PATTERN.test(value)) {
        return noNumber
    }

    if (!SPECIAL_CHARACTER_PATTERN.test(value)) {
        return noSpecialCharacter
    }

    return undefined
}

const errorMessages = {
    notString,
    tooShort,
    tooLong,
    noLowerCase,
    noUpperCase,
    noNumber,
    noSpecialCharacter,
}

export { dhis2Password, errorMessages }
