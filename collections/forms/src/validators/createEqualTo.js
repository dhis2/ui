import i18n from '../locales/index.js'
import { isEmpty, requireArgument } from './helpers/index.js'

const createEqualTo = (key, description) => {
    requireArgument(key, 'string')

    const errorMessage = i18n.t(
        'Please make sure the value of this input matches the value in "{{otherField}}".',
        { otherField: description || key }
    )

    return (value, allValues) =>
        isEmpty(value) || value === allValues[key] ? undefined : errorMessage
}

export { createEqualTo }
