import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import {
    createGistResolver,
    createTreeResolver,
    pahoOrgUnits,
} from './ou-tree/__fixtures__/index'
import { Browse as BrowseList } from './ou-tree/__stories__/browse'
import { GIST_RESOURCE, TREE_RESOURCE } from './ou-tree/data/index'
import { OuTree } from './ou-tree/index'
import { OuTreeNodeStoreProvider, OuTreeProvider } from './ou-tree/tree/index'

const description = `
A replacement for \`OrganisationUnitTree\`, currently a placeholder. It is
not exported from any package yet.

The **Browse** story is temporary. It renders every row of browse mode as a
plain list over an in-memory stand-in for the endpoint and 19,191 PAHO
organisation units, loading every empty slot eagerly. Expand AMR, then Brazil,
then Minas Gerais: its third page of children fails on purpose, so the
error rows and their retry can be seen.
`

const MINAS_GERAIS = 'IsBNuUZU5zm'
const PAHO_ROOTS = ['nOsaOsg36TR', 'eFkh5oWtyud']

const data = {
    [TREE_RESOURCE]: createTreeResolver({
        ...pahoOrgUnits,
        failChildrenPageWith: (parentId, page) =>
            parentId === MINAS_GERAIS && page === 3
                ? new Error('Simulated failure of page 3')
                : undefined,
    }),
    [GIST_RESOURCE]: createGistResolver(pahoOrgUnits),
}

export default {
    title: 'OuTree',
    component: OuTree,
    decorators: [
        (fn: () => React.ReactNode) => (
            <CustomDataProvider data={data}>
                <OuTreeNodeStoreProvider>{fn()}</OuTreeNodeStoreProvider>
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

export const Browse = () => (
    <OuTreeProvider roots={PAHO_ROOTS}>
        <BrowseList />
    </OuTreeProvider>
)
