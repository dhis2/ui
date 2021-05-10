import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../organisation-unit-tree.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

storiesOf(namespace, module)
    .add('No initially expanded paths', () => (
        <CustomDataProvider data={dataProviderData}>
            <StatefulMultiSelectionWrapper>
                {({ onChange }) => (
                    <OrganisationUnitTree
                        roots="A0000000000"
                        onChange={onChange}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    ))
    .add('initially expanded paths', () => (
        <CustomDataProvider data={dataProviderData}>
            <StatefulMultiSelectionWrapper>
                {({ onChange }) => (
                    <OrganisationUnitTree
                        roots="A0000000000"
                        onChange={onChange}
                        initiallyExpanded={['/A0000000000']}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    ))
