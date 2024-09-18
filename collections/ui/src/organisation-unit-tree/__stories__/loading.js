import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { customData, onChange } from './shared.js'

export const Loading = () => (
    <CustomDataProvider
        data={{
            ...customData,
            organisationUnits: (...args) => {
                const [, { id }] = args
                if (id === 'A0000000001') {
                    return new Promise(() => null)
                }

                return customData.organisationUnits(...args)
            },
        }}
    >
        <OrganisationUnitTree
            onChange={onChange}
            name="Root org unit"
            roots={['A0000000000']}
            initiallyExpanded={['/A0000000000/A0000000001']}
        />
    </CustomDataProvider>
)
