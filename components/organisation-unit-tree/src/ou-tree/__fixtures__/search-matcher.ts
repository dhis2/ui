/**
 * Lower-cases and strips diacritics, so "Clínic" and "clinic" compare equal.
 * Mirrors what the backend's `unaccent` does for Latin-script names.
 */
export const foldText = (value: string): string =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

const escapeRegExp = (value: string): string =>
    value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const isQuoted = (term: string): boolean =>
    term.length > 2 && term.startsWith('"') && term.endsWith('"')

/**
 * Builds the predicate for a `search` term, following the backend's
 * `likePattern`: a blank term matches everything, a quoted term matches the
 * whole value, a term with `*` or `?` is a glob over the whole value, and any
 * other term matches as a substring. Matching ignores case and accents.
 */
export const createSearchMatcher = (
    term: string
): ((value: string) => boolean) => {
    if (term.trim() === '') {
        return () => true
    }

    if (isQuoted(term)) {
        const exact = foldText(term.slice(1, -1))
        return (value) => foldText(value) === exact
    }

    if (/[*?]/.test(term)) {
        const source = Array.from(foldText(term), (char) => {
            if (char === '*') {
                return '.*'
            }
            if (char === '?') {
                return '.'
            }
            return escapeRegExp(char)
        }).join('')
        const pattern = new RegExp(`^${source}$`)
        return (value) => pattern.test(foldText(value))
    }

    const needle = foldText(term)
    return (value) => foldText(value).includes(needle)
}
