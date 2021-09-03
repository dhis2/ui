export const joinPath = (...parts) => {
    const realParts = parts.filter(part => !!part)
    return realParts.map(part => part.replace(/^\/+|\/+$/g, '')).join('/')
}
