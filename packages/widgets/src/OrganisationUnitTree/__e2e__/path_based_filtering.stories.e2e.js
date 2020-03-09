import React from 'react'
import { storiesOf } from '@storybook/react'
import { CustomDataProvider } from '@dhis2/app-runtime'
import { OrganisationUnitTree } from '../OrganisationUnitTree.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common'

window.dataProviderData = dataProviderData

storiesOf(namespace, module)
    .add('Filtered by 3-level-path', () => (
        <CustomDataProvider data={dataProviderData}>
            <StatefulMultiSelectionWrapper>
                {({ onChange }) => (
                    <OrganisationUnitTree
                        roots="A0000000000"
                        onChange={onChange}
                        initiallyExpanded={[
                            '/A0000000000',
                            '/A0000000000/A0000000001',
                            '/A0000000000/A0000000002',
                        ]}
                        filter={['/A0000000000/A0000000001/A0000000003']}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    ))
    .add('Filtered by 3-level-path and 2-level-path', () => (
        <CustomDataProvider data={dataProviderData}>
            <StatefulMultiSelectionWrapper>
                {({ onChange }) => (
                    <OrganisationUnitTree
                        roots="A0000000000"
                        onChange={onChange}
                        initiallyExpanded={[
                            '/A0000000000',
                            '/A0000000000/A0000000001',
                            '/A0000000000/A0000000002',
                        ]}
                        filter={[
                            '/A0000000000/A0000000001/A0000000003',
                            '/A0000000000/A0000000002',
                        ]}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    ))
