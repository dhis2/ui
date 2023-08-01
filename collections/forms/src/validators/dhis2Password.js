import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const LOWER_CASE_PATTERN = /^(?=.*[a-z]).+$/
const UPPER_CASE_PATTERN = /^(?=.*[A-Z]).+$/
const DIGIT_PATTERN = /^(?=.*[0-9]).+$/
// Using this regex to match all non-alphanumeric characters to match server-side implementation
// https://github.com/dhis2/dhis2-core/blob/master/dhis-2/dhis-services/dhis-service-core/src/main/java/org/hisp/dhis/user/SpecialCharacterValidationRule.java#L39
const SPECIAL_CHARACTER_PATTERN = /[^a-zA-Z0-9]/

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
const dhis2Password = (value) => {
    if (isEmpty(value)) {
        return undefined
    }

    if (!isString(value)) {
        return i18n.t('Password should be a string')
    }

    if (value.length < 8) {
        return i18n.t('Password should be at least 8 characters long')
    }

    if (value.length > 35) {
        return i18n.t('Password should be no longer than 34 characters')
    }

    if (!LOWER_CASE_PATTERN.test(value)) {
        return i18n.t('Password should contain at least one lowercase letter')
    }

    if (!UPPER_CASE_PATTERN.test(value)) {
        return i18n.t('Password should contain at least one UPPERCASE letter')
    }

    if (!DIGIT_PATTERN.test(value)) {
        return i18n.t('Password should contain at least one number')
    }

    if (!SPECIAL_CHARACTER_PATTERN.test(value)) {
        return i18n.t('Password should have at least one special character')
    }

    return undefined
}

export { dhis2Password }
