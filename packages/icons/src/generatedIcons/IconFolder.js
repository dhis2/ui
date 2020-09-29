import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconFolder16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m5.58578644 2c.26521649 0 .5195704.10535684.70710678.29289322l1.70710678 1.70710678h6c.5522847 0 1 .44771525 1 1v8c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm0 1h-3.58578644v10h12v-8h-6.41421356z"
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

IconFolder16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFolder24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9.46481624 3c.33435319 0 .64658456.16710114.83205026.4452998l1.7031335 2.5547002h8c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-13c0-1.1045695.8954305-2 2-2zm1.46481626 5-2.0006325-3h-4.929v13h16v-10z"
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

IconFolder24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFolder = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconFolder16 className={className} color={color} />

        case 24:
            return <IconFolder24 className={className} color={color} />

        default:
            return null
    }
}

IconFolder.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconFolder.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconFolder }
