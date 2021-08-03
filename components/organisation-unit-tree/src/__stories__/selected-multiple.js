import React from 'react'
import { OrganisationUnitTree } from '../index.js'

export const SelectedMultiple = () => (
    <OrganisationUnitTree
        name="Root org unit"
        roots={['A0000000000']}
        selected={[
            '/A0000000000/A0000000002',
            '/A0000000000/A0000000001/A0000000003',
        ]}
        initiallyExpanded={['/A0000000000', '/A0000000000/A0000000001']}
    />
)

SelectedMultiple.storyName = 'Selected multiple'
