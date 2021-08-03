import React from 'react'
import { OrganisationUnitTree } from '../index.js'

export const NoSelection = () => (
    <OrganisationUnitTree
        disableSelection
        name="Root org unit"
        roots={['A0000000000']}
        selected={['/A0000000000/A0000000001']}
        initiallyExpanded={['/A0000000000']}
    />
)

NoSelection.storyName = 'No selection'
