import React from 'react'
import { OuTree } from './ou-tree/index'

const description = `
A replacement for \`OrganisationUnitTree\`, currently a placeholder. It is
not exported from any package yet.
`

export default {
    title: 'OuTree',
    component: OuTree,
    parameters: {
        componentSubtitle:
            'Placeholder for the organisation unit tree replacement.',
        docs: { description: { component: description } },
    },
}

export const Default = () => <OuTree />
