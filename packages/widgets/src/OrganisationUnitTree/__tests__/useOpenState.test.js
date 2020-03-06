import { useEffect, useState } from 'react'
import { useOpenState } from '../useOpenState'

jest.mock('react', () => ({
    useState: jest.fn(),
    useEffect: jest.fn(),
}))

describe('OrganisationUnitTree - useOpenState', () => {
    const onExpand = jest.fn()
    const onCollapse = jest.fn()

    beforeEach(() => {
        useState.mockImplementation(initialValue => [initialValue, () => null])
        useEffect.mockImplementation(callback => callback())
    })

    afterEach(() => {
        onExpand.mockClear()
        onCollapse.mockClear()
    })

    it('should not have an initial open state if the path is not in the expanded array', () => {
        const path = '/foo'
        const expanded = ['/bar']
        const expected = false
        const { open: actual } = useOpenState({ path, expanded })

        expect(actual).toBe(expected)
    })

    it('should have an initial open state if the path is in the expanded array', () => {
        const path = '/foo'
        const expanded = ['/foo']
        const expected = true
        const { open: actual } = useOpenState({ path, expanded })

        expect(actual).toBe(expected)
    })

    it('should call setOpen with false when calling onToggleOpen if open is true', () => {
        let useStateCall = 0
        const open = true
        const setOpen = jest.fn()

        useState.mockImplementation(initialValue => {
            useStateCall++

            if (useStateCall === 1) {
                return [initialValue, jest.fn()]
            }

            return [open, setOpen]
        })

        const path = '/foo'
        const expanded = ['/foo']

        const { onToggleOpen } = useOpenState({ path, expanded })
        onToggleOpen()

        expect(setOpen).toHaveBeenCalledWith(!open)
    })

    it('should call setOpen with true when calling onToggleOpen if open is false', () => {
        let useStateCall = 0
        const open = true
        const setOpen = jest.fn()

        useState.mockImplementation(initialValue => {
            useStateCall++

            if (useStateCall === 1) {
                return [initialValue, jest.fn()]
            }

            return [open, setOpen]
        })

        const { onToggleOpen } = useOpenState({ path: '/foo', expanded: [] })
        onToggleOpen()

        expect(setOpen).toHaveBeenCalledWith(!open)
    })

    it('should call the onExpand callback with the path when calling onToggleOpen and open was false', () => {
        useState.mockImplementation(() => [false, jest.fn()])

        const path = '/foo'
        const { onToggleOpen } = useOpenState({
            path,
            expanded: [],
            onExpand,
            onCollapse,
        })

        onToggleOpen()

        expect(onExpand).toHaveBeenCalledWith({ path })
        expect(onCollapse).toHaveBeenCalledTimes(0)
    })

    it('should call the onCollapse callback with the path when calling onToggleOpen and open was true', () => {
        useState.mockImplementation(() => [true, jest.fn()])

        const path = '/foo'
        const { onToggleOpen } = useOpenState({
            path,
            expanded: [],
            onExpand,
            onCollapse,
        })

        onToggleOpen()

        expect(onCollapse).toHaveBeenCalledWith({ path })
        expect(onExpand).toHaveBeenCalledTimes(0)
    })

    it('should set the state to open if there is an error and autoExpandLoadingError is true', () => {
        const path = '/foo'
        const { open } = useOpenState({
            autoExpandLoadingError: true,
            errorMessage: 'error message',
            path,
            expanded: [],
            onExpand,
            onCollapse,
        })

        expect(open).toBe(true)
    })

    it('should not alter the state if there is an error but autoExpandLoadingError is falsy', () => {
        const path = '/foo'
        const { open } = useOpenState({
            autoExpandLoadingError: undefined,
            errorMessage: 'error message',
            path,
            expanded: [],
            onExpand,
            onCollapse,
        })

        expect(open).toBe(false)
    })

    it('should not alter the state if autoExpandLoadingError is true but there is no error', () => {
        const path = '/foo'
        const { open } = useOpenState({
            autoExpandLoadingError: true,
            errorMessage: '',
            path,
            expanded: [],
            onExpand,
            onCollapse,
        })

        expect(open).toBe(false)
    })
})
