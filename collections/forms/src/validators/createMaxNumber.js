import i18n from '../locales/index.js'
import { createNumberRange } from './createNumberRange.js'

const createMaxNumber = (upperBound) =>
    createNumberRange(
        -Infinity,
        upperBound,
        i18n.t('Please enter a number with a maximum of {{upperBound}}', {
            upperBound,
        })
    )

export { createMaxNumber }
