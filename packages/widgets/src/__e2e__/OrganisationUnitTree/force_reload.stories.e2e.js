import { Button } from '@dhis2/ui-core'
import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { OrganisationUnitTree } from '../../index'
import { CustomDataProvider } from '@dhis2/app-runtime'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    delayResponse,
    namespace,
} from './common'

const afterReloadData = {
    'organisationUnits/A0000000000': delayResponse(
        1000,
        dataProviderData['organisationUnits/A0000000000']
    ),
    'organisationUnits/A0000000001': delayResponse(
        2000,
        dataProviderData['organisationUnits/A0000000001']
    ),
}

const ForceReloading = () => {
    const [forceReload, setForceReload] = useState(false)

    return (
        <CustomDataProvider data={afterReloadData}>
            <Button
                disabled={forceReload}
                dataTest="reload-all"
                onClick={() => setForceReload(true)}
            >
                Force reload tree
            </Button>

            <StatefulMultiSelectionWrapper>
                {({ selected, onChange }) => (
                    <OrganisationUnitTree
                        roots="A0000000000"
                        onChange={onChange}
                        selected={selected}
                        forceReload={forceReload}
                        onChildrenLoaded={data => {
                            if (data.A0000000000) {
                                setForceReload(false)
                            }
                        }}
                    />
                )}
            </StatefulMultiSelectionWrapper>
        </CustomDataProvider>
    )
}

storiesOf(namespace, module).add('Force reloading', () => <ForceReloading />)
