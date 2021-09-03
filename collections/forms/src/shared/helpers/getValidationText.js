import { hasError } from './hasError.js'

const getValidationText = (meta, validationText, error) => {
    if (validationText) {
        return validationText
    }

    if (hasError(meta, error)) {
        if (meta.error) {
            return meta.error
        }

        if (meta.submitError) {
            return meta.submitError
        }
    }

    return ''
}

export { getValidationText }
