import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React from 'react'

export const OrganisationUnitTreeRootLoading = ({ dataTest }) => (
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

OrganisationUnitTreeRootLoading.defaultProps = {
    dataTest: 'dhis2-uiwidgets-orgunittree-loading',
}

OrganisationUnitTreeRootLoading.propTypes = {
    dataTest: PropTypes.string,
}
