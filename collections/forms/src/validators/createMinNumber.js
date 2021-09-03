import i18n from '../locales/index.js'
import { createNumberRange } from './createNumberRange.js'

const createMinNumber = lowerBound =>
    createNumberRange(
        lowerBound,
        Infinity,
        i18n.t('Please enter a number of at least {{lowerBound}}', {
            lowerBound,
        })
    )

export { createMinNumber }
