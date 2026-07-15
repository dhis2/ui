import { resolvePositionalIndex } from '../../transfer/resolve-positional-index.js'

describe('Transfer - resolvePositionalIndex', () => {
    const selected = ['a', 'b', 'c']

    it('should return null when dropping at the end', () => {
        expect(resolvePositionalIndex({ pos: 'end' }, selected)).toBeNull()
    })

    it('should return the value index when dropping before', () => {
        expect(
            resolvePositionalIndex({ pos: 'before', value: 'b' }, selected)
        ).toBe(1)
    })

    it('should return the value index + 1 when dropping after', () => {
        expect(
            resolvePositionalIndex({ pos: 'after', value: 'b' }, selected)
        ).toBe(2)
    })

    it('should return 0 when dropping before the first value', () => {
        expect(
            resolvePositionalIndex({ pos: 'before', value: 'a' }, selected)
        ).toBe(0)
    })

    it('should return null when the value is not in selected', () => {
        expect(
            resolvePositionalIndex({ pos: 'after', value: 'ghost' }, selected)
        ).toBeNull()
    })
})
