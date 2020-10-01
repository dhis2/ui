import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationBarStacked16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit" fillRule="evenodd">
            <path d="m0 0h1v15h15v1h-16z" fill="inherit" />
            <path
                d="m7 10v3h-6v-3zm7 0v3h-6v-3zm-10-5v3h-3v-3zm7 0v3h-6v-3zm-6-5v3h-4v-3zm4 0v3h-3v-3z"
                fill="inherit"
            />
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconVisualizationBarStacked16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationBarStacked = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationBarStacked16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconVisualizationBarStacked.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationBarStacked.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationBarStacked }
