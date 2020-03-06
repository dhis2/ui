import React from 'react'
import { storiesOf } from '@storybook/react'
import { OrganisationUnitTree } from '../../index'
import { CustomDataProvider } from '@dhis2/app-runtime'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    namespace,
} from './common'

const data = {
    'organisationUnits/A0000000000':
        dataProviderData['organisationUnits/A0000000000'],
    'organisationUnits/A0000000001': new Promise(() => {}),
    'organisationUnits/A0000000002': new Promise(() => {}),
    'organisationUnits/A0000000006': new Promise(() => {}),
}

storiesOf(namespace, module).add('A0000000001 loading', () => (
    <CustomDataProvider data={data}>
        <StatefulMultiSelectionWrapper>
            {({ onChange }) => (
                <OrganisationUnitTree roots="A0000000000" onChange={onChange} />
            )}
        </StatefulMultiSelectionWrapper>
    </CustomDataProvider>
))
