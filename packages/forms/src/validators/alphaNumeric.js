import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

const ALPHA_NUMERIC_PATTERN = /^[a-z0-9 ]*$/i

const invalidAlphaNumericMessage = i18n.t(
    'Please provide an alpha-numeric value'
)

const alphaNumeric = value =>
    isEmpty(value) || (isString(value) && ALPHA_NUMERIC_PATTERN.test(value))
        ? undefined
        : invalidAlphaNumericMessage

export { alphaNumeric, invalidAlphaNumericMessage }
