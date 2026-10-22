import type { CachedNode } from '../node-cache/index'
import { excludeNestedRoots } from './exclude-nested-roots'

const node = (id: string, path: string): CachedNode => ({
    id,
    displayName: id,
    path,
    level: path.split('/').length - 1,
    leaf: false,
})

describe('excludeNestedRoots', () => {
    it('drops a root under another root and keeps the order', () => {
        const kept = excludeNestedRoots([
            node('ou-3', '/ou-1/ou-2/ou-3'),
            node('ou-13', '/ou-1/ou-13'),
            node('ou-1', '/ou-1'),
            node('ou-20', '/ou-20'),
        ])

        expect(kept.map((root) => root.id)).toEqual(['ou-1', 'ou-20'])
    })

    it('keeps siblings and unrelated roots', () => {
        const kept = excludeNestedRoots([
            node('ou-3', '/ou-1/ou-2/ou-3'),
            node('ou-6', '/ou-1/ou-2/ou-6'),
        ])

        expect(kept.map((root) => root.id)).toEqual(['ou-3', 'ou-6'])
    })

    it('does not treat a path prefix without a slash as an ancestor', () => {
        const kept = excludeNestedRoots([node('a', '/a'), node('ab', '/ab')])

        expect(kept.map((root) => root.id)).toEqual(['a', 'ab'])
    })

    it('handles one root and none', () => {
        expect(excludeNestedRoots([node('a', '/a')])).toHaveLength(1)
        expect(excludeNestedRoots([])).toEqual([])
    })
})
