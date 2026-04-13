/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds. If `immediate` is
 * passed, trigger the function on the leading edge, instead of the trailing.
 */

export const debounce = (
    func: (...args: unknown[]) => void,
    wait: number,
    immediate?: boolean
) => {
    let timeout: ReturnType<typeof setTimeout> | null

    return (...args: unknown[]) => {
        const later = () => {
            timeout = null

            if (!immediate) {
                func(...args)
            }
        }

        const callNow = immediate && !timeout

        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(later, wait)

        if (callNow) {
            func(...args)
        }
    }
}
