export const leftTrimToRootId = (path, rootId) => {
    return path.replace(new RegExp(`^.*(/${rootId})`), '$1')
}
