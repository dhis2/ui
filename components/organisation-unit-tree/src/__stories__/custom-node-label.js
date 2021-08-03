import React from 'react'
import { OrganisationUnitTree } from '../index.js'

export const CustomNodeLabel = () => (
    <OrganisationUnitTree
        name="Root org unit"
        roots="A0000000000"
        initiallyExpanded={['/A0000000000/A0000000001']}
        renderNodeLabel={data => {
            if (data.node.path !== '/A0000000000/A0000000001') {
                return OrganisationUnitTree.defaultProps.renderNodeLabel(data)
            }

            return OrganisationUnitTree.defaultProps.renderNodeLabel({
                ...data,
                node: {
                    ...data.node,
                    displayName: <span>--- {data.node.displayName}</span>,
                },
            })
        }}
    />
)
