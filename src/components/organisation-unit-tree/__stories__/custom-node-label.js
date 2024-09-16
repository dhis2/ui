import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { onChange } from './shared.js'

export const CustomNodeLabel = () => (
    <OrganisationUnitTree
        name="Root org unit"
        roots="A0000000000"
        initiallyExpanded={['/A0000000000/A0000000001']}
        renderNodeLabel={({ label, node }) => {
            if (node.path !== '/A0000000000/A0000000001') {
                return label
            }

            return <span>--- {label}</span>
        }}
        onChange={onChange}
    />
)
