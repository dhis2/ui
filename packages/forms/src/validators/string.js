import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

const invalidStringMessage = i18n.t('Please provide a string')

const string = value =>
    isEmpty(value) || isString(value) ? undefined : invalidStringMessage

export { string, invalidStringMessage }
