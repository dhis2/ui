const createBlurHandler = (input, onBlur) => (payload, event) => {
    input.onBlur(event)

    if (onBlur && typeof onBlur === 'function') {
        onBlur(payload, event)
    }
}

export { createBlurHandler }
