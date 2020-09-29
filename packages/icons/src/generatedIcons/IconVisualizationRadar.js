import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconVisualizationRadar16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="none" fillRule="evenodd">
            <path
                d="m8 1c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 1c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm0 3c1.65685425 0 3 1.34314575 3 3s-1.34314575 3-3 3-3-1.34314575-3-3 1.34314575-3 3-3zm0 1c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z"
                fill="inherit"
                fillRule="nonzero"
            />
            <path
                d="m4 10c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm4-10c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
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

IconVisualizationRadar16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconVisualizationRadar = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconVisualizationRadar16 className={className} color={color} />
            )

        default:
            return null
    }
}

IconVisualizationRadar.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconVisualizationRadar.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconVisualizationRadar }
