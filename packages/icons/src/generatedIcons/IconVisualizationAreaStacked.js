import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationAreaStacked16 = ({ className, color }) => (
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
                d="m15 9v5h-13v-3l4-2 4 3zm-5-6 5 2v2l-5 3-4-3-4 2v-6l4 2z"
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

IconVisualizationAreaStacked16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationAreaStacked = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationAreaStacked16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconVisualizationAreaStacked.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationAreaStacked.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationAreaStacked }
