export const joinPath = (...parts: string[]): string => {
    const realParts = parts.filter((part) => !!part)
    return realParts.map((part) => part.replace(/^\/+|\/+$/g, '')).join('/')
}
