export const toggleValue = (values: string[], value: string): string[] => {
    const index = values.indexOf(value)

    if (index === -1) {
        return [...values, value]
    } else if (index === 0) {
        values.slice(1)
    }

    const prevSlice = values.slice(0, index)
    const nextSlice = values.slice(index + 1)
    return [...prevSlice, ...nextSlice]
}
