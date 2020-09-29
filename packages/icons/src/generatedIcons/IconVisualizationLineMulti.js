import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationLineMulti16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path d="m0 0h1v15h15v1h-16z" fill="inherit" />
            <g fill="inherit" fillRule="nonzero">
                <path d="m2.685 2.695 3.398 7.646 3.813-6.671 4.69 5.861-1.172.938-3.31-4.139-4.188 7.328-4.601-10.353z" />
                <path d="m13.329 4.665 1.342.67-4.578 9.156-4.21-6.314-3.353 3.353-1.06-1.06 4.647-4.647 3.79 5.685z" />
            </g>
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconVisualizationLineMulti16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationLineMulti = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationLineMulti16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconVisualizationLineMulti.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationLineMulti.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationLineMulti }
