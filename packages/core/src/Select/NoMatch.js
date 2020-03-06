import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers, theme } from '../theme.js'

const NoMatch = ({ message, className }) => (
    <div className={className}>
        {message}

        <style jsx>{`
            div {
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                line-height: 16px;
                padding: ${spacers.dp8} ${spacers.dp24};
                text-align: center;
            }
        `}</style>
    </div>
)

NoMatch.propTypes = {
    message: propTypes.string.isRequired,
    className: propTypes.string,
}

export { NoMatch }
