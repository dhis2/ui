import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLock16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c1.65685425 0 3 1.34314575 3 3v2h1c.5522847 0 1 .50367966 1 1.125v6.75c0 .6213203-.4477153 1.125-1 1.125h-8c-.55228475 0-1-.5036797-1-1.125v-6.75c0-.62132034.44771525-1.125 1-1.125h1v-2c0-1.65685425 1.34314575-3 3-3zm4 6h-8v7h8zm-4 2c.55228475 0 1 .44771525 1 1 0 .5522847-.44771525 1-1 1s-1-.4477153-1-1c0-.55228475.44771525-1 1-1zm0-7c-1.0543618 0-1.91816512.81587779-1.99451426 1.85073766l-.00548574.14926234v2h4v-2c0-1.1045695-.8954305-2-2-2z"
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

IconLock16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLock24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 3c2.209139 0 4 1.790861 4 4v2h1c1.1045695 0 2 .8954305 2 2v8c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-8c0-1.1045695.8954305-2 2-2h1v-2c0-2.209139 1.790861-4 4-4zm5 8h-10v8h10zm-5 2c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-8c-1.0543618 0-1.9181651.81587779-1.9945143 1.85073766l-.0054857.14926234v2h4v-2c0-1.1045695-.8954305-2-2-2z"
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

IconLock24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLock = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLock16 className={className} color={color} />

        case 24:
            return <IconLock24 className={className} color={color} />

        default:
            return null
    }
}

IconLock.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLock.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLock }
