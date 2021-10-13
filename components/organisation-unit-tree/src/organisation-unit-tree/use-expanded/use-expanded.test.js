import { useState } from 'react'
import { getAllExpandedPaths } from '../../get-all-expanded-paths/index.js'
import { createExpandHandlers } from './create-expand-handlers.js'
import { useExpanded } from './use-expanded.js'

jest.mock('react', () => ({
    useState: jest.fn(initialValue => [initialValue, () => null]),
}))

jest.mock('../../get-all-expanded-paths/index.js', () => ({
    getAllExpandedPaths: jest.fn(input => input),
}))

jest.mock('./create-expand-handlers.js', () => ({
    createExpandHandlers: jest.fn(() => ({
        handleCollapse: () => null,
        handleExpand: () => null,
    })),
}))

describe('OrganisationUnitTree - useExpanded hook', () => {
    const onExpand = jest.fn()
    const onCollapse = jest.fn()

    it('should use the getAllExpandedPaths helper to determine the initial state', () => {
        getAllExpandedPaths.mockImplementationOnce(input => [
            ...input,
            '/foo/bar/baz',
        ])

        const expected = ['/foo', '/foo/bar', '/foo/bar/baz']
        const { expanded: actual } = useExpanded({
            initiallyExpanded: ['/foo', '/foo/bar'],
            onExpand,
            onCollapse,
        })

        expect(actual).toEqual(expected)
    })

    it('should pass the setExpanded function from seState to createExpandHandlers', () => {
        const setExpanded = jest.fn()
        useState.mockImplementationOnce(() => [[], setExpanded])

        useExpanded({
            initiallyExpanded: [],
            onExpand,
            onCollapse,
        })
        expect(createExpandHandlers).toHaveBeenCalledWith(
            expect.objectContaining({ setExpanded })
        )
    })

    it('should return the controlled values if all of them are being provided', () => {
        const expandedControlled = ['/foo']
        const handleExpandControlled = jest.fn()
        const handleCollapseControlled = jest.fn()

        const { expanded, handleExpand, handleCollapse } = useExpanded({
            initiallyExpanded: [],
            onExpand,
            onCollapse,
            expandedControlled,
            handleExpandControlled,
            handleCollapseControlled,
        })

        expect(expanded).toBe(expandedControlled)
        expect(handleExpand).toBe(handleExpandControlled)
        expect(handleCollapse).toBe(handleCollapseControlled)
    })
})
