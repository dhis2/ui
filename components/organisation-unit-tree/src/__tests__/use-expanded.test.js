import { useState } from 'react'
import { useExpanded } from '../use-expanded.js'
import {
    createExpandHandlers,
    getInitiallyExpandedPaths,
} from '../use-expanded/helpers.js'

jest.mock('react', () => ({
    useState: jest.fn(initialValue => [initialValue, () => null]),
}))

jest.mock('../use-expanded/helpers.js', () => ({
    getInitiallyExpandedPaths: jest.fn(input => input),
    createExpandHandlers: jest.fn(() => ({
        handleCollapse: () => null,
        handleExpand: () => null,
    })),
}))

describe('OrganisationUnitTree - useExpanded hook', () => {
    it('should use the getInitiallyExpandedPaths helper to determine the initial state', () => {
        getInitiallyExpandedPaths.mockImplementationOnce(input => [
            ...input,
            '/foo/bar/baz',
        ])
        const expected = ['/foo', '/foo/bar', '/foo/bar/baz']
        const { expanded: actual } = useExpanded(['/foo', '/foo/bar'])

        expect(actual).toEqual(expected)
    })

    it('should pass the setExpanded function from seState to createExpandHandlers', () => {
        const setExpanded = jest.fn()
        useState.mockImplementationOnce(() => [[], setExpanded])

        useExpanded([])
        expect(createExpandHandlers).toHaveBeenCalledWith(
            expect.objectContaining({ setExpanded })
        )
    })
})
