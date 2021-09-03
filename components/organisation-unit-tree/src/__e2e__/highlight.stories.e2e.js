import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

storiesOf(namespace, module).add('Root highlighted', () => (
    <CustomDataProvider data={dataProviderData}>
        <StatefulMultiSelectionWrapper>
            {({ onChange }) => (
                <OrganisationUnitTree
                    roots="A0000000000"
                    onChange={onChange}
                    highlighted={['/A0000000000']}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
))
