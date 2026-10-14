import { debounce } from './debounce.js'

beforeEach(() => {
    jest.useFakeTimers()
})

describe('debounce', () => {
    it('should call the debounced function once after the timeout without immediate', () => {
        const spy = jest.fn()
        const debounced = debounce(spy, 100)

        debounced()
        debounced()

        expect(spy).not.toHaveBeenCalled()

        jest.runAllTimers()

        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should call the debounced function once immediately if immediate is set', () => {
        const spy = jest.fn()
        const debounced = debounce(spy, 100, true)

        debounced()
        debounced()

        expect(spy).toHaveBeenCalledTimes(1)

        jest.runAllTimers()

        expect(spy).toHaveBeenCalledTimes(1)
    })

    it('should not call the debounced function once cancelled', () => {
        const spy = jest.fn()
        const debounced = debounce(spy, 100)

        debounced()
        debounced.cancel()
        jest.runAllTimers()

        expect(spy).not.toHaveBeenCalled()
    })

    it('should call the debounced function immediately again after a cancel if immediate is set', () => {
        const spy = jest.fn()
        const debounced = debounce(spy, 100, true)

        debounced()
        debounced.cancel()
        debounced()

        expect(spy).toHaveBeenCalledTimes(2)
    })
})
