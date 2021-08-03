import React from 'react'
import { OrganisationUnitTree } from '../index.js'

export const Highlighted = () => (
    <OrganisationUnitTree
        highlighted={['/A0000000000/A0000000001']}
        name="Root org unit"
        roots={['A0000000000']}
        initiallyExpanded={['/A0000000000']}
    />
)
