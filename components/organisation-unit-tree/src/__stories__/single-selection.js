import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { onChange } from './shared.js'

export const SingleSelection = () => (
    <OrganisationUnitTree
        onChange={onChange}
        singleSelection
        name="Root org unit"
        roots={['A0000000000']}
        selected={['/A0000000000/A0000000001']}
        initiallyExpanded={['/A0000000000']}
    />
)

SingleSelection.storyName = 'Single selection'
