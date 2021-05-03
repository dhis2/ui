import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'
import css from 'styled-jsx/css'

// TODO: ui-icons
function ErrorIcon({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.96 4 4 12.95 4 24s8.96 20 20 20 20-8.95 20-20S35.04 4 24 4zm2 30h-4v-4h4v4zm0-8h-4V14h4v12z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.error};
                }
            `}</style>
        </svg>
    )
}

ErrorIcon.propTypes = {
    className: propTypes.string,
}

function Info({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.info};
                }
            `}</style>
        </svg>
    )
}

Info.propTypes = {
    className: propTypes.string,
}

function Warning({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z" />
            <style jsx>{`
                svg {
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                    fill: ${theme.warning};
                }
            `}</style>
        </svg>
    )
}

Warning.propTypes = {
    className: propTypes.string,
}


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
