import i18n from '../locales/index.js'
import { isEmpty, isNumeric } from './helpers/index.js'

const invalidNumberMessage = i18n.t('Please provide a number')

const number = (value) =>
    isEmpty(value) || isNumeric(value) ? undefined : invalidNumberMessage

export { number, invalidNumberMessage }
