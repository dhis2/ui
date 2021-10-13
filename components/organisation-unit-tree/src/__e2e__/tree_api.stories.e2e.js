import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

window.dataProviderData = {
    organisationUnits: (...args) => {
        const [, { id }] = args

        if (id === 'A0000000000') {
            return dataProviderData.organisationUnits(...args).then(data => ({
                ...data,
                children: data.children.slice(0, 1),
            }))
        }

        if (id === 'A0000000001') {
            return dataProviderData.organisationUnits(...args).then(data => ({
                ...data,
                path: '/A0000000001',
                children: [],
            }))
        }

        return Promise.resolve({})
    },
}

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onCollapse = window.Cypress && window.Cypress.cy.stub()
window.onExpand = window.Cypress && window.Cypress.cy.stub()
window.onChildrenLoaded = window.Cypress && window.Cypress.cy.stub()

storiesOf(namespace, module).add('Events', () => (
    <CustomDataProvider data={window.dataProviderData}>
        <StatefulMultiSelectionWrapper>
            {({ selected, onChange }) => (
                <OrganisationUnitTree
                    roots="A0000000000"
                    selected={selected}
                    onChange={(...args) => {
                        onChange(...args)
                        window.onChange(...args)
                    }}
                    onExpand={window.onExpand}
                    onCollapse={window.onCollapse}
                    onChildrenLoaded={window.onChildrenLoaded}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
))
