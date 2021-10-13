import i18n from '../locales/index.js'
import { isEmpty, isInteger, isNumeric, toNumber } from './helpers/index.js'

const invalidIntegerMessage = i18n.t(
    'Please provide a round number without decimals'
)

const integer = (value) =>
    isEmpty(value) || (isNumeric(value) && isInteger(toNumber(value)))
        ? undefined
        : invalidIntegerMessage

export { integer, invalidIntegerMessage }
