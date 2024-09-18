import { CustomDataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { OrganisationUnitTree } from '../index.js'
import {
    customData,
    onChange,
    onExpand,
    onCollapse,
    onChildrenLoaded,
} from './shared.js'

export const LoadingErrorGrandchild = () => (
    <CustomDataProvider
        data={{
            ...customData,
            organisationUnits: (...args) => {
                const [, { id }] = args
                if (id === 'A0000000003') {
                    return Promise.reject('Loading org unit 4 and 5 failed')
                }

                return customData.organisationUnits(...args)
            },
        }}
    >
        <OrganisationUnitTree
            autoExpandLoadingError
            name="Root org unit"
            roots={['A0000000000']}
            onChange={onChange}
            onExpand={onExpand}
            onCollapse={onCollapse}
            onChildrenLoaded={onChildrenLoaded}
            initiallyExpanded={['/A0000000000/A0000000001']}
        />
    </CustomDataProvider>
)

LoadingErrorGrandchild.storyName = 'Loading error grandchild'
