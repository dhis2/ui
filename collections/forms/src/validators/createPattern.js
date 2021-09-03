import i18n from '../locales/index.js'
import { isEmpty, isString } from './helpers/index.js'

const invalidPatternMessage =
    'The first argument passed to createPattern was not a valid regex'

const createPattern = (pattern, message) => {
    if (!(pattern instanceof RegExp)) {
        throw new Error(invalidPatternMessage)
    }

    return value =>
        isEmpty(value) || (isString(value) && pattern.test(value))
            ? undefined
            : message ||
              i18n.t(
                  'Please make sure the value of this input matches the pattern {{patternString}}.',
                  { patternString: pattern.toString() }
              )
}

export { createPattern, invalidPatternMessage }
