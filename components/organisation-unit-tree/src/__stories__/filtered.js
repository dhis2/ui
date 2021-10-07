import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { onChange } from './shared.js'

export const Filtered = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name="Root org unit"
        roots={['A0000000000']}
        initiallyExpanded={['/A0000000000/A0000000001']}
        filter={['/A0000000000/A0000000001']}
    />
)
