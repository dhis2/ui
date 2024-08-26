import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { StatefulMultiSelectionWrapper, dataProviderData } from './common.js'

const dataProviderDataWithError = {
    organisationUnits: (...args) => {
        const [, { id }] = args
        if (id === 'A0000000001') {
            return new Promise((resolve, reject) =>
                setTimeout(() => {
                    reject(new Error('Foobar custom error message'))
                }, 100)
            )
        }

        return dataProviderData.organisationUnits(...args)
    },
}

export const A0000000001LoadingError = () => (
    <CustomDataProvider data={dataProviderDataWithError}>
        <StatefulMultiSelectionWrapper>
            {() => (
                <OrganisationUnitTree
                    roots="A0000000000"
                    onChange={() => null}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
)
export const A0000000001LoadingErrorAutoexpand = () => (
    <CustomDataProvider data={dataProviderDataWithError}>
        <StatefulMultiSelectionWrapper>
            {() => (
                <OrganisationUnitTree
                    autoExpandLoadingError
                    roots="A0000000000"
                    onChange={() => null}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
)
