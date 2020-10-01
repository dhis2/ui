import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationColumnStacked16 = ({ className, color }) => (
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
                d="m6 13v2h-3v-2zm5-4v6h-3v-6zm5-1v7h-3v-7zm-10-1v5h-3v-5zm5-6v7h-3v-7zm5 3v3h-3v-3z"
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

IconVisualizationColumnStacked16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationColumnStacked = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationColumnStacked16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconVisualizationColumnStacked.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationColumnStacked.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationColumnStacked }
