import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

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

storiesOf(namespace, module)
    .add('A0000000001 loading error', () => (
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
    ))
    .add('A0000000001 loading error autoexpand', () => (
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
    ))
