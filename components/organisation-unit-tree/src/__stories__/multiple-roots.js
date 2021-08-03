import React from 'react'
import { OrganisationUnitTree } from '../index.js'

export const MultipleRoots = () => (
    <OrganisationUnitTree
        name="Root org unit"
        roots={['A0000000000', 'A0000000001']}
        initiallyExpanded={['/A0000000000/A0000000001']}
    />
)

MultipleRoots.storyName = 'Multiple roots'
