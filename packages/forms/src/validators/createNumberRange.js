import i18n from '../locales/index.js'
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
            'Number cannot be less than {{lowerBound}} or more than {{upperBound}}',
            { lowerBound, upperBound }
        )

    return value =>
        isEmpty(value) ||
        (isNumeric(value) && isInRange(lowerBound, upperBound, toNumber(value)))
            ? undefined
            : errorMessage
}

export { createNumberRange }
