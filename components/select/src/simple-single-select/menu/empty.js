import { colors, spacers, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const Empty = ({ children }) => (
    <div>
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

Empty.propTypes = {
    children: PropTypes.string.isRequired,
}

export { Empty }
