import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

export const NoSelectionClosed = () => (
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
)
export const NoSelectionRootOpened = () => (
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
)
