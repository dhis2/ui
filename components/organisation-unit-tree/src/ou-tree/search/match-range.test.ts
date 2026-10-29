import {
    createSearchMatcher,
    findMatch,
    foldText,
    foldTextWithOrigin,
} from './match-range'

describe('foldText', () => {
    it('lower-cases and strips accents', () => {
        expect(foldText('Chisembe Clínic')).toBe('chisembe clinic')
        expect(foldText('Asunción')).toBe('asuncion')
        expect(foldText('_País_Test')).toBe('_pais_test')
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

describe('foldTextWithOrigin', () => {
    it('folds with an origin index per folded character', () => {
        expect(foldTextWithOrigin('Clí')).toEqual({
            text: 'cli',
            origin: [0, 1, 2],
        })
        // A dotted capital I folds to a plain i; the origin map still has one
        // entry per folded character.
        expect(foldTextWithOrigin('İx')).toEqual({
            text: 'ix',
            origin: [0, 1],
        })
    })

    it('maps every folded character of a decomposing one to its origin', () => {
        // A Hangul syllable decomposes to three jamo and no mark.
        expect(foldTextWithOrigin('a한b')).toEqual({
            text: 'a\u1112\u1161\u11abb',
            origin: [0, 1, 1, 1, 2],
        })
    })
})

describe('findMatch', () => {
    it('finds a plain term as a range in the original text, ignoring case and accents', () => {
        expect(findMatch('Hospital Clínico', 'clin')).toEqual({
            start: 9,
            end: 13,
        })
        expect(findMatch('Hospital Clínico', 'CLÍN')).toEqual({
            start: 9,
            end: 13,
        })
    })

    it('keeps the range right after a character that folds to another length', () => {
        expect(findMatch('İstanbul Clinic', 'clinic')).toEqual({
            start: 9,
            end: 15,
        })
        expect(findMatch('한 Clinic', 'clinic')).toEqual({ start: 2, end: 8 })
    })

    it('returns all for a quoted or wildcard term that matches, undefined otherwise', () => {
        expect(findMatch('Rio de Janeiro', '"Rio de Janeiro"')).toBe('all')
        expect(findMatch('Rio de Janeiro', 'rio*')).toBe('all')
        expect(findMatch('Rio de Janeiro', '"Rio"')).toBeUndefined()
    })

    it('returns undefined for a blank term or a miss', () => {
        expect(findMatch('Rio', '  ')).toBeUndefined()
        expect(findMatch('Rio', 'xyz')).toBeUndefined()
    })
})
