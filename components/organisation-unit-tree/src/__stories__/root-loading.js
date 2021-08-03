import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { customData } from './customData.js'

export const RootLoading = () => (
    <CustomDataProvider
        data={{
            ...customData,
            organisationUnits: (...args) => {
                const [, { id }] = args
                if (id === 'A0000000000') {
                    return new Promise(() => null)
                }

                return customData.organisationUnits(...args)
            },
        }}
    >
        <fieldset style={{ maxWidth: 600 }}>
            <legend style={{ padding: '0 10px' }}>
                Custom container (max-width: 600px)
            </legend>
            <OrganisationUnitTree
                name="Root org unit"
                roots={['A0000000000']}
                initiallyExpanded={['/A0000000000/A0000000001']}
            />
        </fieldset>
    </CustomDataProvider>
)

RootLoading.storyName = 'Root loading'
