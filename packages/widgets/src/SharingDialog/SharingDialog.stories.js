import React from 'react'
import { storiesOf } from '@storybook/react'
import { CustomDataProvider } from '@dhis2/app-runtime'

import { SharingDialog } from '../index.js'

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onFocus = window.Cypress && window.Cypress.cy.stub()
window.onBlur = window.Cypress && window.Cypress.cy.stub()

const customData = {
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

storiesOf('Component/Connected/SharingDialog', module)
    .add('Simple', () => (
        <CustomDataProvider data={customData}>
            <SharingDialog />
        </CustomDataProvider>
    ))
    .add('With name', () => (
        <CustomDataProvider data={customData}>
            <SharingDialog name="Malaria cases" />
        </CustomDataProvider>
    ))
