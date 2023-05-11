import i18n from '../locales/index.js'
import { isEmpty, isNumeric } from './helpers/index.js'

const number = (value) => {
    if (isEmpty(value) || isNumeric(value)) {
        return undefined
    }
    return i18n.t('Please provide a number')
}

export { number }
