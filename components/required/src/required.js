import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const Required = ({ dataTest }) => (
    <span data-test={dataTest}>
        *
        <style jsx>{`
            span {
                padding-left: ${spacers.dp4};
            }
        `}</style>
    </span>
)

Required.propTypes = {
    dataTest: PropTypes.string.isRequired,
}
