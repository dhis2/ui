const UNIT_ID_PATTERN = '[a-zA-Z][a-zA-Z0-9]{10}'

/* eslint-disable */
export const orgUnitPathPropType = (
    propValue,
    key,
    compName,
    location,
    propFullName
) => {
    if (!new RegExp(`(\/${UNIT_ID_PATTERN})+`).test(propValue[key])) {
        return new Error(
            `Invalid org unit path \`${propValue[key]}\` supplied to \`${compName}.${propFullName}\``
        )
    }
}
/* eslint-enable */

/* eslint-disable */
export const orgUnitIdPropType = (
    propValue,
    key,
    compName,
    location,
    propFullName
) => {
    if (!new RegExp(`^${UNIT_ID_PATTERN}$`).test(propValue[key])) {
        return new Error(
            `Invalid org unit id \`${propValue[key]}\` supplied to \`${compName}.${propFullName}\``
        )
    }
}
/* eslint-enable */
