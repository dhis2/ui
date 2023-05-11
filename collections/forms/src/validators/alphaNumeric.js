import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const ALPHA_NUMERIC_PATTERN = /^[a-z0-9 ]*$/i

const alphaNumeric = (value) => {
    if (
        isEmpty(value) ||
        (isString(value) && ALPHA_NUMERIC_PATTERN.test(value))
    ) {
        return undefined
    }

    return i18n.t('Please provide an alpha-numeric value')
}

export { alphaNumeric }
