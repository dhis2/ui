import { CircularLoader } from '@dhis2-ui/loader'
import React from 'react'

const OrganisationUnitRootLoader = () => (
    <div>
        <CircularLoader small />
        <style jsx>{`
            div {
                display: flex;
                align-self: stretch;
                width: 100%;
                align-items: center;
                justify-content: center;
            }
        `}</style>
    </div>
)

export { OrganisationUnitRootLoader }
