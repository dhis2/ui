import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLockOpen16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c1.65685425 0 3 1.34314575 3 3h-1c0-1.1045695-.8954305-2-2-2-1.0543618 0-1.91816512.81587779-1.99451426 1.85073766l-.00548574.14926234v2h6c.5522847 0 1 .50367966 1 1.125v6.75c0 .6213203-.4477153 1.125-1 1.125h-8c-.55228475 0-1-.5036797-1-1.125v-6.75c0-.62132034.44771525-1.125 1-1.125h1v-2c0-1.65685425 1.34314575-3 3-3zm4 6h-8v7h8z"
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

IconLockOpen16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLockOpen24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 7c0-2.209139 1.790861-4 4-4s4 1.790861 4 4h-2c0-1.1045695-.8954305-2-2-2-1.0543618 0-1.9181651.81587779-1.9945143 1.85073766l-.0054857.14926234v2h7c1.1045695 0 2 .8954305 2 2v8c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-8c0-1.1045695.8954305-2 2-2h1zm9 4h-10v8h10z"
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

IconLockOpen24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLockOpen = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLockOpen16 className={className} color={color} />

        case 24:
            return <IconLockOpen24 className={className} color={color} />

        default:
            return null
    }
}

IconLockOpen.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLockOpen.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLockOpen }
