import { CircularLoader } from '@dhis2-ui/loader'
import { colors, spacers, theme } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const Loading = ({ message, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
        <CircularLoader small />
        {message}
        <style jsx>{`
            div {
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${colors.grey700};
                font-family: ${theme.fonts};
                font-size: 13px;
                padding: ${spacers.dp8} ${spacers.dp24};
            }
        `}</style>
    </div>
)

Loading.propTypes = {
    dataTest: PropTypes.string.isRequired,
    className: PropTypes.string,
    message: PropTypes.string,
}
