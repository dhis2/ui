import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconFilter16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m10 10-1 1h-2l-1-1zm3-3-1 1h-8l-1-1zm2-3-1 1h-12l-1-1z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconFilter16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFilter24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 16-1 2h-2l-1-2zm4-5-1 2h-10l-1-2zm3-5-1 2h-16l-1-2z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconFilter24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFilter = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconFilter16 className={className} color={color} />

        case 24:
            return <IconFilter24 className={className} color={color} />

        default:
            return null
    }
}

IconFilter.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconFilter.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconFilter }
