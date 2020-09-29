import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLegend16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit" fillRule="evenodd">
            <rect height="5" opacity=".9" rx="1" width="5" x="2" y="2" />
            <rect height="5" opacity=".3" rx="1" width="5" x="9" y="2" />
            <rect height="5" opacity=".5" rx="1" width="5" x="2" y="9" />
            <rect height="5" opacity=".7" rx="1" width="5" x="9" y="9" />
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconLegend16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLegend24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit" fillRule="evenodd">
            <rect height="7" opacity=".9" rx="1" width="7" x="4" y="4" />
            <rect height="7" opacity=".3" rx="1" width="7" x="13" y="4" />
            <rect height="7" opacity=".5" rx="1" width="7" x="4" y="13" />
            <rect height="7" opacity=".7" rx="1" width="7" x="13" y="13" />
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconLegend24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLegend = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLegend16 className={className} color={color} />

        case 24:
            return <IconLegend24 className={className} color={color} />

        default:
            return null
    }
}

IconLegend.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLegend.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLegend }
