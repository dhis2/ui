import { filterItemsArray, processString } from './filter.js'

describe('filter helper functions', () => {
    it('processString function - handles different string inputs', () => {
        expect(processString('ABC')).toBe('ABC')

        // strips away spaces
        expect(processString('a b c')).toBe('abc')

        // remove diacritics from accented characters
        expect(processString('èéêëēėę')).toBe('eeeeeee')

        // punctuation marks are removed
        expect(processString('.?!')).toBe('')
        expect(processString('hello, world!')).toBe('helloworld')
    })

    it('filterItemsArray function - handles search across various inputs', () => {
        const itemsToSearch = [
            { name: 'Médic' },
            { name: 'Medical Records' },
            { name: 'Import/Export App' },
            { name: 'Covid 19' },
            { name: "Facility's Dashboard" },
            { name: '{App}' },
        ]

        expect(filterItemsArray(itemsToSearch, 'e')).toEqual([
            { name: 'Médic' },
            { name: 'Medical Records' },
            { name: 'Import/Export App' },
        ])

        expect(filterItemsArray(itemsToSearch, "'")).toEqual([
            { name: "Facility's Dashboard" },
        ])

        expect(filterItemsArray(itemsToSearch, 'FACILITYSDASHBOARD')).toEqual([
            { name: "Facility's Dashboard" },
        ])

        expect(filterItemsArray(itemsToSearch, '/')).toEqual([
            { name: 'Import/Export App' },
        ])

        expect(filterItemsArray(itemsToSearch, 'Covid19')).toEqual([
            { name: 'Covid 19' },
        ])

        expect(filterItemsArray(itemsToSearch, 'Covid-19')).toEqual([
            { name: 'Covid 19' },
        ])

        expect(filterItemsArray(itemsToSearch, '{')).toEqual([
            { name: '{App}' },
        ])

        expect(filterItemsArray(itemsToSearch, '')).toEqual([
            { name: 'Médic' },
            { name: 'Medical Records' },
            { name: 'Import/Export App' },
            { name: 'Covid 19' },
            { name: "Facility's Dashboard" },
            { name: '{App}' },
        ])

        expect(filterItemsArray(itemsToSearch, ' ')).toEqual([
            { name: 'Medical Records' },
            { name: 'Import/Export App' },
            { name: 'Covid 19' },
            { name: "Facility's Dashboard" },
        ])
    })
})
