import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React from 'react'

export const OrganisationUnitTreeRootLoading = ({
    dataTest = 'dhis2-uiwidgets-orgunittree-loading',
}) => (
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

OrganisationUnitTreeRootLoading.propTypes = {
    dataTest: PropTypes.string,
}
