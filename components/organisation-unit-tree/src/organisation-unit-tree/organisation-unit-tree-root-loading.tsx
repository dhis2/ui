import { CircularLoader } from '@dhis2-ui/loader'
import React from 'react'

export interface OrganisationUnitTreeRootLoadingProps {
    dataTest?: string
}

export const OrganisationUnitTreeRootLoading = ({
    dataTest = 'dhis2-uiwidgets-orgunittree-loading',
}: OrganisationUnitTreeRootLoadingProps) => (
    <div data-test={dataTest}>
        <CircularLoader small />

        <style jsx>{`
            div {
                display: flex;
                justify-content: center;
            }
        `}</style>
    </div>
)
