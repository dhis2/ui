import { filterItemsArray, processString } from './filter.js'

describe('filter helper functions', () => {
    const itemsToSearch = [
        { name: 'Médic' },
        { name: 'Medical Records' },
        { name: 'Import/Export App' },
        { name: 'Covid 19' },
        { name: "Facility's Dashboard" },
        { name: '{App}' },
    ]
    test('processString function - handles different string inputs', () => {
        expect(processString('ABC')).toBe('ABC')

        // strips away spaces
        expect(processString('a b c')).toBe('abc')

        // remove diacritics from accented characters
        expect(processString('èéêëēėę')).toBe('eeeeeee')

        // punctuation marks are removed
        expect(processString('.?!')).toBe('')
        expect(processString('hello, world!')).toBe('helloworld')
    })

    test.each([
        {
            searchTerm: 'e',
            expected: [
                { name: 'Médic' },
                { name: 'Medical Records' },
                { name: 'Import/Export App' },
            ],
        },
        { searchTerm: "'", expected: [{ name: "Facility's Dashboard" }] },
        {
            searchTerm: 'FACILITYSDASHBOARD',
            expected: [{ name: "Facility's Dashboard" }],
        },
        { searchTerm: '/', expected: [{ name: 'Import/Export App' }] },

        { searchTerm: 'Covid19', expected: [{ name: 'Covid 19' }] },
        { searchTerm: 'Covid-19', expected: [{ name: 'Covid 19' }] },
        { searchTerm: '{', expected: [{ name: '{App}' }] },
        {
            searchTerm: '',
            expected: [
                { name: 'Médic' },
                { name: 'Medical Records' },
                { name: 'Import/Export App' },
                { name: 'Covid 19' },
                { name: "Facility's Dashboard" },
                { name: '{App}' },
            ],
        },

        {
            searchTerm: ' ',
            expected: [
                { name: 'Medical Records' },
                { name: 'Import/Export App' },
                { name: 'Covid 19' },
                { name: "Facility's Dashboard" },
            ],
        },
    ])(
        'filterItemsArray function handles search for $searchTerm',
        ({ searchTerm, expected }) => {
            expect(filterItemsArray(itemsToSearch, searchTerm)).toEqual(
                expected
            )
        }
    )
})
