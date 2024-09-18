import { getAllExpandedPaths } from './get-all-expanded-paths.js'

describe('OrganisationUnitTree - getAllExpandedPaths', () => {
    const initiallyExpanded = ['/foo/bar/baz', '/foobar/barbaz/bazfoo']

    it('should include all initiallyExpanded paths in the returned expanded array', () => {
        const actual = getAllExpandedPaths(initiallyExpanded)
        const expected = expect.arrayContaining(initiallyExpanded)
        expect(actual).toEqual(expected)
    })

    it('should include all sub paths of the paths in initiallyExpanded in the returned exanded array', () => {
        const actual = getAllExpandedPaths(initiallyExpanded)
        const expected = expect.arrayContaining([
            '/foo',
            '/foo/bar',
            '/foobar',
            '/foobar/barbaz',
        ])
        expect(actual).toEqual(expected)
    })
})
