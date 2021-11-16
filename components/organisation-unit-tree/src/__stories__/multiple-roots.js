import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    createDecoratorCustomDataProvider,
    createDecoratorStatefulMultiSelection,
} from './shared.js'

export const MultipleRoots = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        selected={selected}
        onChange={onChange}
        roots={['A0000000000', 'A0000000001']}
        initiallyExpanded={['/A0000000000/A0000000001']}
    />
)

MultipleRoots.decorators = [
    createDecoratorStatefulMultiSelection(),
    createDecoratorCustomDataProvider(),
]
