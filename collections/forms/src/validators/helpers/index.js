export const isEmpty = value =>
    typeof value === 'undefined' || value === null || value === ''

export const isString = value => typeof value === 'string'

export const isInteger = value => Number.isSafeInteger(value)

export const isNumber = value => typeof value === 'number'

export const isNumeric = value =>
    (isString(value) || isNumber(value)) && !isNaN(value)

export const isInRange = (lowerBound, upperBound, value) =>
    value >= lowerBound && value <= upperBound

export const toNumber = value => Number(value)

export const requiredArgumentErrorMessage =
    'Incorrect arguments provided when creating validator'

export const requireArgument = (value, type) => {
    if (isEmpty(value) || typeof value !== type) {
        throw new Error(requiredArgumentErrorMessage)
    }
}
