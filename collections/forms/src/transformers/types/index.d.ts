
type ValuesWithId = Array<{ id: string }> | undefined

export const arrayWithIdObjects: {
    format: (value: ValuesWithId) => string,
    pars: (value: string) => ValuesWithId
}
