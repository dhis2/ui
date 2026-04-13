import React from 'react'
import i18n from '../locales/index.js'

export interface OrganisationUnitTreeRootErrorProps {
    error: string
    dataTest?: string
}

export const OrganisationUnitTreeRootError = ({
    dataTest = 'dhis2-uiwidgets-orgunittree-error',
    error,
}: OrganisationUnitTreeRootErrorProps) => (
    <div data-test={dataTest}>
        {i18n.t('Error: {{ ERRORMESSAGE }}', {
            ERRORMESSAGE: error,
            nsSeparator: '>',
        })}
    </div>
)
