import EventEmitter from 'events'
import { renderHook, act } from '@testing-library/react-hooks'
import { useQuery } from './use-query.js'

jest.useFakeTimers()

describe('useQuery', () => {
    const fetchFn = jest.fn()
    const onTimeout = jest.fn(resolve => {
        resolve({ foo: 'bar' })
    })

    // make sure request can be aborted to prevent state mutation after unmount
    const emitter = new EventEmitter()
    jest.spyOn(AbortController.prototype, 'abort').mockImplementation(() => {
        emitter.emit('abort')
    })

    fetchFn.mockImplementation(() => {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => onTimeout(resolve, reject), 500)
            emitter.on('abort', () => clearTimeout(timeout))
        })
    })

    afterEach(() => {
        fetchFn.mockClear()
    })

    it('should start with loading: true, error: null and data: null', async () => {
        const hookState = renderHook(() => useQuery(fetchFn))
        expect(hookState.result.current).toEqual(
            expect.objectContaining({
                loading: true,
                error: null,
                data: null,
            })
        )
    })

    it('should use the "defaultData" option as initial data when provided', () => {
        const defaultData = { foo: 'bar' }
        const { result } = renderHook(() => useQuery(fetchFn, { defaultData }))
        expect(result.current).toEqual(
            expect.objectContaining({
                loading: true,
                error: null,
                data: { foo: 'bar' },
            })
        )
    })

    it('should perform the initial request right away', () => {
        const defaultData = { foo: 'bar' }
        renderHook(() => useQuery(fetchFn, { defaultData }))
        expect(fetchFn).toHaveBeenCalledTimes(1)
    })

    it('should set the data after a successful initial request', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useQuery(fetchFn)
        )
        expect(fetchFn).toHaveBeenCalledTimes(1)

        await act(async () => {
            jest.advanceTimersByTime(1000)
            await waitForNextUpdate()
        })

        expect(result.current).toEqual(
            expect.objectContaining({
                loading: false,
                error: null,
                data: { foo: 'bar' },
            })
        )
    })

    it('should set the error after a failed initial request', async () => {
        const failureError = new Error('I am a failure')
        onTimeout.mockImplementationOnce((resolve, reject) =>
            reject(failureError)
        )

        const { result, waitForNextUpdate } = renderHook(() =>
            useQuery(fetchFn)
        )
        expect(fetchFn).toHaveBeenCalledTimes(1)

        await act(async () => {
            jest.advanceTimersByTime(1000)
            await waitForNextUpdate()
        })

        expect(result.current).toEqual(
            expect.objectContaining({
                loading: false,
                error: failureError,
                data: null,
            })
        )
    })
})
