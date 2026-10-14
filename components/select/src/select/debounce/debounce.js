/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds. If `immediate` is
 * passed, trigger the function on the leading edge, instead of the trailing.
 *
 * The returned function has a `cancel` method, which drops a pending call. Call it when the
 * caller goes away (e.g. on unmount), so a pending call doesn't run after it.
 */

export const debounce = (func, wait, immediate) => {
    let timeout

    const debounced = (...args) => {
        const context = this

        const later = () => {
            timeout = null

            if (!immediate) {
                func.apply(context, args)
            }
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)

        if (callNow) {
            func.apply(context, args)
        }
    }

    debounced.cancel = () => {
        clearTimeout(timeout)
        timeout = null
    }

    return debounced
}
