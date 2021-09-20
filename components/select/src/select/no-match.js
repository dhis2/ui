import { colors, spacers, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

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
    message: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export { NoMatch }
