import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationColumnMulti16 = ({ className, color }) => (
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
                d="m4 11v4h-2v-4zm3-2v6h-2v-6zm6-7v13h-2v-13zm3 4v9h-2v-9z"
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

IconVisualizationColumnMulti16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationColumnMulti = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationColumnMulti16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconVisualizationColumnMulti.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationColumnMulti.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationColumnMulti }
