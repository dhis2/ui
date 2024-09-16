import { DataProvider } from '@dhis2/app-runtime'
import React, { useState } from 'react'
import { OrganisationUnitTree } from '../index.js'

const DX_onChange =
    (selected, setSelected, singleSelection) =>
    ({ id, path, checked }) => {
        console.log('onChange', { path, id, checked })
        const pathIndex = selected.indexOf(path)

        let nextSelected

        if (checked) {
            nextSelected = singleSelection ? [path] : [...selected, path]
        } else {
            nextSelected = singleSelection
                ? []
                : [
                      ...selected.slice(0, pathIndex),
                      ...selected.slice(pathIndex + 1),
                  ]
        }

        console.log('> nextSelected', nextSelected)
        setSelected(nextSelected)
    }

const Wrapper = (props) => {
    const [selected, setSelected] = useState([])

    return (
        <OrganisationUnitTree
            name="Root org unit"
            roots={['A0000000000']}
            selected={selected}
            onChange={DX_onChange(selected, setSelected, props.singleSelection)}
            initiallyExpanded={['A0000000001/A0000000002']}
            {...props}
        />
    )
}

export const DxMultiSelection = () => <Wrapper />
DxMultiSelection.storyName = 'DX: Multi selection'

export const DxSingleSelection = () => <Wrapper singleSelection />
DxSingleSelection.storyName = 'DX: Single selection'

export const DxNoSelection = () => <Wrapper disableSelection />
DxNoSelection.storyName = 'DX: No selection'

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
            <Wrapper roots={['ImspTQPwCqd', 'O6uvpzGd5pu', 'fdc6uOvgoji']} />
        </DataProvider>
    </div>
)

DxWithRealBackend.storyName = 'DX: With real backend'
