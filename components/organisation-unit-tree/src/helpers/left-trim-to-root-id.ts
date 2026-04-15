export const leftTrimToRootId = (path: string, rootId: string): string => {
    return path.replace(new RegExp(`^.*(/${rootId})`), '$1')
}
