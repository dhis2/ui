import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { SharingDialog } from './sharing-dialog.js'

export default {
    title: 'Sharing Dialog',
    component: SharingDialog,
}

// const data = {
//     sharing: {
//         meta: {
//             allowExternalAccess: true,
//             allowPublicAccess: true,
//         },
//         object: {
//             id: 'sharing-test',
//             name: '',
//             displayName: '',
//             externalAccess: false,
//             publicAccess: '--------',
//             userAccesses: [
//                 {
//                     id: 'user-1',
//                     name: 'A user',
//                     access: '--------',
//                 },
//             ],
//             userGroupAccesses: [
//                 {
//                     id: 'group-1',
//                     name: 'A group',
//                     access: '--------',
//                 },
//             ],
//         },
//     },
//     'sharing/search': {
//         userGroups: [
//             {
//                 id: 'wl5cDMuUhmF',
//                 name: 'Administrators',
//                 displayName: 'Administrators',
//             },
//             {
//                 id: 'lFHP5lLkzVr',
//                 name: 'System administrators',
//                 displayName: 'System administrators',
//             },
//             {
//                 id: 'zz6XckBrLlj',
//                 name: '_DATASET_System administrator (ALL)',
//                 displayName: '_DATASET_System administrator (ALL)',
//             },
//             {
//                 id: 'vRoAruMnNpB',
//                 name: '_PROGRAM_MNCH / PNC (Adult Woman) program',
//                 displayName: '_PROGRAM_MNCH / PNC (Adult Woman) program',
//             },
//             {
//                 id: 'pBnkuih0c1K',
//                 name: '_PROGRAM_System administrator (ALL)',
//                 displayName: '_PROGRAM_System administrator (ALL)',
//             },
//         ],
//         users: [
//             {
//                 id: 'xE7jOejl9FI',
//                 name: 'John Traore',
//                 displayName: 'John Traore',
//             },
//         ],
//     },
// }

const allUsersNoAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: true,
            allowPublicAccess: true,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [],
        },
    },
}

export const AllUsersNoAccess = () => (
    <CustomDataProvider data={allUsersNoAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const userViewAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [
                {
                    id: 'user-1',
                    name: 'A user',
                    access: 'r-------',
                },
            ],
            userGroupAccesses: [],
        },
    },
}

export const userViewAccess = () => (
    <CustomDataProvider data={userViewAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)

const groupViewAccessData = {
    sharing: {
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
        object: {
            id: 'sharing-test',
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [
                {
                    id: 'group-1',
                    name: 'A group',
                    access: 'r-------',
                },
            ],
        },
    },
}

export const groupViewAccess = () => (
    <CustomDataProvider data={groupViewAccessData}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)
