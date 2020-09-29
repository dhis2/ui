import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconArchive16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 1c.5522847 0 1 .44771525 1 1v3h-1v9c0 .5522847-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1v-9h-1v-3c0-.55228475.44771525-1 1-1zm-1 4h-10v9h10zm-3 3v1h-4v-1zm4-6h-12v2h12z"
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

IconArchive16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconArchive24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 3c1.1045695 0 2 .8954305 2 2v4h-1v10c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-10h-1v-4c0-1.1045695.8954305-2 2-2zm-1 6h-12v10h12zm-4 3v2h-4v-2zm5-7h-14v2h14z"
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

IconArchive24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconArchive = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconArchive16 className={className} color={color} />

        case 24:
            return <IconArchive24 className={className} color={color} />

        default:
            return null
    }
}

IconArchive.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconArchive.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconArchive }
