import { Button } from '@dhis2-ui/button'
import React, { useState } from 'react'
import { OrganisationUnitTree } from '../index.js'

export const ForceReloadAll = () => {
    const [forceReload, setForceReload] = useState(false)

    return (
        <>
            <Button disabled={forceReload} onClick={() => setForceReload(true)}>
                Reload org unit tree
            </Button>{' '}
            <span>(Force reload: {forceReload ? 'true' : 'false'})</span>
            <div>
                <OrganisationUnitTree
                    forceReload={forceReload}
                    name="Root org unit"
                    roots={['A0000000000']}
                    initiallyExpanded={['/A0000000000/A0000000001']}
                    selected={['/A0000000000/A0000000001/A0000000003']}
                    onChildrenLoaded={data => {
                        const { id } = data
                        if (id === 'A0000000000') {
                            setForceReload(false)
                        }
                    }}
                />
            </div>
            <style jsx>{`
                div {
                    width: 400px;
                    border: 1px solid black;
                    margin-top: 32px;
                    padding: 16px;
                    min-height: 200px;
                }
            `}</style>
        </>
    )
}

ForceReloadAll.storyName = 'Force reload all'
