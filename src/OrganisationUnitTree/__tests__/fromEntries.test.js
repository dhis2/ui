import { fromEntries } from '../fromEntries'

describe('fromEntries', () => {
    it('should transform an array of entries to an object', () => {
        const expected = { key1: 'value1', key2: 'value2', key3: 'value3' }
        const actual = fromEntries([
            ['key1', 'value1'],
            ['key2', 'value2'],
            ['key3', 'value3'],
        ])

        expect(actual).toEqual(expected)
    })
})
