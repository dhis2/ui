import { renderHook } from '@testing-library/react-hooks'
import { useOpenState } from './use-open-state.js'

describe('OrganisationUnitTree - useOpenState', () => {
    const onExpand = jest.fn()
    const onCollapse = jest.fn()

    afterEach(() => {
        onExpand.mockClear()
        onCollapse.mockClear()
    })

    it('should set open to false if the path is not in the expanded array', () => {
        const path = '/foo'
        const expanded = ['/bar']
        const expected = false
        const { result } = renderHook(() => useOpenState({ path, expanded }))
        const { open: actual } = result.current

        expect(actual).toBe(expected)
    })

    it('should set open to true if the path is in the expanded array', () => {
        const path = '/foo'
        const expanded = ['/foo']
        const expected = true
        const { result } = renderHook(() => useOpenState({ path, expanded }))
        const { open: actual } = result.current

        expect(actual).toBe(expected)
    })

    it('should call onCollapse when calling onToggleOpen while open is true', () => {
        const path = '/foo'
        const expanded = ['/foo']

        const { result } = renderHook(() => useOpenState({ path, expanded, onCollapse }))
        const { onToggleOpen } = result.current
        onToggleOpen()

        expect(onCollapse).toHaveBeenCalledWith({ path: '/foo' })
        expect(onExpand).toHaveBeenCalledTimes(0)
    })

    it('should call onExpand when calling onToggleOpen while open is false', () => {
        const path = '/foo'
        const expanded = []

        const { result } = renderHook(() => useOpenState({ path, expanded, onExpand }))
        const { onToggleOpen } = result.current
        onToggleOpen()

        expect(onExpand).toHaveBeenCalledWith({ path: '/foo' })
        expect(onCollapse).toHaveBeenCalledTimes(0)
    })

    it('should set openedOnceDueToError to true if there is an error and autoExpandLoadingError is true', async () => {
        const path = '/foo'
        const { result } = renderHook(() =>
            useOpenState({
                autoExpandLoadingError: true,
                errorMessage: 'error message',
                path,
                expanded: [],
                onExpand,
                onCollapse,
            })
        )

        const { openedOnceDueToError } = result.current
        expect(openedOnceDueToError).toBe(true)
    })

    it('should not set open to true if there is an error but autoExpandLoadingError is falsy', () => {
        const path = '/foo'
        const { result } = renderHook(() =>
            useOpenState({
                autoExpandLoadingError: undefined,
                errorMessage: 'error message',
                path,
                expanded: [],
                onExpand,
                onCollapse,
            })
        )
        const { open } = result.current

        expect(open).toBe(false)
    })

    it('should not set open to true if autoExpandLoadingError is true but there is no error', () => {
        const path = '/foo'
        const { result } = renderHook(() =>
            useOpenState({
                autoExpandLoadingError: true,
                errorMessage: '',
                path,
                expanded: [],
                onExpand,
                onCollapse,
            })
        )
        const { open } = result.current

        expect(open).toBe(false)
    })
})
