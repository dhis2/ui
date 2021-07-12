import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { SharingDialog } from './sharing-dialog.js'

const subtitle = 'The common dialog for managing object sharing in DHIS2 apps'

const description = `
The sharing dialog can be used in different apps that use the standard object API, like visualizations, dashboards...

It allows to view and edit the sharing settings for the given object.

\`\`\`js
import { SharingDialog } from '@dhis2/ui'
\`\`\`
`
export default {
    title: 'Utils/Sharing Dialog',
    component: SharingDialog,
    parameters: {
        componentSubtitle: subtitle,
        docs: { description: { component: description } },
    },
    // Default args for stories
    args: {
        type: 'visualization',
        id: 'sharing-test',
    },
}

const customSearchData = {
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

const customDefaultData = {
    sharing: {
        meta: {
            allowExternalAccess: true,
            allowPublicAccess: true,
        },
        object: {
            name: '',
            displayName: '',
            externalAccess: false,
            publicAccess: '--------',
            userAccesses: [],
            userGroupAccesses: [],
        },
    },
    ...customSearchData,
}

const customData = {
    ...customDefaultData,
    sharing: {
        ...customDefaultData.sharing,
        object: {
            ...customDefaultData.sharing.object,
            name: 'Sharing test',
            displayName: 'Sharing test',
        },
    },
}

const customDataDisabledAccess = {
    ...customData,
    sharing: {
        ...customData.sharing,
        meta: {
            allowExternalAccess: false,
            allowPublicAccess: false,
        },
    },
}

const customDataWithUserGroupAccesses = {
    ...customData,
    sharing: {
        ...customData.sharing,
        object: {
            ...customData.sharing.object,
            userAccesses: [
                {
                    id: 'user-1',
                    name: 'Kvist',
                    access: 'rw------',
                },
            ],
            userGroupAccesses: [
                {
                    id: 'group-1',
                    name: 'Trolls',
                    access: 'r-------',
                },
            ],
        },
    },
}

export const Simple = args => (
    <CustomDataProvider data={customDefaultData}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)

export const WithName = args => (
    <CustomDataProvider data={customData}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
WithName.storyName = 'With name'

export const WithDisabledAccess = args => (
    <CustomDataProvider data={customDataDisabledAccess}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
WithDisabledAccess.storyName = 'With disabled access'

export const WithUserAndGroupAccesses = args => (
    <CustomDataProvider data={customDataWithUserGroupAccesses}>
        <SharingDialog {...args} />
    </CustomDataProvider>
)
WithUserAndGroupAccesses.storyName = 'With user and group accesses'
