import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../organisation-unit-tree.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

const data = {
    'organisationUnits/A0000000000': {
        ...dataProviderData['organisationUnits/A0000000000'],
        children: [],
    },
    'organisationUnits/A0000000001': {
        ...dataProviderData['organisationUnits/A0000000001'],
        path: '/A0000000001',
        children: [],
    },
}

storiesOf(namespace, module).add('Single selection', () => (
    <CustomDataProvider data={data}>
        <StatefulMultiSelectionWrapper>
            {({ selected, onChange }) => (
                <OrganisationUnitTree
                    singleSelection
                    roots={['A0000000000', 'A0000000001']}
                    onChange={onChange}
                    selected={selected}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
))
