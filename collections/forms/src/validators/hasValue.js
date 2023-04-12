import i18n from '../locales/index.js'
import { isEmpty } from './helpers/index.js'

const hasValueMessage = 'Please provide a value'

const hasValue = (value) => {
    return isEmpty(value) ? i18n.t('Please provide a value') : undefined
}
export { hasValue, hasValueMessage }
