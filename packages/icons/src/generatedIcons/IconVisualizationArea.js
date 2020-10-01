import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationArea16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit" fillRule="evenodd">
            <path d="m0 0h1v15h15v1h-16z" fill="inherit" />
            <path d="m2 14v-11l4 5 4-2 5 5v3z" fill="inherit" />
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconVisualizationArea16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationArea = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationArea16 className={className} color={color} />
            )

        default:
            return null
    }
}

IconVisualizationArea.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationArea.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationArea }
