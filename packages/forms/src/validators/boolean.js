import i18n from '@dhis2/d2-i18n'
import { isEmpty } from './helpers/index.js'

const invalidBooleanMessage = i18n.t('Please provide a boolean value')

const boolean = value =>
    isEmpty(value) || typeof value === 'boolean'
        ? undefined
        : invalidBooleanMessage

export { boolean, invalidBooleanMessage }
