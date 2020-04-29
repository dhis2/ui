import { defaultFilterCallback } from '../../../Transfer/helper/defaultFilterCallback'

describe('Transfer - defaultFilterCallback', () => {
    const plainOptions = [
        { label: 'Foo', value: 'foo' },
        { label: 'FOO', value: 'fOO' },
        { label: 'Bar', value: 'bar' },
        { label: 'BAR', value: 'bAR' },
    ]

    it('should returl all options when the filter is empty', () => {
        const filter = ''
        const expected = plainOptions
        const actual = defaultFilterCallback(plainOptions, filter)

        expect(actual).toEqual(expected)
    })

    it('should return options matching the filter, regardless of case-sensitvity', () => {
        const filter = 'Fo'
        const expected = [
            { label: 'Foo', value: 'foo' },
            { label: 'FOO', value: 'fOO' },
        ]
        const actual = defaultFilterCallback(plainOptions, filter)

        expect(actual).toEqual(expected)
    })

    it('should return an empty array when there are no matches', () => {
        const filter = 'Baz'
        const expected = []
        const actual = defaultFilterCallback(plainOptions, filter)

        expect(actual).toEqual(expected)
    })
})
