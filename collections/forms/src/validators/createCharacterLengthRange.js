import i18n from '../locales/index.js'
import {
    isEmpty,
    isString,
    isInRange,
    requireArgument,
} from './helpers/index.js'

const createCharacterLengthRange = (lowerBound, upperBound, customMessage) => {
    requireArgument(lowerBound, 'number')
    requireArgument(upperBound, 'number')

    const errorMessage =
        customMessage ||
        i18n.t(
            'Please enter between {{lowerBound}} and {{upperBound}} characters',
            { lowerBound, upperBound }
        )

    return value =>
        isEmpty(value) ||
        (isString(value) && isInRange(lowerBound, upperBound, value.length))
            ? undefined
            : errorMessage
}

export { createCharacterLengthRange }
