import { DataProvider } from '@dhis2/app-runtime'
import React from 'react'
import { Wrapper } from './dx-wrapper.js'

export const DxWithRealBackend = () => (
    <div>
        <div style={{ marginBottom: 20, lineHeight: '28px' }}>
            <b>
                This story doesn&apos;t work on netlify for some reason, just
                run it locally.
            </b>
            <br />
            You need to log in to{' '}
            <a
                href="https://debug.dhis2.org/dev"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://debug.dhis2.org/dev
            </a>
            <br />
            Make sure the{' '}
            <code style={{ background: '#ccc' }}>localhost:[PORT]</code> is part
            of the accepted list:{' '}
            <a
                href="https://debug.dhis2.org/dev/dhis-web-settings/#/access"
                target="_blank"
                rel="noopener noreferrer"
            >
                Settings app / Access
            </a>
        </div>
        <DataProvider baseUrl="https://debug.dhis2.org/dev" apiVersion="">
            <Wrapper
                //initiallyExpanded={['/ImspTQPwCqd/eIQbndfxQMb']}
                suppressAlphabeticalSorting
                roots="ImspTQPwCqd"
            />
        </DataProvider>
    </div>
)
DxWithRealBackend.storyName = 'DX: With real backend'
