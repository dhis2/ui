import i18n from '../locales/index.js'
import { isEmpty, isNumeric, toNumber } from './helpers/index.js'

const invalidIntegerMessage = i18n.t(
    'Please provide a round number without decimals'
)

// Regex accepts only digits (no decimals even if it is trailing like 4.0)
// it also rejects a leading 0 (i.e 04) as this is rejected by backend
const INTEGER_PATTERN = /^(-?[1-9]\d*|0)$/

const integer = (value) =>
    isEmpty(value) ||
    (INTEGER_PATTERN.test(value) &&
        isNumeric(value) &&
        Number.isSafeInteger(toNumber(value)))
        ? undefined
        : invalidIntegerMessage

export { integer, invalidIntegerMessage }
