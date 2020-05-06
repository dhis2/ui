import { defaultFilterCallback } from '../../../Transfer/helper/defaultFilterCallback.js'

describe('Transfer - defaultFilterCallback', () => {
    const options = [
        { label: 'Foo', value: 'foo' },
        { label: 'FOO', value: 'fOO' },
        { label: 'Bar', value: 'bar' },
        { label: 'BAR', value: 'bAR' },
    ]

    it('should returl all options when the filter is empty', () => {
        const filter = ''
        const expected = options
        const actual = defaultFilterCallback(options, filter)

        expect(actual).toEqual(expected)
    })

    it('should return options matching the filter, regardless of case-sensitvity', () => {
        const filter = 'Fo'
        const expected = [
            { label: 'Foo', value: 'foo' },
            { label: 'FOO', value: 'fOO' },
        ]
        const actual = defaultFilterCallback(options, filter)

        expect(actual).toEqual(expected)
    })

    it('should return an empty array when there are no matches', () => {
        const filter = 'Baz'
        const expected = []
        const actual = defaultFilterCallback(options, filter)

        expect(actual).toEqual(expected)
    })
})
