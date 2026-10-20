import { createSearchMatcher, foldText } from './search-matcher'

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
