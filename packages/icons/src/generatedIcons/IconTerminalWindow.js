import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconTerminalWindow16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 2c.5522847 0 1 .44771525 1 1v10c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm0 4h-12v7h12zm-8.14644661 1.14644661 2.35355339 2.35355339-2.35355339 2.3535534-.70710678-.7071068 1.64655339-1.6464466-1.64655339-1.64644661zm8.14644661-4.14644661h-12v2h12z"
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

IconTerminalWindow16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTerminalWindow24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 4c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2zm0 6h-16v8h16zm-10.79289322.7928932 3.20710682 3.2071068-3.20710682 3.2071068-1.41421356-1.4142136 1.79210678-1.7928932-1.79210678-1.7928932zm10.79289322-4.7928932h-16v2h16z"
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

IconTerminalWindow24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTerminalWindow = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconTerminalWindow16 className={className} color={color} />

        case 24:
            return <IconTerminalWindow24 className={className} color={color} />

        default:
            return null
    }
}

IconTerminalWindow.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconTerminalWindow.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconTerminalWindow }
