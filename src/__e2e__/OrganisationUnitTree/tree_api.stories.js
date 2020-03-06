import React from 'react'
import { storiesOf } from '@storybook/react'
import { OrganisationUnitTree } from '../../index'
import { CustomDataProvider } from '@dhis2/app-runtime'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common'

window.dataProviderData = {
    'organisationUnits/A0000000000': {
        ...dataProviderData['organisationUnits/A0000000000'],
        children: [
            dataProviderData['organisationUnits/A0000000000'].children[0],
        ],
    },
    'organisationUnits/A0000000001': {
        ...dataProviderData['organisationUnits/A0000000000'],
        children: [],
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
