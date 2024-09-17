import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { onChange } from './shared.js'

export const NoSelection = () => (
    <OrganisationUnitTree
        onChange={onChange}
        disableSelection
        name="Root org unit"
        roots={['A0000000000']}
        selected={['/A0000000000/A0000000001']}
        initiallyExpanded={['/A0000000000']}
    />
)

NoSelection.storyName = 'No selection'
