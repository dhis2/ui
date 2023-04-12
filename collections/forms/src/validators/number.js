import i18n from '../locales/index.js'
import { isEmpty, isNumeric } from './helpers/index.js'

const number = (value) => {
    const invalidNumberMessage = i18n.t('Please provide a number')
    return isEmpty(value) || isNumeric(value) ? undefined : invalidNumberMessage
}

export { number }
