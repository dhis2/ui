import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import { customData, onChange } from './shared.js'


export const RootError = () => (
    <CustomDataProvider
        data={{
            ...customData,
            organisationUnits: (...args) => {
                const [, { id }] = args
                if (id === 'A0000000000') {
                    return Promise.reject(
                        'This is a custom error message, it could be anything'
                    )
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
                onChange={onChange}
                name="Root org unit"
                roots={['A0000000000']}
                initiallyExpanded={['/A0000000000/A0000000001']}
            />
        </fieldset>
    </CustomDataProvider>
)

RootError.storyName = 'Root error'
