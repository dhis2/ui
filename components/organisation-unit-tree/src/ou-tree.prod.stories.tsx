import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import {
    createTreeResolver,
    pahoOrgUnits,
    TREE_RESOURCE,
} from './ou-tree/__fixtures__/index'
import { EndpointExplorer as Explorer } from './ou-tree/__stories__/endpoint-explorer'
import { OuTree } from './ou-tree/index'

const description = `
A replacement for \`OrganisationUnitTree\`, currently a placeholder. It is
not exported from any package yet.

The **Endpoint explorer** story runs queries against an in-memory
implementation of \`GET /api/organisationUnits/tree\` over a fixture of
19,191 PAHO organisation units, and shows the raw response.
`

const resolver = createTreeResolver(pahoOrgUnits)

export default {
    title: 'OuTree',
    component: OuTree,
    decorators: [
        (fn: () => React.ReactNode) => (
            <CustomDataProvider data={{ [TREE_RESOURCE]: resolver }}>
                {fn()}
            </CustomDataProvider>
        ),
    ],
    parameters: {
        componentSubtitle:
            'Placeholder for the organisation unit tree replacement.',
        docs: { description: { component: description } },
    },
}

export const Default = () => <OuTree />

export const EndpointExplorer = () => <Explorer />
