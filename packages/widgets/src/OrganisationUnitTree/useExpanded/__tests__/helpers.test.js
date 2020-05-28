import { createExpandHandlers, getInitiallyExpandedPaths } from '../helpers'

describe('OrganisationUnitTree - useExpanded - getInitiallyExpandedPaths', () => {
    const initiallyExpanded = ['/foo/bar/baz', '/foobar/barbaz/bazfoo']

    it('should include all initiallyExpanded paths in the returned expanded array', () => {
        const actual = getInitiallyExpandedPaths(initiallyExpanded)
        const expected = expect.arrayContaining(initiallyExpanded)
        expect(actual).toEqual(expected)
    })

    it('should include all sub paths of the paths in initiallyExpanded in the returned exanded array', () => {
        const actual = getInitiallyExpandedPaths(initiallyExpanded)
        const expected = expect.arrayContaining([
            '/foo',
            '/foo/bar',
            '/foobar',
            '/foobar/barbaz',
        ])
        expect(actual).toEqual(expected)
    })
})

describe('OrganisationUnitTree - useExpanded - createExpandHandlers', () => {
    const initiallyExpanded = ['/foo/bar/baz', '/foobar/barbaz/bazfoo']
    const onExpand = jest.fn()
    const onCollapse = jest.fn()

    afterEach(() => {
        onExpand.mockClear()
        onCollapse.mockClear()
    })

    it('should add a path to the expanded paths when calling handleExpand when not present yet', () => {
        const setExpanded = jest.fn()
        const expanded = initiallyExpanded
        const { handleExpand } = createExpandHandlers({ expanded, setExpanded })
        handleExpand({ path: '/a/new/path' })

        expect(setExpanded).toHaveBeenCalledWith([...expanded, '/a/new/path'])
    })

    it('should not add a path to the expanded paths when calling handleExpand when already present', () => {
        const setExpanded = jest.fn()
        const expanded = [...initiallyExpanded, '/a/new/path']
        const { handleExpand } = createExpandHandlers({ expanded, setExpanded })
        handleExpand({ path: '/a/new/path' })

        expect(setExpanded).toHaveBeenCalledTimes(0)
    })

    it('should remove a path to the expanded paths when calling handleExpand when path is expanded', () => {
        const setExpanded = jest.fn()
        const expanded = [...initiallyExpanded, '/a/new/path']
        const { handleCollapse } = createExpandHandlers({
            expanded,
            setExpanded,
        })
        handleCollapse({ path: '/a/new/path' })

        expect(setExpanded).toHaveBeenCalledWith(initiallyExpanded)
    })

    it('should not remove a path to the expanded paths when calling handleExpand when path is not expanded', () => {
        const setExpanded = jest.fn()
        const expanded = initiallyExpanded
        const { handleCollapse } = createExpandHandlers({
            expanded,
            setExpanded,
        })
        handleCollapse({ path: '/a/new/path' })

        expect(setExpanded).toHaveBeenCalledTimes(0)
    })
})
