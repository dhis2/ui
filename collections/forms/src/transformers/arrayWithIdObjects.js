const format = value => (!value ? [] : value.map(({ id }) => id))

const parse = value =>
    !value || (Array.isArray(value) && value.length === 0)
        ? undefined
        : value.map(id => ({ id }))

export const arrayWithIdObjects = { format, parse }
