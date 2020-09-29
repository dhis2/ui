import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconFlag16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m3 1v1h11l-3.5 4.5 3.5 4.5h-11v4h-1v-14zm8.955 2h-8.955v7h8.955l-2.72186158-3.5z"
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

IconFlag16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFlag24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6 2v2h13.0662132c.5522848 0 1.0000811.44771525 1.0000811 1 0 .20707347-.0643645.40904032-.1840566.57801734l-3.1322377 4.42198266 3.1322377 4.4219827c.3192302.4506778.2126708 1.0748116-.2380071 1.3940418-.168977.119692-.3709439.1839755-.5780174.1839755h-13.0662132v6h-2v-20zm11.131 4h-11.131v8h11.132l-2.8329069-4z"
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

IconFlag24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFlag = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconFlag16 className={className} color={color} />

        case 24:
            return <IconFlag24 className={className} color={color} />

        default:
            return null
    }
}

IconFlag.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconFlag.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconFlag }
