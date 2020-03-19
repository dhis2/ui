import i18n from '@dhis2/d2-i18n'
import { isEmpty, isNumeric } from './helpers/index.js'

const invalidNumberMessage = i18n.t('Please provide a number')

const number = value =>
    isEmpty(value) || isNumeric(value) ? undefined : invalidNumberMessage

export { number, invalidNumberMessage }
