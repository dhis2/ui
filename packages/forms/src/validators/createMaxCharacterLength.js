import i18n from '@dhis2/d2-i18n'
import { createCharacterLengthRange } from './createCharacterLengthRange.js'

const createMaxCharacterLength = upperBound =>
    createCharacterLengthRange(
        0,
        upperBound,
        i18n.t('Please enter a maximum of {{upperBound}} characters', {
            upperBound,
        })
    )

export { createMaxCharacterLength }
