import { patchMissingDisplayName } from './patch-missing-display-name.js'

describe('patchMissingDisplayName', () => {
    it('should add an empty string as displayName if the prop is falsy', () => {
        const nodes = {
            id1: { noDisplayName: 'foo' },
            id2: { displayName: null },
            id3: { displayName: false },
            id4: { displayName: undefined },
            id5: { displayName: 'Should stay the same' },
        }

        const actual = patchMissingDisplayName(nodes)
        const expected = {
            id1: { noDisplayName: 'foo', displayName: '' },
            id2: { displayName: '' },
            id3: { displayName: '' },
            id4: { displayName: '' },
            id5: { displayName: 'Should stay the same' },
        }

        expect(actual).toEqual(expected)
    })
})
