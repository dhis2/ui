import { createGistResolver, createInMemoryGist } from './in-memory-gist'
import { pahoOrgUnits } from './paho-org-units'
import { zambiaOrgUnits } from './zambia-org-units'

describe('createInMemoryGist', () => {
    it('matches the response recorded from the stable instance for the PAHO roots', () => {
        const gist = createInMemoryGist(pahoOrgUnits)

        expect(gist(['nOsaOsg36TR', 'eFkh5oWtyud'], {})).toEqual([
            {
                id: 'nOsaOsg36TR',
                displayName: 'AMR',
                path: '/nOsaOsg36TR',
                level: 1,
                children: 27,
            },
            {
                id: 'eFkh5oWtyud',
                displayName: 'CAR',
                path: '/eFkh5oWtyud',
                level: 1,
                children: 27,
            },
        ])
    })

    it('returns short names on request and skips unknown ids', () => {
        const gist = createInMemoryGist({
            orgUnits: zambiaOrgUnits.map((unit) =>
                unit.id === 'ou-3' ? { ...unit, shortName: 'Kabwe' } : unit
            ),
        })

        expect(gist(['nope', 'ou-3', 'ou-5'], { shortName: true })).toEqual([
            {
                id: 'ou-3',
                displayName: 'Kabwe',
                path: '/ou-1/ou-2/ou-3',
                level: 3,
                children: 2,
            },
            {
                id: 'ou-5',
                displayName: 'Chisembe Clinic',
                path: '/ou-1/ou-2/ou-3/ou-5',
                level: 4,
                children: 0,
            },
        ])
    })
})

describe('createGistResolver failWith', () => {
    it('rejects with the error it returns', async () => {
        const resolver = createGistResolver({
            ...pahoOrgUnits,
            failWith: () => new Error('Simulated failure'),
        })

        await expect(
            resolver('read', { params: { filter: 'id:in:[nOsaOsg36TR]' } })
        ).rejects.toThrow('Simulated failure')
    })
})
