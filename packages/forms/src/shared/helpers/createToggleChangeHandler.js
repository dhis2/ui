const createToggleChangeHandler = (input, onChange) => (payload, event) => {
    input.onChange(event)

    if (onChange && typeof onChange === 'function') {
        onChange(payload, event)
    }
}

export { createToggleChangeHandler }
