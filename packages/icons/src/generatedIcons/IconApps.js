import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconApps16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4 12v2h-2v-2zm5 0v2h-2v-2zm5 0v2h-2v-2zm-10-5v2h-2v-2zm5 0v2h-2v-2zm5 0v2h-2v-2zm-10-5v2h-2v-2zm5 0v2h-2v-2zm5 0v2h-2v-2z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconApps16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconApps24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7 16c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm6 0c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1zm6 0c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1zm-12-6c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1zm6 0c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1zm6 0c.5522847 0 1 .4477153 1 1v2c0 .5522847-.4477153 1-1 1h-2c-.5522847 0-1-.4477153-1-1v-2c0-.5522847.4477153-1 1-1zm-12-6c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1h-2c-.55228475 0-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1zm6 0c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1h-2c-.5522847 0-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1zm6 0c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1h-2c-.5522847 0-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconApps24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconApps = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconApps16 className={className} color={color} />

        case 24:
            return <IconApps24 className={className} color={color} />

        default:
            return null
    }
}

IconApps.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconApps.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconApps }
