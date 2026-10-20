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

The **Endpoint explorer** story is temporary. It runs queries against an
in-memory stand-in for \`GET /api/organisationUnits/tree\` over a fixture of
19,191 PAHO organisation units, so the stand-in can be exercised in a browser
while the real endpoint is unavailable. Remove it together with the stand-in.
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
