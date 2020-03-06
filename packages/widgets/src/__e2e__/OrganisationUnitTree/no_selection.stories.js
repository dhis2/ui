import React from 'react'
import { storiesOf } from '@storybook/react'
import { OrganisationUnitTree } from '../../index'
import { CustomDataProvider } from '@dhis2/app-runtime'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common'

storiesOf(namespace, module)
    .add('No selection closed', () => (
        <CustomDataProvider data={dataProviderData}>
            <StatefulMultiSelectionWrapper>
                {({ onChange }) => (
                    <OrganisationUnitTree
                        disableSelection
                        roots="A0000000000"
                        onChange={onChange}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    ))
    .add('No selection root opened', () => (
        <CustomDataProvider data={dataProviderData}>
            <StatefulMultiSelectionWrapper>
                {({ onChange }) => (
                    <OrganisationUnitTree
                        disableSelection
                        roots="A0000000000"
                        onChange={onChange}
                        initiallyExpanded={['/A0000000000']}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    ))
