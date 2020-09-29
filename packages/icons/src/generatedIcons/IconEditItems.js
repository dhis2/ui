import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconEditItems16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4 11v1h-2v2h2v1h-3v-4zm8.5-5.20710678 2.7071068 2.70710678-6.50000002 6.5h-2.70710678v-2.7071068zm0 1.41410678-5.5 5.499v1.294h1.292l5.501-5.5zm-6.5-1.207v1h-4v2h4v1h-5v-4zm5-5v4h-10v-4zm-1 1h-8v2h8z"
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

IconEditItems16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconEditItems24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m17.267767 9.69669914c.7810485-.78104858 2.0473785-.78104858 2.8284271 0l1.4142135 1.41421356c.7810486.7810486.7810486 2.0473785 0 2.8284271l-8.0710678 8.0710678h-4.24264066v-4.2426406zm-11.267767 6.30330086v2h-2v2h2v2h-3c-.55228475 0-1-.4477153-1-1v-4c0-.5522847.44771525-1 1-1zm12.6819805-4.8890873-7.4847253 7.4847253v1.4142135l1.4149207-.0007071 7.4840182-7.4840181zm-8.6819805-2.1109127v2h-6v2h6v2h-7c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1zm5-7c.5522847 0 1 .44771525 1 1v4c0 .55228475-.4477153 1-1 1h-12c-.55228475 0-1-.44771525-1-1v-4c0-.55228475.44771525-1 1-1zm-1 2h-10v2h10z"
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

IconEditItems24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconEditItems = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconEditItems16 className={className} color={color} />

        case 24:
            return <IconEditItems24 className={className} color={color} />

        default:
            return null
    }
}

IconEditItems.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconEditItems.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconEditItems }
