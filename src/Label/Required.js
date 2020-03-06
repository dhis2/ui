import React from 'react'
import propTypes from '@dhis2/prop-types'
import { spacers } from '../theme.js'

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
    dataTest: propTypes.string.isRequired,
}
