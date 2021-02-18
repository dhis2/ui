import i18n from '../locales/index.js'
import { createCharacterLengthRange } from './createCharacterLengthRange.js'

const createMinCharacterLength = lowerBound =>
    createCharacterLengthRange(
        lowerBound,
        Infinity,
        i18n.t('Please enter at least {{lowerBound}} characters', {
            lowerBound,
        })
    )

export { createMinCharacterLength }
