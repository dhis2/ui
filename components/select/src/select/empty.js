import { colors, spacers, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const Empty = ({ message, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
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

Empty.propTypes = {
    dataTest: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export { Empty }
