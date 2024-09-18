import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    createDecoratorCustomDataProvider,
    createDecoratorStatefulMultiSelection,
} from './common.js'

const decorators = [
    createDecoratorStatefulMultiSelection(),
    createDecoratorCustomDataProvider(),
]

export const NoInitiallyExpandedPaths = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        roots="A0000000000"
        selected={selected}
        onChange={onChange}
    />
)

NoInitiallyExpandedPaths.decorators = decorators

export const InitiallyExpandedPaths = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        roots="A0000000000"
        selected={selected}
        onChange={onChange}
        initiallyExpanded={['/A0000000000']}
    />
)

InitiallyExpandedPaths.decorators = decorators

export const WithRootMainAndRootSubOrgUnit = (_, { onChange, selected }) => (
    <OrganisationUnitTree
        roots={['A0000000000', 'A0000000001']}
        selected={selected}
        onChange={onChange}
    />
)

WithRootMainAndRootSubOrgUnit.decorators = decorators
