import i18n from '@dhis2/d2-i18n'
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
