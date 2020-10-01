import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationColumn16 = ({ className, color }) => (
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
                d="m16 8v7h-3v-7zm-5-6v13h-3v-13zm-5 2v11h-3v-11z"
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

IconVisualizationColumn16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationColumn = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationColumn16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconVisualizationColumn.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationColumn.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationColumn }
