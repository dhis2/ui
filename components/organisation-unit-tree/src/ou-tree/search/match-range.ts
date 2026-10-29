/**
 * Lower-cases and strips diacritics, so "Clínic" and "clinic" compare equal.
 * Mirrors what the backend's `unaccent` does for Latin-script names.
 */
export const foldText = (value: string): string =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()

export interface FoldedText {
    text: string
    /** For each character of `text`, the index of the original character it came from. */
    origin: number[]
}

/**
 * `foldText` character by character, keeping where each folded character
 * came from, so a range found in the folded text maps back to the original.
 */
export const foldTextWithOrigin = (value: string): FoldedText => {
    let text = ''
    const origin: number[] = []
    let index = 0
    for (const char of value) {
        const folded = foldText(char)
        text += folded
        for (let i = 0; i < folded.length; i += 1) {
            origin.push(index)
        }
        index += char.length
    }
    return { text, origin }
}

const escapeRegExp = (value: string): string =>
    value.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)

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

export type MatchRange = { start: number; end: number } | 'all'

/**
 * Where a search term matches a label, in the label's own indexes: a range
 * for a plain term, 'all' for a quoted or wildcard term that matches,
 * undefined when the term is blank or not found.
 */
export const findMatch = (
    text: string,
    term: string
): MatchRange | undefined => {
    if (term.trim() === '') {
        return undefined
    }
    if (isQuoted(term) || /[*?]/.test(term)) {
        return createSearchMatcher(term)(text) ? 'all' : undefined
    }
    const needle = foldText(term)
    const folded = foldTextWithOrigin(text)
    const at = folded.text.indexOf(needle)
    if (at < 0) {
        return undefined
    }
    return {
        start: folded.origin[at],
        end: folded.origin[at + needle.length - 1] + 1,
    }
}
