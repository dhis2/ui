import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { StatefulMultiSelectionWrapper, dataProviderData } from './common.js'

window.allUnits = []
for (let i = 0; i < 7; ++i) {
    window.allUnits.push(`A000000000${i}`)
}

export const FilteredBy3LevelPath = () => (
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
)
export const FilteredBy3LevelPathAnd2LevelPath = () => (
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
)
