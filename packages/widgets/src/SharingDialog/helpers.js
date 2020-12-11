export const debounce = function (f, ms) {
    let timeout

    return function (...args) {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(function () {
            timeout = undefined
            f(...args)
        }, ms)
    }
}
