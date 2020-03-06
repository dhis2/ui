import { computeChildNodes } from '../computeChildNodes'

describe('computeChildNodes', () => {
    let node = { path: 'foo/bar' }
    const defaultChildren = [
        { id: 'foobar' },
        { id: 'barbaz' },
        { id: 'foobarbaz' },
    ]
    const defaultChildrenIds = defaultChildren
    const irrelevantPaths = ['irrelevant/path']
    const pathsToIncludeWithMatchingAncestors = [
        'foo/bar/foobar/barbaz',
        'foo/bar/barbaz/bazbazfoo',
    ]
    const pathsToIncludeWithMatchingChildren = ['foo/bar/foobar']
    const pathsToIncludeWithMatchingParents = ['foo/bar']

    beforeEach(() => {
        node = { path: 'foo/bar' }
    })

    it('should return all children when filter is empty', () => {
        node.children = defaultChildren
        const filter = []
        const actual = computeChildNodes(node, filter)
        const expected = defaultChildrenIds

        expect(actual).toEqual(expected)
    })

    it("should return an empty array when the node has children but neither the children's or the parent path are in filter", () => {
        node.children = defaultChildren
        const filter = irrelevantPaths
        const actual = computeChildNodes(node, filter)
        const expected = []

        expect(actual).toEqual(expected)
    })

    it('should return an empty array when filter contains none of the child paths but a parent path', () => {
        node.children = defaultChildren
        const filter = pathsToIncludeWithMatchingParents
        const actual = computeChildNodes(node, filter)
        const expected = []

        expect(actual).toEqual(expected)
    })

    it('should return some the children ids when filter contains none of the child paths but some ancestor paths', () => {
        node.children = defaultChildren
        const filter = pathsToIncludeWithMatchingAncestors
        const actual = computeChildNodes(node, filter)
        const expected = [{ id: 'foobar' }, { id: 'barbaz' }]

        expect(actual).toEqual(expected)
    })

    it('should return one of the children ids when filter contains one of the child paths but no parent path', () => {
        node.children = defaultChildren
        const filter = pathsToIncludeWithMatchingChildren
        const actual = computeChildNodes(node, filter)
        const expected = [{ id: 'foobar' }]

        expect(actual).toEqual(expected)
    })

    it('should return an empty array when the node has no children but filter is not empty', () => {
        node.children = []
        const filter = pathsToIncludeWithMatchingParents
        const actual = computeChildNodes(node, filter)
        const expected = []

        expect(actual).toEqual(expected)
    })

    it('should return an empty array when the node has no children and filter is empty', () => {
        node.children = []
        const filter = []
        const actual = computeChildNodes(node, filter)
        const expected = []

        expect(actual).toEqual(expected)
    })
})
