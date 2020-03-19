export const composeValidators = (...validators) => {
    return (...args) => {
        return validators.reduce(
            (error, validator) => error || validator(...args),
            undefined
        )
    }
}
