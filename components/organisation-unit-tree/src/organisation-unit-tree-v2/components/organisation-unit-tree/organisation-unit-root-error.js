import { NoticeBox } from '@dhis2-ui/notice-box'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React from 'react'

const OrganisationUnitRootError = ({ error }) => (
    <NoticeBox error title={i18n.t('Could not load organisation unit tree')}>
        {error.message ??
            i18n.t('There was a problem fetching the initial data.')}
    </NoticeBox>
)

OrganisationUnitRootError.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string,
    }),
}

export { OrganisationUnitRootError }
