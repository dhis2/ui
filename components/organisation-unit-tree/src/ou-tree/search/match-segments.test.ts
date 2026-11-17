import {
    createSearchMatcher,
    createMatchSplitter,
    stripCaseAndAccents,
    stripCaseAndAccentsWithPositions,
} from './match-segments'

describe('stripCaseAndAccents', () => {
    it('lower-cases and strips accents', () => {
        expect(stripCaseAndAccents('Chisembe Clínic')).toBe('chisembe clinic')
        expect(stripCaseAndAccents('Asunción')).toBe('asuncion')
        expect(stripCaseAndAccents('_País_Test')).toBe('_pais_test')
    })
})

describe('createSearchMatcher', () => {
    it('matches a plain term as a substring, ignoring case and accents', () => {
        const matches = createSearchMatcher('clinic')

        expect(matches('Chisembe Clinic')).toBe(true)
        expect(matches('Chisembe Clínic')).toBe(true)
        expect(matches('CLINICAL')).toBe(true)
        expect(matches('Kabwe Health Centre')).toBe(false)
    })

    it('matches everything for a blank or whitespace-only term', () => {
        expect(createSearchMatcher('')('anything')).toBe(true)
        expect(createSearchMatcher('   ')('anything')).toBe(true)
    })

    it('matches a quoted term against the whole value', () => {
        const matches = createSearchMatcher('"Kabwe District"')

        expect(matches('Kabwe District')).toBe(true)
        expect(matches('kabwe district')).toBe(true)
        expect(matches('Kabwe District North')).toBe(false)
        expect(matches('Kabwe')).toBe(false)
    })

    it('treats * and ? as wildcards anchored to the whole value', () => {
        expect(createSearchMatcher('Ka*')('Kabwe District')).toBe(true)
        expect(createSearchMatcher('Ka*')('Chikupi Mission')).toBe(false)
        expect(createSearchMatcher('*Clinic')('Kanona Clinic')).toBe(true)
        expect(createSearchMatcher('*Clinic')('Kanona Clinic 2')).toBe(false)
        expect(createSearchMatcher('K?bwe*')('Kabwe District')).toBe(true)
        expect(createSearchMatcher('K?bwe*')('Kaabwe District')).toBe(false)
    })

    it('matches regex metacharacters in a wildcard term literally', () => {
        const matches = createSearchMatcher('San (*')

        expect(matches('San (Norte)')).toBe(true)
        expect(matches('San Norte')).toBe(false)
        expect(createSearchMatcher('a.b*')('a.b.c')).toBe(true)
        expect(createSearchMatcher('a.b*')('aXb')).toBe(false)
    })
})

describe('stripCaseAndAccentsWithPositions', () => {
    it('strips with a source index per stripped character', () => {
        expect(stripCaseAndAccentsWithPositions('Clí')).toEqual({
            text: 'cli',
            sourceIndex: [0, 1, 2],
        })
        // A dotted capital I strips to a plain i; still one entry per
        // stripped character.
        expect(stripCaseAndAccentsWithPositions('İx')).toEqual({
            text: 'ix',
            sourceIndex: [0, 1],
        })
    })

    it('points every character a syllable decomposes into at the syllable', () => {
        // A Hangul syllable decomposes to three jamo and no mark.
        expect(stripCaseAndAccentsWithPositions('a한b')).toEqual({
            text: 'a\u1112\u1161\u11abb',
            sourceIndex: [0, 1, 1, 1, 2],
        })
    })
})

const splitMatches = (text: string, term: string) =>
    createMatchSplitter(term)(text)

describe('createMatchSplitter', () => {
    it('does the per-term work once: the splitter is reusable across texts', () => {
        const split = createMatchSplitter('san')
        expect(split('San Jose')).toEqual([
            { text: 'San', matched: true },
            { text: ' Jose', matched: false },
        ])
        expect(split('Santa Cruz')).toEqual([
            { text: 'San', matched: true },
            { text: 'ta Cruz', matched: false },
        ])
    })

    it('cuts the text into plain and matched segments, ignoring case and accents', () => {
        expect(splitMatches('Hospital Clínico', 'clin')).toEqual([
            { text: 'Hospital ', matched: false },
            { text: 'Clín', matched: true },
            { text: 'ico', matched: false },
        ])
        expect(splitMatches('Hospital Clínico', 'CLÍN')).toEqual([
            { text: 'Hospital ', matched: false },
            { text: 'Clín', matched: true },
            { text: 'ico', matched: false },
        ])
    })

    it('marks every occurrence, without overlap', () => {
        expect(splitMatches('San Jose de San Martin', 'san')).toEqual([
            { text: 'San', matched: true },
            { text: ' Jose de ', matched: false },
            { text: 'San', matched: true },
            { text: ' Martin', matched: false },
        ])
        expect(splitMatches('aaa', 'aa')).toEqual([
            { text: 'aa', matched: true },
            { text: 'a', matched: false },
        ])
    })

    it('keeps the cut right after a character that folds to another length', () => {
        expect(splitMatches('İstanbul Clinic', 'clinic')).toEqual([
            { text: 'İstanbul ', matched: false },
            { text: 'Clinic', matched: true },
        ])
        expect(splitMatches('한 Clinic', 'clinic')).toEqual([
            { text: '한 ', matched: false },
            { text: 'Clinic', matched: true },
        ])
    })

    it('marks the whole text for a quoted or wildcard term that matches, none of it otherwise', () => {
        expect(splitMatches('Rio de Janeiro', '"Rio de Janeiro"')).toEqual([
            { text: 'Rio de Janeiro', matched: true },
        ])
        expect(splitMatches('Rio de Janeiro', 'rio*')).toEqual([
            { text: 'Rio de Janeiro', matched: true },
        ])
        expect(splitMatches('Rio de Janeiro', '"Rio"')).toEqual([
            { text: 'Rio de Janeiro', matched: false },
        ])
    })

    it('marks nothing for a blank term or a miss, and returns no segments for empty text', () => {
        expect(splitMatches('Rio', '  ')).toEqual([
            { text: 'Rio', matched: false },
        ])
        expect(splitMatches('Rio', 'xyz')).toEqual([
            { text: 'Rio', matched: false },
        ])
        expect(splitMatches('', 'rio')).toEqual([])
    })
})
