import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

window.selection = []

export default { title: namespace }
export const MultipleSelection = () => (
    <CustomDataProvider data={dataProviderData}>
        <StatefulMultiSelectionWrapper
            onSelectionChange={(newSelection) =>
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
)
