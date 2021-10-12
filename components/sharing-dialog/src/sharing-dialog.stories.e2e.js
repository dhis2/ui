import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { SharingDialog } from './sharing-dialog.js'

export default {
    title: 'Sharing Dialog',
    component: SharingDialog,
}

const data = {
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
    'sharing/search': {
        userGroups: [
            {
                id: 'wl5cDMuUhmF',
                name: 'Administrators',
                displayName: 'Administrators',
            },
            {
                id: 'lFHP5lLkzVr',
                name: 'System administrators',
                displayName: 'System administrators',
            },
            {
                id: 'zz6XckBrLlj',
                name: '_DATASET_System administrator (ALL)',
                displayName: '_DATASET_System administrator (ALL)',
            },
            {
                id: 'vRoAruMnNpB',
                name: '_PROGRAM_MNCH / PNC (Adult Woman) program',
                displayName: '_PROGRAM_MNCH / PNC (Adult Woman) program',
            },
            {
                id: 'pBnkuih0c1K',
                name: '_PROGRAM_System administrator (ALL)',
                displayName: '_PROGRAM_System administrator (ALL)',
            },
        ],
        users: [
            {
                id: 'xE7jOejl9FI',
                name: 'John Traore',
                displayName: 'John Traore',
            },
        ],
    },
}

export const AllUsers = () => (
    <CustomDataProvider data={data}>
        <SharingDialog type="visualization" id="sharing-test" />
    </CustomDataProvider>
)
