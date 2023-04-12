import i18n from '../locales/index.js'
import { isEmpty } from './helpers/index.js'

const boolean = (value) => {
    const invalidBooleanMessage = i18n.t('Please provide a boolean value')

    return isEmpty(value) || typeof value === 'boolean'
        ? undefined
        : invalidBooleanMessage
}

export { boolean }
