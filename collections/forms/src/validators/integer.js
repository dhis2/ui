import i18n from '../locales/index.js'
import { isEmpty, isNumeric, toNumber } from './helpers/index.js'

// Regex accepts only digits (no decimals even if it is trailing like 4.0)
// it also rejects a leading 0 (i.e 04) as this is rejected by backend
const INTEGER_PATTERN = /^(-?[1-9]\d*|0)$/

const integer = (value) => {
    if (
        isEmpty(value) ||
        (INTEGER_PATTERN.test(value) &&
            isNumeric(value) &&
            Number.isSafeInteger(toNumber(value)))
    ) {
        return undefined
    }
    return i18n.t('Please provide a round number without decimals')
}
export { integer }
