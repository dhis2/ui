import {
    ADD_MODE,
    RANGE_MODE,
    REPLACE_MODE,
    findOptionIndex,
    getModeByModifierKey,
    isOption,
    toggleValue,
} from '../common/index'

describe('Transfer - isOption', () => {
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

describe('Transfer - findOptionIndex', () => {
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

describe('Transfer - toggleValue', () => {
    it('should remove the last value from the array when value inside array', () => {
        const values = ['foo', 'bar', 'baz']
        const value = 'baz'
        const expected = ['foo', 'bar']
        const actual = toggleValue(values, value)

        expect(actual).toEqual(expected)
    })

    it('should remove the first value from the array when value inside array', () => {
        const values = ['foo', 'bar', 'baz']
        const value = 'foo'
        const expected = ['bar', 'baz']
        const actual = toggleValue(values, value)

        expect(actual).toEqual(expected)
    })

    it('should add the value if not inside the array', () => {
        const values = ['foo', 'bar']
        const value = 'baz'
        const expected = ['foo', 'bar', 'baz']
        const actual = toggleValue(values, value)

        expect(actual).toEqual(expected)
    })
})

describe('Transfer - getModeByModifierKey', () => {
    it('should return REPLACE_MODE when more than one key is pressed', () => {
        const expected = REPLACE_MODE
        const actual = getModeByModifierKey({ altKey: true, ctrlKey: true })
        expect(actual).toBe(expected)
    })

    it('should return ADD_MODE if alt key is pressed', () => {
        const expected = ADD_MODE
        const actual = getModeByModifierKey({ altKey: true })
        expect(actual).toBe(expected)
    })

    it('should return ADD_MODE if ctrl key is pressed', () => {
        const expected = ADD_MODE
        const actual = getModeByModifierKey({ ctrlKey: true })
        expect(actual).toBe(expected)
    })

    it('should return ADD_MODE if meta key is pressed', () => {
        const expected = ADD_MODE
        const actual = getModeByModifierKey({ metaKey: true })
        expect(actual).toBe(expected)
    })

    it('should return RANGE_MODE if shift key is pressed', () => {
        const expected = RANGE_MODE
        const actual = getModeByModifierKey({ shiftKey: true })
        expect(actual).toBe(expected)
    })

    it('should return REPLACE_MODE if no key is pressed', () => {
        const expected = REPLACE_MODE
        const actual = getModeByModifierKey({})
        expect(actual).toBe(expected)
    })
})
