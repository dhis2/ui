import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { StatefulMultiSelectionWrapper, dataProviderData } from './common.js'

const customizedDataProviderData = {
    organisationUnits: (...args) => {
        const [, { id, params }] = args
        const { fields } = params

        if (id === 'A0000000000') {
            return dataProviderData.organisationUnits(...args).then((data) => ({
                ...data,
                children: fields.includes('children::size')
                    ? 1
                    : data.children?.slice(0, 1),
            }))
        }

        if (id === 'A0000000001') {
            return dataProviderData.organisationUnits(...args).then((data) => ({
                ...data,
                path: '/A0000000001',
                children: fields.includes('children::size') ? 0 : [],
            }))
        }

        return Promise.resolve({})
    },
}

window.onChange = window.Cypress && window.Cypress.cy.stub()
window.onCollapse = window.Cypress && window.Cypress.cy.stub()
window.onExpand = window.Cypress && window.Cypress.cy.stub()
window.onChildrenLoaded = window.Cypress && window.Cypress.cy.stub()

export const Events = () => (
    <CustomDataProvider data={customizedDataProviderData}>
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
)
