import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const USERNAME_PATTERN =
    /^(?=.{4,255}$)(?![_\-.@])(?!.*[_\-.@]{2})[a-zA-Z0-9._\-@]+(?<![_\-.@])$/

const dhis2Username = (value) => {
    const invalidUsernameMessage = i18n.t(
        'Please provide a username between 4 and 255 characters long and possibly separated by . _ - or @',
        { contextSeparator: '<|>' }
    )
    return isEmpty(value) || (isString(value) && USERNAME_PATTERN.test(value))
        ? undefined
        : invalidUsernameMessage
}

export { dhis2Username }
