import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../locales/index.js'

export const OrganisationUnitTreeRootError = ({ dataTest, error }) => (
    <div data-test={dataTest}>
        {i18n.t('Error: {{ ERRORMESSAGE }}', {
            ERRORMESSAGE: error,
            nsSeparator: '>',
        })}
    </div>
)

OrganisationUnitTreeRootError.defaultProps = {
    dataTest: 'dhis2-uiwidgets-orgunittree-error',
}

OrganisationUnitTreeRootError.propTypes = {
    error: PropTypes.string.isRequired,
    dataTest: PropTypes.string,
}
