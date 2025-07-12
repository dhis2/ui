import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
} from '../../constants.js'
import {
    convertAccessToConstantObject,
    convertConstantObjectToAccess,
    isRemovableTarget,
    isMetadataWriteAccessRemoved,
} from '../helpers.js'

describe('helpers', () => {
    describe('convertAccessToConstantObject', () => {
        it('disallows access if the access string is undefined', () => {
            const NO_ACCESS_OBJECT = {
                data: ACCESS_NONE,
                metadata: ACCESS_NONE,
            }
            expect(convertAccessToConstantObject()).toEqual(NO_ACCESS_OBJECT)
        })

        it('disallows access if the access string is invalid', () => {
            const NO_ACCESS_OBJECT = {
                data: ACCESS_NONE,
                metadata: ACCESS_NONE,
            }
            expect(
                convertAccessToConstantObject('invalid-access-string')
            ).toEqual(NO_ACCESS_OBJECT)
        })

        const cases = [
            ['--------', { data: ACCESS_NONE, metadata: ACCESS_NONE }],
            ['r-------', { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY }],
            [
                'r-r-----',
                { data: ACCESS_VIEW_ONLY, metadata: ACCESS_VIEW_ONLY },
            ],
            ['rw------', { data: ACCESS_NONE, metadata: ACCESS_VIEW_AND_EDIT }],
            [
                'rwrw----',
                { data: ACCESS_VIEW_AND_EDIT, metadata: ACCESS_VIEW_AND_EDIT },
            ],
        ]

        it.each(cases)(
            'parses the metadata portion of the access string correctly for %s',
            (accessString, accessConstant) => {
                expect(convertAccessToConstantObject(accessString)).toEqual(
                    accessConstant
                )
            }
        )
    })

    describe('convertConstantObjectToAccess', () => {
        it('returns the default access string if the access constant is not recognised', () => {
            const expected = '--------'
            expect(
                convertConstantObjectToAccess({
                    data: 'NOT_RECOGNISED',
                    metadata: 'NOT_RECOGNISED',
                })
            ).toEqual(expected)
        })

        const cases = [
            [{ data: ACCESS_NONE, metadata: ACCESS_NONE }, '--------'],
            [{ data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY }, 'r-------'],
            [{ data: ACCESS_NONE, metadata: ACCESS_VIEW_AND_EDIT }, 'rw------'],
            [{ data: ACCESS_VIEW_ONLY, metadata: ACCESS_NONE }, '--r-----'],
            [
                { data: ACCESS_VIEW_AND_EDIT, metadata: ACCESS_VIEW_AND_EDIT },
                'rwrw----',
            ],
        ]

        it.each(cases)(
            'returns the correct metadata access string for %s',
            (accessConstant, accessString) => {
                expect(convertConstantObjectToAccess(accessConstant)).toEqual(
                    accessString
                )
            }
        )
    })

    describe('isRemovableTarget', () => {
        it('returns false for targets that should not be removable', () => {
            expect(isRemovableTarget(SHARE_TARGET_EXTERNAL)).toBe(false)
            expect(isRemovableTarget(SHARE_TARGET_PUBLIC)).toBe(false)
        })

        it('returns true for all other targets', () => {
            expect(isRemovableTarget('Does not exist')).toBe(true)
        })
    })

    describe('isMetadataWriteAccessRemoved', () => {
        const cases = [
            [
                false,
                'user has ALL authority',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: ['ALL'],
                    },
                    type: 'group',
                    access: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                true,
                'user tries to remove their only access via user group',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'group',
                    access: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                false,
                'user updates only data access their only access via user group',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'group',
                    access: {
                        data: ACCESS_NONE,
                        metadata: ACCESS_VIEW_AND_EDIT,
                    },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                false,
                'user update groups access but still has access via their user',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'group',
                    access: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [
                        {
                            id: 'currentUSER',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                false,
                'user update groups access but still has access via public access',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'group',
                    access: {
                        data: ACCESS_NONE,
                        metadata: ACCESS_VIEW_AND_EDIT,
                    },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                true,
                'user update groups access to give only view access',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'group',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                false,
                'user update groups access to give only view access but hass access from another gropu',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [
                            { id: 'userGroup01' },
                            { id: 'userGroup02' },
                        ],
                        authorities: [],
                    },
                    type: 'group',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    id: 'userGroup01',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                        {
                            id: 'userGroup02',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                false,
                'user update user access but has access via group',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'user',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    id: 'currentUSER',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [
                        {
                            id: 'currentUSER',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                true,
                'user update user access and has no other access',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [],
                        authorities: [],
                    },
                    type: 'user',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    id: 'currentUSER',
                    publicAccess: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                    users: [
                        {
                            id: 'currentUSER',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                    groups: [],
                },
            ],
            [
                false,
                'user update public access and access through user',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [],
                        authorities: [],
                    },
                    type: 'public',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    publicAccess: {
                        data: ACCESS_NONE,
                        metadata: ACCESS_VIEW_AND_EDIT,
                    },
                    users: [
                        {
                            id: 'currentUSER',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                    groups: [],
                },
            ],
            [
                false,
                'user update public access and access through user group',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [{ id: 'userGroup01' }],
                        authorities: [],
                    },
                    type: 'public',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    publicAccess: {
                        data: ACCESS_NONE,
                        metadata: ACCESS_VIEW_AND_EDIT,
                    },
                    users: [],
                    groups: [
                        {
                            id: 'userGroup01',
                            access: {
                                data: ACCESS_VIEW_AND_EDIT,
                                metadata: ACCESS_VIEW_AND_EDIT,
                            },
                        },
                    ],
                },
            ],
            [
                true,
                'user update public access and has no other access',
                {
                    currentUser: {
                        id: 'currentUSER',
                        userGroups: [],
                        authorities: [],
                    },
                    type: 'public',
                    access: { data: ACCESS_NONE, metadata: ACCESS_VIEW_ONLY },
                    publicAccess: {
                        data: ACCESS_NONE,
                        metadata: ACCESS_VIEW_AND_EDIT,
                    },
                    users: [],
                    groups: [],
                },
            ],
        ]
        it.each(cases)('returns %s when %s', (result, _, metadata) => {
            expect(isMetadataWriteAccessRemoved(metadata)).toEqual(result)
        })
    })
})
