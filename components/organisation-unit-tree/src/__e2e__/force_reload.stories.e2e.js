import { CustomDataProvider } from '@dhis2/app-runtime'
import { storiesOf } from '@storybook/react'
import React, { useState } from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    StatefulMultiSelectionWrapper,
    dataProviderData,
    delayResponse,
    namespace,
} from './common.js'

const afterReloadData = {
    organisationUnits: (...args) => {
        const [, { id }] = args

        if (id === 'A0000000000') {
            return delayResponse(
                1000,
                dataProviderData.organisationUnits(...args)
            )()
        }

        if (id === 'A0000000001') {
            return delayResponse(
                2200,
                dataProviderData.organisationUnits(...args)
            )()
        }

        return dataProviderData.organisationUnits(...args)
    }
}

const ForceReloading = () => {
    const [forceReload, setForceReload] = useState(false)

    return (
        <CustomDataProvider data={afterReloadData}>
            <button
                disabled={forceReload}
                data-test="reload-all"
                onClick={() => setForceReload(true)}
            >
                Force reload tree
            </button>

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
