const trimSlashes = (part: string): string => {
    let start = 0
    let end = part.length

    while (part[start] === '/') {
        start++
    }
    while (end > start && part[end - 1] === '/') {
        end--
    }

    return part.slice(start, end)
}

export const joinPath = (...parts: string[]): string => {
    const realParts = parts.filter((part) => !!part)
    return realParts.map(trimSlashes).join('/')
}
