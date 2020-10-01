import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationBar16 = ({ className, color }) => (
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
                d="m14 10v3h-13v-3zm-3-5v3h-10v-3zm-5-5v3h-5v-3z"
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

IconVisualizationBar16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationBar = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationBar16 className={className} color={color} />
            )

        default:
            return null
    }
}

IconVisualizationBar.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationBar.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationBar }
