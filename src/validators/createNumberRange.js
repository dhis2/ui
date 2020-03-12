import i18n from '@dhis2/d2-i18n'
import {
    isEmpty,
    isNumeric,
    toNumber,
    isInRange,
    requireArgument,
} from './helpers/index.js'

const createNumberRange = (lowerBound, upperBound, customMessage) => {
    requireArgument(lowerBound, 'number')
    requireArgument(upperBound, 'number')

    const errorMessage =
        customMessage ||
        i18n.t(
            'Please enter a number between {{lowerBound}} and {{upperBound}}',
            { lowerBound, upperBound }
        )

    return value =>
        isEmpty(value) ||
        (isNumeric(value) && isInRange(lowerBound, upperBound, toNumber(value)))
            ? undefined
            : errorMessage
}

export { createNumberRange }
