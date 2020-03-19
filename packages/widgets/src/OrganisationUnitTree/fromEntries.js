export const fromEntries = entries =>
    entries.reduce(
        (collection, [key, name]) => ({
            ...collection,
            [key]: name,
        }),
        {}
    )
