const PRIMITIVE_TYPES = new Set(['string', 'number', 'boolean'])

const createChangeHandler = ({ onChange }) => payload => {
    if (payload && 'value' in payload) {
        // ui-core event signature
        onChange(payload.value)
    } else if (payload && payload.target && 'value' in payload.target) {
        // synthetic event
        onChange(payload.target.value)
    } else if (PRIMITIVE_TYPES.has(typeof payload)) {
        // directly usable value
        onChange(payload)
    } else {
        // ¯\_(ツ)_/¯
        throw new Error('Could not process event payload')
    }
}

export { createChangeHandler }
