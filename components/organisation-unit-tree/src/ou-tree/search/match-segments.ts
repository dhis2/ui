/**
 * Lower-cases the text and removes accents, so "Clínic" and "clinic"
 * compare equal. Mirrors what the backend's `unaccent` does for
 * Latin-script names.
 */
export const stripCaseAndAccents = (text: string): string =>
    text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export interface StrippedText {
    /** The text with case and accents removed. */
    text: string
    /**
     * For each character of `text`, the index in the original of the
     * character it came from. Stripping can change the length: a Hangul
     * syllable becomes three characters, all pointing at the same index.
     */
    sourceIndex: number[]
}

/**
 * `stripCaseAndAccents`, keeping where each character came from, so a
 * match found in the stripped text can be cut out of the original.
 */
export const stripCaseAndAccentsWithPositions = (
    text: string
): StrippedText => {
    let stripped = ''
    const sourceIndex: number[] = []
    let index = 0
    for (const char of text) {
        const strippedChar = stripCaseAndAccents(char)
        stripped += strippedChar
        sourceIndex.push(...new Array<number>(strippedChar.length).fill(index))
        index += char.length
    }
    return { text: stripped, sourceIndex }
}

const escapeRegExp = (value: string): string =>
    value.replace(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`)

const isQuoted = (term: string): boolean =>
    term.length > 2 && term.startsWith('"') && term.endsWith('"')

const hasWildcards = (term: string): boolean => /[*?]/.test(term)

/**
 * Returns a function that tells whether a name matches a `search` term,
 * the way the backend does. A blank term matches every name. A quoted
 * term, `"Rio de Janeiro"`, must equal the whole name. A term with
 * wildcards is matched against the whole name, `*` standing for any run
 * of characters and `?` for one. Any other term matches anywhere in the
 * name. Case and accents never matter.
 */
export const createSearchMatcher = (
    term: string
): ((name: string) => boolean) => {
    if (term.trim() === '') {
        return () => true
    }

    if (isQuoted(term)) {
        const wholeTerm = stripCaseAndAccents(term.slice(1, -1))
        return (name) => stripCaseAndAccents(name) === wholeTerm
    }

    if (hasWildcards(term)) {
        const regexSource = Array.from(stripCaseAndAccents(term), (char) => {
            if (char === '*') {
                return '.*'
            }
            if (char === '?') {
                return '.'
            }
            return escapeRegExp(char)
        }).join('')
        const wildcardPattern = new RegExp(`^${regexSource}$`)
        return (name) => wildcardPattern.test(stripCaseAndAccents(name))
    }

    const normalizedTerm = stripCaseAndAccents(term)
    return (name) => stripCaseAndAccents(name).includes(normalizedTerm)
}

/** A run of a label: matched by the term, or not. */
export interface MatchSegment {
    text: string
    matched: boolean
}

/** Cuts a label into plain and matched segments for one search term. */
export type MatchSplitter = (label: string) => MatchSegment[]

/**
 * The label cut at every occurrence of the term (already stripped of case
 * and accents), occurrences not overlapping: `san` cuts "San Jose de San
 * Martin" into "San", " Jose de ", "San", " Martin".
 */
const splitAtOccurrences = (
    label: string,
    normalizedTerm: string
): MatchSegment[] => {
    const stripped = stripCaseAndAccentsWithPositions(label)
    const segments: MatchSegment[] = []
    // Copies the plain stretch before each occurrence, then the occurrence.
    let plainFrom = 0
    let foundAt = stripped.text.indexOf(normalizedTerm)
    while (foundAt >= 0) {
        const start = stripped.sourceIndex[foundAt]
        const end =
            stripped.sourceIndex[foundAt + normalizedTerm.length - 1] + 1
        if (start > plainFrom) {
            segments.push({
                text: label.slice(plainFrom, start),
                matched: false,
            })
        }
        segments.push({ text: label.slice(start, end), matched: true })
        plainFrom = end
        foundAt = stripped.text.indexOf(
            normalizedTerm,
            foundAt + normalizedTerm.length
        )
    }
    if (plainFrom < label.length) {
        segments.push({ text: label.slice(plainFrom), matched: false })
    }
    return segments
}

/**
 * Prepares the highlighting for one search term, once, and returns the
 * function that cuts a label into plain and matched segments: `san` cuts
 * "San Jose de San Martin" into "San", " Jose de ", "San", " Martin",
 * the two "San" marked. A quoted or wildcard term matches the whole
 * label or none of it, so the label is one segment either way. A blank
 * term marks nothing, and an empty label gives no segments.
 */
export const createMatchSplitter = (term: string): MatchSplitter => {
    const blank = term.trim() === ''
    const matchesWholeLabel = isQuoted(term) || hasWildcards(term)
    const matches = createSearchMatcher(term)
    const normalizedTerm = stripCaseAndAccents(term)

    return (label) => {
        if (label === '') {
            return []
        }
        if (blank) {
            return [{ text: label, matched: false }]
        }
        if (matchesWholeLabel) {
            return [{ text: label, matched: matches(label) }]
        }
        return splitAtOccurrences(label, normalizedTerm)
    }
}
