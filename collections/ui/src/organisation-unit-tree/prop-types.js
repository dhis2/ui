/* eslint-disable max-params */

const UNIT_ID_PATTERN = '[a-zA-Z][a-zA-Z0-9]{10}'
const orgUnitIdRegExp = new RegExp(`^${UNIT_ID_PATTERN}$`)
const orgUnitPathRegExp = new RegExp(`(/${UNIT_ID_PATTERN})+`)

export const orgUnitPathPropType = (
    propValue,
    key,
    compName,
    location,
    propFullName
) => {
    if (!orgUnitPathRegExp.test(propValue[key])) {
        return new Error(
            `Invalid org unit path \`${propValue[key]}\` supplied to \`${compName}.${propFullName}\``
        )
    }
}

export const orgUnitIdPropType = (
    propValue,
    key,
    compName,
    location,
    propFullName
) => {
    if (!orgUnitIdRegExp.test(propValue[key])) {
        return new Error(
            `Invalid org unit id \`${propValue[key]}\` supplied to \`${compName}.${propFullName}\``
        )
    }
}
