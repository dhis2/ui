import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common.js'

const data = {
    organisationUnits: (...args) => {
        const [, { id }] = args

        if (id === 'A0000000000') {
            return {
                ...dataProviderData.organisationUnits(...args),
                children: [],
            }
        }

        if (id === 'A0000000001') {
            return {
                ...dataProviderData.organisationUnits(...args),
                path: '/A0000000001',
                children: [],
            }
        }

        return Promise.resolve({})
    },
}

storiesOf(namespace, module).add('Single selection', () => (
    <CustomDataProvider data={data}>
        <StatefulMultiSelectionWrapper>
            {({ selected, onChange }) => (
                <OrganisationUnitTree
                    singleSelection
                    roots={['A0000000000', 'A0000000001']}
                    onChange={onChange}
                    selected={selected}
                />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
))
