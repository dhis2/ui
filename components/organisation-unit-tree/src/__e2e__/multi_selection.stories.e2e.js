import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../organisation-unit-tree.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

window.selection = []

storiesOf(namespace, module).add('Multiple selection', () => (
    <CustomDataProvider data={dataProviderData}>
        <StatefulMultiSelectionWrapper
            onSelectionChange={newSelection =>
                (window.selection = newSelection)
            }
        >
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
