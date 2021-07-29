import propTypes from 'prop-types'
import React from 'react'
import i18n from './locales/index.js'

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
