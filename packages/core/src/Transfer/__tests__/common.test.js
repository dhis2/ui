import {
    addOption,
    isOption,
    findOption,
    findOptionIndex,
    removeOption,
    toggleOption,
    toggleOptions,
} from '../../Transfer/common.js'

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

describe('Transfer - findOption', () => {
    it('should return the option', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'foo', value: 'baz' }
        const actual = findOption(options, option)
        const expected = { label: 'foo', value: 'baz' }

        expect(actual).toEqual(expected)
    })

    it('should return undefined when the option is not included', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = findOption(options, option)
        const expected = undefined

        expect(actual).toEqual(expected)
    })
})

describe('Transfer - toggleOption', () => {
    it('should add the option to the collection', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = toggleOption(options, option)
        const expected = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
            { label: 'baz', value: 'baz' },
        ]

        expect(actual).toEqual(expected)
    })

    it('should remove the option from the collection', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
            { label: 'baz', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = toggleOption(options, option)
        const expected = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]

        expect(actual).toEqual(expected)
    })
})

describe('Transfer - addOption', () => {
    it('should add the option to the collection', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = addOption(options, option)
        const expected = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
            { label: 'baz', value: 'baz' },
        ]

        expect(actual).toEqual(expected)
    })

    it('should not add the option to the collection when already included', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
            { label: 'baz', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = addOption(options, option)
        const expected = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
            { label: 'baz', value: 'baz' },
        ]

        expect(actual).toEqual(expected)
    })
})

describe('Transfer - removeOption', () => {
    it('should remove the option to the collection', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
            { label: 'baz', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = removeOption(options, option)
        const expected = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]

        expect(actual).toEqual(expected)
    })

    it('should not remove the option to the collection when already included', () => {
        const options = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]
        const option = { label: 'baz', value: 'baz' }
        const actual = removeOption(options, option)
        const expected = [
            { label: 'foo', value: 'bar' },
            { label: 'foo', value: 'baz' },
        ]

        expect(actual).toEqual(expected)
    })
})

describe('Transfer - toggleOptions', () => {
    it('should add all options when none are inside the colleciton yet', () => {
        const collection = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
        ]
        const optionsToToggle = [
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]
        const actual = toggleOptions(collection, optionsToToggle)
        const expected = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]

        expect(actual).toEqual(expected)
    })

    it('should remove all options when all are included', () => {
        const collection = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]
        const optionsToToggle = [
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]
        const actual = toggleOptions(collection, optionsToToggle)
        const expected = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
        ]

        expect(actual).toEqual(expected)
    })

    it('should add some and remove some when only some are given', () => {
        const collection = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
            { label: 'baz', value: 'baz' },
        ]
        const optionsToToggle = [
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]
        const actual = toggleOptions(collection, optionsToToggle)
        const expected = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
            { label: 'foobar', value: 'foobar' },
        ]

        expect(actual).toEqual(expected)
    })

    it('should only add the missing one and not remove any when using a custom modifier', () => {
        const collection = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
            { label: 'baz', value: 'baz' },
        ]
        const optionsToToggle = [
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]
        const actual = toggleOptions(collection, optionsToToggle, addOption)
        const expected = [
            { label: 'foo', value: 'foo' },
            { label: 'bar', value: 'bar' },
            { label: 'baz', value: 'baz' },
            { label: 'foobar', value: 'foobar' },
        ]

        expect(actual).toEqual(expected)
    })
})
