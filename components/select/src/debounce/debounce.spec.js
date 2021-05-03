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
})
