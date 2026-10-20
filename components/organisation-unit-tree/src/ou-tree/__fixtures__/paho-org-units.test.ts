import { pahoOrgUnits } from './paho-org-units'

describe('pahoOrgUnits', () => {
    it('loads the derived PAHO fixture', () => {
        expect(pahoOrgUnits.orgUnits).toHaveLength(19191)
        expect(pahoOrgUnits.groups).toHaveLength(10)
    })

    it('has two roots and four levels', () => {
        const roots = pahoOrgUnits.orgUnits.filter(
            (unit) => unit.parentId === undefined
        )
        const levels = new Set(pahoOrgUnits.orgUnits.map((unit) => unit.level))

        expect(roots.map((unit) => unit.name).sort()).toEqual(['AMR', 'CAR'])
        expect([...levels].sort()).toEqual([1, 2, 3, 4])
    })

    it('carries no fields beyond the fixture shape', () => {
        const keys = new Set<string>()
        for (const unit of pahoOrgUnits.orgUnits) {
            for (const key of Object.keys(unit)) {
                keys.add(key)
            }
        }

        expect([...keys].sort()).toEqual([
            'id',
            'level',
            'name',
            'openingDate',
            'parentId',
            'path',
            'shortName',
            'translations',
        ])
    })
})
