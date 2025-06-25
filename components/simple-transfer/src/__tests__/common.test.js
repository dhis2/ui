import { findOptionIndex, isOption } from '../common/index.js'

describe('SimpleTransfer - isOption', () => {
    it('should return true when the options are the same', () => {
        const option1 = { label: 'foo', value: 'bar' }
        const option2 = { label: 'foo', value: 'bar' }
        const actual = isOption(option1, option2)
        const expected = true

        expect(actual).toBe(expected)
    })

    it('should return false when the labels do not match', () => {
        const option1 = { label: 'foo', value: 'bar' }
        const option2 = { label: 'baz', value: 'bar' }
        const actual = isOption(option1, option2)
        const expected = false

        expect(actual).toBe(expected)
    })

    it('should return false when the values do not match', () => {
        const option1 = { label: 'foo', value: 'bar' }
        const option2 = { label: 'foo', value: 'baz' }
        const actual = isOption(option1, option2)
        const expected = false

        expect(actual).toBe(expected)
    })
})

describe('SimpleTransfer - findOptionIndex', () => {
    it('should return index 1', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'foo', value: 'baz' }
        const actual = findOptionIndex(options, option)
        const expected = 1

        expect(actual).toBe(expected)
    })

    it('should return -1 when the option is not included', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = findOptionIndex(options, option)
        const expected = -1

        expect(actual).toBe(expected)
    })
})
