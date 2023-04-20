import { createOrganisationUnitTreeManager } from './create-organisation-unit-tree-manager.js'
import {
    mockDataEngineForRootIds,
    pluckDisplayName,
} from './helpers/test-utils.js'
import { OrganisationUnitNodeManager } from './organisation-unit-node-manager.js'

describe('createOrganisationUnitManager', () => {
    describe.each([
        {
            testDescription: 'root is real root',
            rootIds: ['ImspTQPwCqd'],
            subUnitId: 'PMa2VCrupOd',
            expected: {
                root: {
                    count: 1,
                    displayNames: ['Sierra Leone'],
                    descendants: [
                        [
                            'Bo',
                            'Bombali',
                            'Bonthe',
                            'Kailahun',
                            'Kambia',
                            'Kenema',
                            'Koinadugu',
                            'Kono',
                            'Moyamba',
                            'Port Loko',
                            'Pujehun',
                            'Tonkolili',
                            'Western Area',
                            'Badjia',
                            'Baoma',
                            'Bargbe',
                            'Bargbo',
                            'Bumpe Ngao',
                            'Gbo',
                            'Jaiama Bongor',
                            'Kakua',
                            'Komboya',
                            'Lugbu',
                            'Niawa Lenga',
                            'Selenga',
                            'Tikonko',
                            'Valunia',
                            'Wonde',
                            'Biriwa',
                            'Bombali Sebora',
                            'Gbanti Kamaranka',
                            'Gbendembu Ngowahun',
                            'Libeisaygahun',
                            'Magbaimba Ndowahun',
                            'Makari Gbanti',
                            'Paki Masabong',
                            'Safroko Limba',
                            'Sanda Loko',
                            'Sanda Tendaren',
                            'Sella Limba',
                            'Tambaka',
                            'Bendu Cha',
                            'BMC',
                            'Bum',
                            'Dema',
                            'Imperi',
                            'Jong',
                            'Kpanda Kemoh',
                            'Kwamabai Krim',
                            'Nongoba Bullum',
                            'Sittia',
                            'Sogbini',
                            'Yawbeko',
                            'Dea',
                            'Jawi',
                            'Kissi Kama',
                            'Kissi Teng',
                            'Kissi Tongi',
                            'Luawa',
                            'Malema',
                            'Mandu',
                            'Njaluahun',
                            'Peje Bongre',
                            'Peje West',
                            'Penguia',
                            'Upper Bambara',
                            'Yawei',
                            'Bramaia',
                            'Gbinleh Dixion',
                            'Magbema',
                            'Mambolo',
                            'Masungbala',
                            'Samu',
                            'Tonko Limba',
                            'Dama',
                            'Dodo',
                            'Gaura',
                            'Gorama Mende',
                            'Kandu Lepiema',
                            'Koya (kenema)',
                            'Langrama',
                            'Lower Bambara',
                            'Malegohun',
                            'Niawa',
                            'Nomo',
                            'Nongowa',
                            'Simbaru',
                            'Small Bo',
                            'Tunkia',
                            'Wandor',
                            'Dembelia Sinkunia',
                            'Diang',
                            'Folosaba Dembelia',
                            'Kasonko',
                            'Mongo',
                            'Neya',
                            'Nieni',
                            'Sengbeh',
                            'Sulima (Koinadugu)',
                            'Wara Wara Bafodia',
                            'Wara Wara Yagala',
                            'Fiama',
                            'Gbane',
                            'Gbane Kandor',
                            'Gbense',
                            'Gorama Kono',
                            'Kamara',
                            'Lei',
                            'Mafindor',
                            'Nimikoro',
                            'Nimiyama',
                            'Sandor',
                            'Soa',
                            'Tankoro',
                            'Toli',
                            'Bagruwa',
                            'Bumpeh',
                            'Dasse',
                            'Fakunya',
                            'Kaiyamba',
                            'Kamaje',
                            'Kargboro',
                            'Kongbora',
                            'Kori',
                            'Kowa',
                            'Lower Banta',
                            'Ribbi',
                            'Timidale',
                            'Upper Banta',
                            'Bureh Kasseh Maconteh',
                            'Buya Romende',
                            'Dibia',
                            'Kaffu Bullom',
                            'Koya',
                            'Lokomasama',
                            'Maforki',
                            'Marampa',
                            'Masimera',
                            'Sanda Magbolonthor',
                            'Tainkatopa Makama Safrokoh',
                            'Barri',
                            'Galliness Perri',
                            'Kpaka',
                            'Kpanga Kabonde',
                            'Kpanga Krim',
                            'Makpele',
                            'Malen',
                            'Mano Sakrim',
                            'Pejeh',
                            'Soro-Gbeima',
                            'Sowa',
                            'Ya Kpukumu Krim',
                            'Gbonkonlenken',
                            'Kafe Simira',
                            'Kalansogoia',
                            'Kholifa Mabang',
                            'Kholifa Rowalla',
                            'Kunike',
                            'Kunike Barina',
                            'Malal Mara',
                            'Sambaia Bendugu',
                            'Tane',
                            'Yoni',
                            'Freetown',
                            'Rural Western Area',
                        ],
                    ],
                },
                subUnit: {
                    displayName: 'Kambia',
                    ancestors: ['Sierra Leone'],
                    parentDisplayName: 'Sierra Leone',
                    children: [
                        'Bramaia',
                        'Gbinleh Dixion',
                        'Magbema',
                        'Mambolo',
                        'Masungbala',
                        'Samu',
                        'Tonko Limba',
                    ],
                    siblings: [
                        'Bo',
                        'Bombali',
                        'Bonthe',
                        'Kailahun',
                        'Kenema',
                        'Koinadugu',
                        'Kono',
                        'Moyamba',
                        'Port Loko',
                        'Pujehun',
                        'Tonkolili',
                        'Western Area',
                    ],
                    descendants: [
                        'Bramaia',
                        'Gbinleh Dixion',
                        'Magbema',
                        'Mambolo',
                        'Masungbala',
                        'Samu',
                        'Tonko Limba',
                    ],
                },
            },
        },
        {
            testDescription: 'multiple roots at level 2',
            rootIds: ['O6uvpzGd5pu', 'lc3eMKXaEfw'],
            subUnitId: 'XEyIRFd9pct',
            expected: {
                root: {
                    count: 2,
                    displayNames: ['Bo', 'Bonthe'],
                    descendants: [
                        [
                            'Badjia',
                            'Baoma',
                            'Bargbe',
                            'Bargbo',
                            'Bumpe Ngao',
                            'Gbo',
                            'Jaiama Bongor',
                            'Kakua',
                            'Komboya',
                            'Lugbu',
                            'Niawa Lenga',
                            'Selenga',
                            'Tikonko',
                            'Valunia',
                            'Wonde',
                        ],
                        [
                            'Bendu Cha',
                            'BMC',
                            'Bum',
                            'Dema',
                            'Imperi',
                            'Jong',
                            'Kpanda Kemoh',
                            'Kwamabai Krim',
                            'Nongoba Bullum',
                            'Sittia',
                            'Sogbini',
                            'Yawbeko',
                        ],
                    ],
                },
                subUnit: {
                    displayName: 'Imperi',
                    ancestors: ['Bonthe'],
                    parentDisplayName: 'Bonthe',
                    children: [],
                    siblings: [
                        'Bendu Cha',
                        'BMC',
                        'Bum',
                        'Dema',
                        'Jong',
                        'Kpanda Kemoh',
                        'Kwamabai Krim',
                        'Nongoba Bullum',
                        'Sittia',
                        'Sogbini',
                        'Yawbeko',
                    ],
                    descendants: [],
                },
            },
        },
        {
            testDescription: 'non-nested roots at level 2 and 3',
            rootIds: ['O6uvpzGd5pu', 'fwH9ipvXde9'],
            subUnitId: 'BGGmAwx33dj',
            expected: {
                root: {
                    count: 2,
                    displayNames: ['Bo', 'Biriwa'],
                    descendants: [
                        [
                            'Badjia',
                            'Baoma',
                            'Bargbe',
                            'Bargbo',
                            'Bumpe Ngao',
                            'Gbo',
                            'Jaiama Bongor',
                            'Kakua',
                            'Komboya',
                            'Lugbu',
                            'Niawa Lenga',
                            'Selenga',
                            'Tikonko',
                            'Valunia',
                            'Wonde',
                        ],
                        [],
                    ],
                },
                subUnit: {
                    displayName: 'Bumpe Ngao',
                    ancestors: ['Bo'],
                    parentDisplayName: 'Bo',
                    children: [],
                    siblings: [
                        'Badjia',
                        'Baoma',
                        'Bargbe',
                        'Bargbo',
                        'Gbo',
                        'Jaiama Bongor',
                        'Kakua',
                        'Komboya',
                        'Lugbu',
                        'Niawa Lenga',
                        'Selenga',
                        'Tikonko',
                        'Valunia',
                        'Wonde',
                    ],
                    descendants: [],
                },
            },
        },
        {
            testDescription: 'nested roots at level 2 and 3',
            rootIds: ['O6uvpzGd5pu', 'YuQRtpLP10I'],
            subUnitId: 'YmmeuGbqOwR',
            expected: {
                root: {
                    count: 1,
                    displayNames: ['Bo', 'Badjia'],
                    descendants: [
                        [
                            'Badjia',
                            'Baoma',
                            'Bargbe',
                            'Bargbo',
                            'Bumpe Ngao',
                            'Gbo',
                            'Jaiama Bongor',
                            'Kakua',
                            'Komboya',
                            'Lugbu',
                            'Niawa Lenga',
                            'Selenga',
                            'Tikonko',
                            'Valunia',
                            'Wonde',
                        ],
                        [],
                    ],
                },
                subUnit: {
                    displayName: 'Gbo',
                    ancestors: ['Bo'],
                    parentDisplayName: 'Bo',
                    children: [],
                    siblings: [
                        'Badjia',
                        'Baoma',
                        'Bargbe',
                        'Bargbo',
                        'Bumpe Ngao',
                        'Jaiama Bongor',
                        'Kakua',
                        'Komboya',
                        'Lugbu',
                        'Niawa Lenga',
                        'Selenga',
                        'Tikonko',
                        'Valunia',
                        'Wonde',
                    ],
                    descendants: [],
                },
            },
        },
    ])('$testDescription', ({ rootIds, subUnitId, expected }) => {
        const mockedDataEngine = mockDataEngineForRootIds(rootIds)
        const manager = createOrganisationUnitTreeManager({
            dataEngine: mockedDataEngine,
        })
        manager.init({ rootIds })

        describe('root nodes', () => {
            it('has the correct number of root nodes', () => {
                expect(manager.getRootNodes().size).toBe(expected.root.count)
            })

            it('each root node has the correct type, name and descendants', () => {
                Array.from(manager.getRootNodes().values()).forEach(
                    (rootNode, index) => {
                        expect(rootNode).toBeInstanceOf(
                            OrganisationUnitNodeManager
                        )
                        expect(rootNode.getDisplayName()).toBe(
                            expected.root.displayNames[index]
                        )
                        expect(
                            rootNode.getDescendants().map(pluckDisplayName)
                        ).toEqual(expected.root.descendants[index])
                    }
                )
            })
        })

        describe('a nested organisation unit', () => {
            it('is an instance of `OrganisationUnitNode`', () => {
                expect(
                    manager.getOrganisationUnitNodeById(subUnitId)
                ).toBeInstanceOf(OrganisationUnitNodeManager)
            })
            it('has the correct displayName', () => {
                expect(
                    manager
                        .getOrganisationUnitNodeById(subUnitId)
                        .getDisplayName()
                ).toBe(expected.subUnit.displayName)
            })
            it('has the correct ancestors', () => {
                expect(
                    manager
                        .getOrganisationUnitNodeById(subUnitId)
                        .getAncestors()
                        .map(pluckDisplayName)
                ).toEqual(expected.subUnit.ancestors)
            })
            it('has the correct parent', () => {
                expect(
                    manager
                        .getOrganisationUnitNodeById(subUnitId)
                        .getParent()
                        ?.getDisplayName()
                ).toBe(expected.subUnit.parentDisplayName)
            })
            it('has the correct children', () => {
                expect(
                    manager
                        .getOrganisationUnitNodeById(subUnitId)
                        .getChildren()
                        .map(pluckDisplayName)
                ).toEqual(expected.subUnit.children)
            })
            it('has the correct siblings', () => {
                expect(
                    manager
                        .getOrganisationUnitNodeById(subUnitId)
                        .getSiblings()
                        .map(pluckDisplayName)
                ).toEqual(expected.subUnit.siblings)
            })
            it('has the correct descendants', () => {
                expect(
                    manager
                        .getOrganisationUnitNodeById(subUnitId)
                        .getDescendants()
                        .map(pluckDisplayName)
                ).toEqual(expected.subUnit.descendants)
            })
        })
    })
})
