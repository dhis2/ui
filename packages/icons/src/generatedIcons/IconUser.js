import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconUser16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9 8c2.7614237 0 5 2.2385763 5 5v1h-12v-1c0-2.7614237 2.23857625-5 5-5zm0 1h-2c-2.14219539 0-3.89107888 1.6839685-3.99510469 3.8003597l-.00489531.1996403h10c0-2.1421954-1.6839685-3.89107888-3.80035966-3.99510469zm-1-8c1.65685425 0 3 1.34314575 3 3s-1.34314575 3-3 3-3-1.34314575-3-3 1.34314575-3 3-3zm0 1c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconUser16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconUser24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 12c3.3137085 0 6 2.6862915 6 6v3h-16v-3c0-3.3137085 2.6862915-6 6-6zm0 2h-4c-2.14219539 0-3.89107888 1.6839685-3.99510469 3.8003597l-.00489531.1996403v1h12v-1c0-2.1421954-1.6839685-3.8910789-3.8003597-3.9951047zm-2-11c2.209139 0 4 1.790861 4 4s-1.790861 4-4 4-4-1.790861-4-4 1.790861-4 4-4zm0 2c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z"
            fill="inherit"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconUser24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconUser = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconUser16 className={className} color={color} />

        case 24:
            return <IconUser24 className={className} color={color} />

        default:
            return null
    }
}

IconUser.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconUser.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconUser }
