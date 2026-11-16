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
        origin.push(...Array.from({ length: folded.length }, () => index))
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

/** A run of a label: matched by the term, or not. */
export interface MatchSegment {
    text: string
    matched: boolean
}

/** Cuts a label into plain and matched segments for one search term. */
export type MatchSplitter = (text: string) => MatchSegment[]

const wholeOrNothing =
    (matches: (value: string) => boolean): MatchSplitter =>
    (text) =>
        text === '' ? [] : [{ text, matched: matches(text) }]

const everyOccurrence =
    (needle: string): MatchSplitter =>
    (text) => {
        const folded = foldTextWithOrigin(text)
        const segments: MatchSegment[] = []
        let from = 0
        let at = folded.text.indexOf(needle)
        while (at >= 0) {
            const start = folded.origin[at]
            const end = folded.origin[at + needle.length - 1] + 1
            if (start > from) {
                segments.push({ text: text.slice(from, start), matched: false })
            }
            segments.push({ text: text.slice(start, end), matched: true })
            from = end
            at = folded.text.indexOf(needle, at + needle.length)
        }
        if (from < text.length) {
            segments.push({ text: text.slice(from), matched: false })
        }
        return segments
    }

/**
 * The per-term work of highlighting, done once: the splitter it returns
 * cuts a label into plain and matched segments, in order. Every
 * non-overlapping occurrence of a plain term; the whole label, or none of
 * it, for a quoted or wildcard term; one plain segment for a blank term;
 * no segments for empty text.
 */
export const createMatchSplitter = (term: string): MatchSplitter => {
    if (term.trim() === '') {
        return wholeOrNothing(() => false)
    }
    if (isQuoted(term) || /[*?]/.test(term)) {
        return wholeOrNothing(createSearchMatcher(term))
    }
    return everyOccurrence(foldText(term))
}
