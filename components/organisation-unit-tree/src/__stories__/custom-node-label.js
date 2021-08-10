import React from 'react'
import { OrganisationUnitTree } from '../index.js'

export const CustomNodeLabel = () => (
    <OrganisationUnitTree
        name="Root org unit"
        roots="A0000000000"
        initiallyExpanded={['/A0000000000/A0000000001']}
        renderNodeLabel={({ node, loading }) => {
            const { displayName } = node

            if (loading) {
                return `${displayName} (loading)`
            }

            return <span>--- {displayName}</span>
        }}
    />
)
