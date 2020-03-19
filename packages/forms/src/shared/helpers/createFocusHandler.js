const createFocusHandler = (input, onFocus) => (payload, event) => {
    input.onFocus(event)

    if (onFocus && typeof onFocus === 'function') {
        onFocus(payload, event)
    }
}

export { createFocusHandler }
