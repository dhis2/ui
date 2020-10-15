import i18n from '@dhis2/d2-i18n'
import propTypes from 'prop-types'
import React from 'react'

export const RootError = ({ dataTest, error }) => (
    <div data-test={`${dataTest}-loading`}>
        {i18n.t('Error: {{ ERRORMESSAGE }}', {
            ERRORMESSAGE: error,
            nsSeparator: '>',
        })}
    </div>
)

RootError.propTypes = {
    dataTest: propTypes.string.isRequired,
    error: propTypes.string.isRequired,
}
