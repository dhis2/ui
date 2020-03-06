import { colors, spacers, theme } from '@dhis2/ui-core'
import React from 'react'
import propTypes from 'prop-types'

export const ErrorMessage = ({ children, dataTest }) => (
    <span data-test={`${dataTest}-error`}>
        {children}

        <style jsx>{`
            span {
                font-size: 14px;
                color: ${colors.grey800};
                margin: ${spacers.dp4};
                color: ${theme.error};
            }
        `}</style>
    </span>
)

ErrorMessage.propTypes = {
    children: propTypes.any.isRequired,
    dataTest: propTypes.string.isRequired,
}
