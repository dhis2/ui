import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const string = (value) => {
    if (isEmpty(value) || isString(value)) {
        return undefined
    }
    return i18n.t('Please provide a string')
}

export { string }
