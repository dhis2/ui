import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationLine16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="m0 0h1v15h15v1h-16z" fill="inherit" />
            <path
                d="m2.643 3.614 2.595 4.325 2.936-1.957 3 3.999 2.41-1.605.832 1.248-3.59 2.394-3-4-3.064 2.042-3.405-5.674z"
                fill="inherit"
                fillRule="nonzero"
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

IconVisualizationLine16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationLine = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationLine16 className={className} color={color} />
            )

        default:
            return null
    }
}

IconVisualizationLine.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationLine.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationLine }
