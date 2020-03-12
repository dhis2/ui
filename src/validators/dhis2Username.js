import i18n from '@dhis2/d2-i18n'
import { isEmpty, isString } from './helpers/index.js'

const invalidUsernameMessage = i18n.t(
    'Please provide a username between 1 and 255 characters'
)

const dhis2Username = value =>
    isEmpty(value) ||
    (isString(value) && value.length >= 1 && value.length <= 255)
        ? undefined
        : invalidUsernameMessage

export { dhis2Username, invalidUsernameMessage }
