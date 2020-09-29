import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconCopy16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit" fillRule="nonzero">
            <path d="m14 3c.5522847 0 1 .44771525 1 1v10c0 .5522847-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm0 1h-10v10h10z" />
            <path d="m11 1v1h-9v9h-1v-9c0-.55228475.44771525-1 1-1z" />
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconCopy16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCopy24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g fill="inherit" fillRule="nonzero">
            <path d="m20 6c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2zm0 2h-12v12h12z" />
            <path d="m14 2v2h-10v10h-2v-10c0-1.1045695.8954305-2 2-2z" />
        </g>
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconCopy24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCopy = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconCopy16 className={className} color={color} />

        case 24:
            return <IconCopy24 className={className} color={color} />

        default:
            return null
    }
}

IconCopy.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconCopy.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconCopy }
