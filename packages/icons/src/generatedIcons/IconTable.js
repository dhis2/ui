import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconTable16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm-6.5 9h-5.5v4h5.5zm6.5 0h-5.5v4h5.5zm-12-5v4h5.5v-4zm12-3h-12v2h12zm-5.5 7h5.5v-4h-5.5z"
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

IconTable16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTable24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 3c1.1045695 0 2 .8954305 2 2v14c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm-14 12v4h6v-4zm14 0h-6v4h6zm0-6h-6v4h6zm0-4h-14v2h14zm-14 8h6v-4h-6z"
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

IconTable24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTable = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconTable16 className={className} color={color} />

        case 24:
            return <IconTable24 className={className} color={color} />

        default:
            return null
    }
}

IconTable.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconTable.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconTable }
