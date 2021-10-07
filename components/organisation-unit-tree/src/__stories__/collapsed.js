import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { onChange } from './shared.js'

export const Collapsed = () => (
    <OrganisationUnitTree
        onChange={onChange}
        name={'Root org unit'}
        roots={['A0000000000']}
    />
)
