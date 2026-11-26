import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const USERNAME_PATTERN =
    /^(?=.{4,255}$)(?![_\-.@])(?!.*[_\-.@]{2})[a-zA-Z0-9._\-@]+(?<![_\-.@])$/

const invalidUsernameMessage = i18n.t(
    'Please provide a username between 4 and 255 characters long, using only letters a-z or A-Z without accents, digits 0-9 and the separators {{separators}}. A username cannot start or end with a separator or have two separators in a row',
    // passed as a value so the i18n extractor doesn't read `_` as a context separator
    { separators: '. _ - @' }
)

const dhis2Username = (value) =>
    isEmpty(value) || (isString(value) && USERNAME_PATTERN.test(value))
        ? undefined
        : invalidUsernameMessage

export { dhis2Username, invalidUsernameMessage }
