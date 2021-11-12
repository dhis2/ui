import React, { useState } from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    createDecoratorCustomDataProvider,
    createDecoratorStatefulMultiSelection,
} from './common.js'

export default {
    title: 'OrganisationUnitTree',
    decorators: [
        createDecoratorStatefulMultiSelection(),
        createDecoratorCustomDataProvider(),
    ],
}

export const MultipleRootSubAndOneMainOrgUnit = (_, { selected, onChange }) => {
    const [filter, setFilter] = useState('')

    return (
        <>
            <input
                type="input"
                onChange={e => setFilter(e.target.value)}
            />

            <OrganisationUnitTree
                filter={filter ? filter.split(',') : []}
                onChange={onChange}
                selected={selected}
                roots={['A0000000000', 'A0000000001', 'A0000000002']}
            />
        </>
    )
}
