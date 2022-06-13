import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const USERNAME_PATTERN =
    /^(?=.{4,255}$)(?![_.@])(?!.*[_.@]{2})[a-z0-9._@]+(?<![_.@])$/

const invalidUsernameMessage = i18n.t(
    'Please provide a lowercase username between 4 and 255 characters long and possibly separated by . _ @ or #'
)

const dhis2Username = (value) =>
    isEmpty(value) || (isString(value) && USERNAME_PATTERN.test(value))
        ? undefined
        : invalidUsernameMessage

export { dhis2Username, invalidUsernameMessage }
