import { hasDescendantSelectedPaths } from '../hasDescendantSelectedPaths'

describe('hasDescendantSelectedPaths', () => {
    it('should return true when the path is a parent path of one of the selected paths', () => {
        const path = '/foo/bar'
        const selected = ['/foo/bar/baz', '/foobar/barbaz/']
        const expected = true
        const actual = hasDescendantSelectedPaths(path, selected)

        expect(actual).toBe(expected)
    })

    it('should return false when the paths is not a parent path but an exact match with one of the selected paths', () => {
        const path = '/foo/bar/baz'
        const selected = ['/foo/bar/baz', '/foobar/barbaz/']
        const expected = false
        const actual = hasDescendantSelectedPaths(path, selected)

        expect(actual).toBe(expected)
    })

    it('should return false when the paths is neither a parent path nor an exact match with one of the selected paths', () => {
        const path = '/foobarbaz/boofarzab'
        const selected = ['/foo/bar/baz', '/foobar/barbaz/']
        const expected = false
        const actual = hasDescendantSelectedPaths(path, selected)

        expect(actual).toBe(expected)
    })
})
