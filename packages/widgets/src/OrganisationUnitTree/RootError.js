import React from 'react'
import i18n from '@dhis2/d2-i18n'
import propTypes from 'prop-types'

export const RootError = ({ dataTest, error }) => (
    <div data-test={`${dataTest}-loading`}>
        {i18n.t('Error: ')}
        {error}
    </div>
)

RootError.propTypes = {
    dataTest: propTypes.string.isRequired,
    error: propTypes.string.isRequired,
}
