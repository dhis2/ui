import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import { Info, Warning, Error as ErrorIcon } from '../Icons/index.js'
import css from 'styled-jsx/css'

const getIconStyles = color =>
    css.resolve`
        svg {
            fill: ${color};
            width: 24px;
            height: 24px;
            margin-right: ${spacers.dp12};
        }
    `

export const NoticeBoxIcon = ({ warning, error, dataTest }) => {
    // Info is the default icon
    let color = colors.blue900
    let Icon = Info

    if (warning) {
        color = colors.yellow700
        Icon = Warning
    }

    if (error) {
        color = colors.red700
        Icon = ErrorIcon
    }

    const { className, styles } = getIconStyles(color)

    return (
        <div data-test={dataTest}>
            <Icon className={className} />
            {styles}
        </div>
    )
}

NoticeBoxIcon.propTypes = {
    dataTest: propTypes.string.isRequired,
    error: propTypes.mutuallyExclusive(['error', 'warning'], propTypes.bool),
    warning: propTypes.mutuallyExclusive(['error', 'warning'], propTypes.bool),
}
