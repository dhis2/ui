import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    delayResponse,
} from './common.js'

const data = {
    organisationUnits: (...args) => {
        const [, { id }] = args

        if (id === 'A0000000000') {
            return dataProviderData.organisationUnits(...args)
        }

        if (id === 'A0000000001') {
            return delayResponse(
                1000,
                dataProviderData.organisationUnits(...args)
            )()
        }

        return Promise.resolve({})
    },
}

export const A0000000001Loading = () => (
    <CustomDataProvider data={data}>
        <StatefulMultiSelectionWrapper>
            {({ onChange }) => (
                <OrganisationUnitTree roots="A0000000000" onChange={onChange} />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
)
