import React from 'react'
import { storiesOf } from '@storybook/react'
import { CustomDataProvider } from '@dhis2/app-runtime'

import { OrganisationUnitTree } from '../OrganisationUnitTree.js'

import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common'

storiesOf(namespace, module).add('Closed with children', () => (
    <CustomDataProvider data={dataProviderData}>
        <StatefulMultiSelectionWrapper>
            {({ selected, onChange }) => (
                <OrganisationUnitTree
                    roots="A0000000000"
                    onChange={onChange}
                    selected={selected}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
))
