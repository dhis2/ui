import i18n from '@dhis2/d2-i18n'

export const getIsRequired = (uiLocale) => (val) =>
    val ? undefined : i18n.t('This field is required', { lng: uiLocale })

export const checkIsFormValid = (validatorsByField) => {
    for (const key of Object.keys(validatorsByField)) {
        if (validatorsByField[key].validator(validatorsByField[key].value)) {
            return false
        }
    }
    return true
}
