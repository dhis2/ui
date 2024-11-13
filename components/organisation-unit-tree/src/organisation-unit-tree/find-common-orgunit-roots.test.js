import { findCommonOrgUnitRoots } from './find-common-orgunit-roots.js'

const unitToPath = {
    sierra: '/ImspTQPwCqd',
    tanzania: '/N5hLlID8ihI',
    ethiopia: '/LK1v9z1Jt3k',
    'sierra/bo': '/ImspTQPwCqd/O6uvpzGd5pu',
    'sierra/bo/bargbe': '/ImspTQPwCqd/O6uvpzGd5pu/dGheVylzol6',
    'sierra/bo/bargbe/barlie':
        '/ImspTQPwCqd/O6uvpzGd5pu/dGheVylzol6/y5hLlID8ihI',
    'sierra/bargbe/barlie': '/ImspTQPwCqd/dGheVylzol6/y5hLlID8ihI',
    'sierra/bargbe/barlie/ngalu':
        '/ImspTQPwCqd/dGheVylzol6/y5hLlID8ihI/Aj5v9z1Jt3k',
    'sierra/bo/baoma': '/ImspTQPwCqd/O6uvpzGd5pu/vWbkYPRmKyS',
    'sierra/bo/baoma/faabu': '/ImspTQPwCqd/O6uvpzGd5pu/vWbkYPRmKyS/ZpE2POxvl9P',
    'sierra/bo/badjia': '/ImspTQPwCqd/O6uvpzGd5pu/YuQRtpLP10I',
    'sierra/bo/badjia/ngelehun':
        '/ImspTQPwCqd/O6uvpzGd5pu/YuQRtpLP10I/DiszpKrYNg8',
    'sierra/bombali': '/ImspTQPwCqd/fdc6uOvgoji',
}

describe('findCommonOrgUnitRoots', () => {
    it('should return a single root unit when there is only one unit', () => {
        const units = [{ id: '1', path: unitToPath.sierra, level: 1 }]
        const result = findCommonOrgUnitRoots(units, ['1'])
        expect(result).toEqual([{ id: '1', path: unitToPath.sierra, level: 1 }])
        // should not mutate the input
        expect(units).toStrictEqual(units)
    })

    it('should return two root units when there are two sibling units', () => {
        const units = [
            { id: '1', path: unitToPath['sierra/bo'], level: 2 },
            { id: '2', path: unitToPath['sierra/bombali'], level: 2 },
        ]

        const result = findCommonOrgUnitRoots(units, ['1', '2'])
        expect(result).toEqual([
            { id: '1', path: unitToPath['sierra/bo'], level: 2 },
            { id: '2', path: unitToPath['sierra/bombali'], level: 2 },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should return only the root unit when one unit is a child of another', () => {
        const units = [
            { id: '1', path: unitToPath['sierra'], level: 1 },
            { id: '2', path: unitToPath['sierra/bo'], level: 2 },
        ]
        const result = findCommonOrgUnitRoots(units, ['1', '2'])
        expect(result).toEqual([
            { id: '1', path: unitToPath['sierra'], level: 1 },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should return only the root unit when one unit is a deep child of another', () => {
        const units = [
            { id: '1', path: unitToPath['sierra'], level: 1 },
            {
                id: '2',
                path: unitToPath['sierra/bo/badjia/ngelehun'],
                level: 4,
            },
        ]
        const result = findCommonOrgUnitRoots(units, ['1', '2'])
        expect(result).toEqual([
            { id: '1', path: unitToPath['sierra'], level: 1 },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should return multiple root units when paths do not overlap', () => {
        const units = [
            { id: '1', path: unitToPath['sierra'], level: 1 },
            { id: '2', path: unitToPath['tanzania'], level: 1 },
            { id: '3', path: unitToPath['ethiopia'], level: 1 },
        ]
        const result = findCommonOrgUnitRoots(units, ['1', '2', '3'])
        expect(result).toEqual([
            { id: '1', path: unitToPath['sierra'], level: 1 },
            { id: '2', path: unitToPath['tanzania'], level: 1 },
            { id: '3', path: unitToPath['ethiopia'], level: 1 },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should filter org units where is in not part of the roots ids', () => {
        const units = [
            { id: '1', path: unitToPath['sierra'], level: 1 },
            { id: '2', path: unitToPath['tanzania'], level: 1 },
            { id: '3', path: unitToPath['ethiopia'], level: 1 },
        ]
        const result = findCommonOrgUnitRoots(units, ['1', '3'])
        expect(result).toEqual([
            { id: '1', path: unitToPath['sierra'], level: 1 },
            { id: '3', path: unitToPath['ethiopia'], level: 1 },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should return the correct root units when there is a mix of roots and children', () => {
        const units = [
            {
                id: '1',
                path: unitToPath['sierra/bo/badjia/ngelehun'],
                level: 4,
            },
            { id: '2', path: unitToPath['sierra/bo/baoma/faabu'], level: 4 },
            { id: '3', path: unitToPath['sierra/bo/baoma'], level: 3 },
            { id: '4', path: unitToPath['sierra/bo/bargbe'], level: 3 },
        ]
        const result = findCommonOrgUnitRoots(units, ['1', '2', '3', '4'])
        expect(result).toEqual([
            { id: '3', path: unitToPath['sierra/bo/baoma'], level: 3 },
            { id: '4', path: unitToPath['sierra/bo/bargbe'], level: 3 },
            {
                id: '1',
                path: unitToPath['sierra/bo/badjia/ngelehun'],
                level: 4,
            },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should return the root units when multiple nested children exist', () => {
        const units = [
            { id: '1', path: unitToPath['sierra/bo'], level: 2 },
            { id: '2', path: unitToPath['sierra/bo/badjia'], level: 3 },
            { id: '3', path: unitToPath['sierra/bo/baoma'], level: 3 },
            { id: '4', path: unitToPath['sierra/bargbe/barlie'], level: 3 },
            {
                id: '5',
                path: unitToPath['sierra/bargbe/barlie/ngalu'],
                level: 4,
            },
        ]
        const result = findCommonOrgUnitRoots(units, ['1', '2', '3', '4', '5'])
        expect(result).toEqual([
            { id: '1', path: unitToPath['sierra/bo'], level: 2 },
            { id: '4', path: unitToPath['sierra/bargbe/barlie'], level: 3 },
        ])
        expect(units).toStrictEqual(units)
    })

    it('should handle empty input and return an empty array', () => {
        const units = []
        const result = findCommonOrgUnitRoots(units)
        expect(result).toEqual([])
        expect(units).toStrictEqual(units)
    })
})
