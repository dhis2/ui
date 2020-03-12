import { createPattern, invalidPatternMessage } from '../createPattern.js'
import { allowsEmptyValues } from './helpers/index.js'

describe('validator: createPattern', () => {
    const pattern = /^test$/
    const equalToTestPattern = createPattern(pattern)

    it('should throw an error when pattern is not a regex object', () => {
        expect(() => {
            createPattern(undefined)
        }).toThrowError(invalidPatternMessage)
        expect(() => {
            createPattern('test')
        }).toThrowError(invalidPatternMessage)
    })

    it('should create a function', () => {
        expect(typeof equalToTestPattern).toEqual('function')
    })

    allowsEmptyValues(equalToTestPattern)

    it('should return undefined when the input matches the pattern', () => {
        expect(equalToTestPattern('test')).toEqual(undefined)
    })

    it('should return an error string when input does not match the pattern', () => {
        const escapedRegexString = '&#x2F;^test$&#x2F;'
        const invalidMsg = `Please make sure the value of this input matches the pattern ${escapedRegexString}.`

        expect(equalToTestPattern('bad input')).toEqual(invalidMsg)
    })

    it('should return an custon error string when one was provided and input does not match the pattern', () => {
        const invalidMsg = 'You should not have done this'
        const withCustomMessage = createPattern(pattern, invalidMsg)

        expect(withCustomMessage('bad input')).toEqual(invalidMsg)
    })
})
