import type { FixtureOrgUnit } from './in-memory-tree-endpoint'

const unit = (id: string, name: string, path: string): FixtureOrgUnit => {
    const segments = path.split('/').filter(Boolean)
    const parentId = segments[segments.length - 2]
    return {
        id,
        name,
        shortName: name,
        path,
        level: segments.length,
        ...(parentId === undefined ? {} : { parentId }),
    }
}

/**
 * The reference tree from the worked examples in DHIS2-21263. Ids, names and
 * nesting match the ticket, so tests can assert its expected pages as given.
 */
export const zambiaOrgUnits: FixtureOrgUnit[] = [
    unit('ou-1', 'Zambia', '/ou-1'),
    unit('ou-2', 'Central Province', '/ou-1/ou-2'),
    unit('ou-3', 'Kabwe District', '/ou-1/ou-2/ou-3'),
    unit('ou-4', 'Kabwe Health Centre', '/ou-1/ou-2/ou-3/ou-4'),
    unit('ou-5', 'Chisembe Clinic', '/ou-1/ou-2/ou-3/ou-5'),
    unit('ou-6', 'Serenje District', '/ou-1/ou-2/ou-6'),
    unit('ou-7', 'Serenje Hospital', '/ou-1/ou-2/ou-6/ou-7'),
    unit('ou-8', 'Kanona Clinic', '/ou-1/ou-2/ou-6/ou-8'),
    unit('ou-9', 'Mulobezi Mission', '/ou-1/ou-2/ou-6/ou-9'),
    unit('ou-10', 'Chikupi Mission', '/ou-1/ou-2/ou-6/ou-10'),
    unit('ou-11', 'Tuta Mission', '/ou-1/ou-2/ou-6/ou-11'),
    unit('ou-12', 'Balamba Mission', '/ou-1/ou-2/ou-6/ou-12'),
    unit('ou-13', 'Lusaka Province', '/ou-1/ou-13'),
    unit('ou-14', 'Kafue District', '/ou-1/ou-13/ou-14'),
    unit('ou-15', 'Kafue Clinic', '/ou-1/ou-13/ou-14/ou-15'),
    unit('ou-16', 'Kafue Hospital', '/ou-1/ou-13/ou-14/ou-16'),
    unit('ou-17', 'Lusaka District', '/ou-1/ou-13/ou-17'),
    unit('ou-18', 'Chelstone Clinic', '/ou-1/ou-13/ou-17/ou-18'),
    unit('ou-19', 'Kabwata Health Post', '/ou-1/ou-13/ou-17/ou-19'),
]
