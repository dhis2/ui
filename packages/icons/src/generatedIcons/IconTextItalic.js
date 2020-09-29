import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconTextItalic16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 3v1h-2.691l-3.5 7h2.191v1h-6v-1h2.69l3.5-7h-2.19v-1z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconTextItalic16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTextItalic24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13.5 7h-3.5v-2h9v2h-3.5l-5 10h3.5v2h-9v-2h3.5z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconTextItalic24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTextItalic = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconTextItalic16 className={className} color={color} />

        case 24:
            return <IconTextItalic24 className={className} color={color} />

        default:
            return null
    }
}

IconTextItalic.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconTextItalic.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconTextItalic }
