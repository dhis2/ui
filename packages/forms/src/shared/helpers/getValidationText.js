import { hasError } from './hasError.js'

const getValidationText = (meta, validationText, error) =>
    validationText || (hasError(meta, error) && meta.error) || ''

export { getValidationText }
