import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const ALPHA_NUMERIC_PATTERN = /^[a-z0-9 ]*$/i

const alphaNumeric = (value) => {
    const invalidAlphaNumericMessage = i18n.t(
        'Please provide an alpha-numeric value'
    )

    return isEmpty(value) ||
        (isString(value) && ALPHA_NUMERIC_PATTERN.test(value))
        ? undefined
        : invalidAlphaNumericMessage
}

export { alphaNumeric }
