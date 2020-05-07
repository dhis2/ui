export const debounce = function(f, ms) {
    let timeout

    return function(...args) {
        console.log('args', args, timeout)
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(function() {
            console.log('call and reset')
            timeout = undefined
            f(...args)
        }, ms)
    }
}
