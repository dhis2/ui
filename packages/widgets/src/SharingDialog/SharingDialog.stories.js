import React from 'react'
import { storiesOf } from '@storybook/react'
import { CustomDataProvider } from '@dhis2/app-runtime'

import { SharingDialog } from '../index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

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

storiesOf('Component/Connected/SharingDialog', module)
    .add('Simple', () => (
        <CustomDataProvider data={customDefaultData}>
            <SharingDialog type="dashboard" id="sharing-test" />
        </CustomDataProvider>
    ))
    .add('With name', () => (
        <CustomDataProvider data={customData}>
            <SharingDialog type="dashboard" id="sharing-test" />
        </CustomDataProvider>
    ))
    .add('With disabled access', () => (
        <CustomDataProvider data={customDataDisabledAccess}>
            <SharingDialog type="dashboard" id="sharing-test" />
        </CustomDataProvider>
    ))
    .add('With user and group accesses', () => (
        <CustomDataProvider data={customDataWithUserGroupAccesses}>
            <SharingDialog type="dashboard" id="sharing-test" />
        </CustomDataProvider>
    ))
