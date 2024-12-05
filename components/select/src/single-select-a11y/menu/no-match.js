import { colors, spacers, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const NoMatch = ({ children, className }) => (
    <div className={className}>
        {children}

        <style jsx>{`
            div {
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                line-height: 16px;
                padding-block: ${spacers.dp8};
                padding-inline: ${spacers.dp24};
                text-align: center;
            }
        `}</style>
    </div>
)

NoMatch.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export { NoMatch }
