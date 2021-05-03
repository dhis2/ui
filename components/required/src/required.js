import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
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
    dataTest: propTypes.string.isRequired,
}
