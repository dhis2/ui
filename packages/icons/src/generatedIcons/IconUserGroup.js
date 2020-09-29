import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconUserGroup16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9 10c1.6568542 0 3 1.3431458 3 3v1h-8v-1c0-1.6568542 1.34314575-3 3-3zm0 1h-2c-1.0543618 0-1.91816512.8158778-1.99451426 1.8507377l-.00548574.1492623h6c0-1.0543618-.8158778-1.9181651-1.85073766-1.9945143zm-5-5v1h-1c-1.0543618 0-1.91816512.81587779-1.99451426 1.85073766l-.00548574.14926234h3v1h-4v-1c0-1.65685425 1.34314575-3 3-3zm9 0c1.6568542 0 3 1.34314575 3 3v1h-4v-1h3c0-1.0543618-.8158778-1.91816512-1.8507377-1.99451426l-.1492623-.00548574h-1v-1zm-5-1c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0 1c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1 1-.44771525 1-1-.44771525-1-1-1zm-4-5c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm8 0c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm-8 1c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1 1-.44771525 1-1-.44771525-1-1-1zm8 0c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1 1-.44771525 1-1-.4477153-1-1-1z"
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

IconUserGroup16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconUserGroup24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 15c2.209139 0 4 1.790861 4 4v2h-10v-2c0-2.209139 1.790861-4 4-4zm0 2h-2c-1.0543618 0-1.91816512.8158778-1.99451426 1.8507377l-.00548574.1492623h6c0-1.0543618-.8158778-1.9181651-1.8507377-1.9945143zm-6-8v2h-1c-1.0543618 0-1.91816512.8158778-1.99451426 1.8507377l-.00548574.1492623h3v2h-5v-2c0-2.209139 1.790861-4 4-4zm11 0c2.209139 0 4 1.790861 4 4v2h-5v-2h3c0-1.0543618-.8158778-1.9181651-1.8507377-1.9945143l-.1492623-.0054857h-1v-2zm-6-1c1.6568542 0 3 1.34314575 3 3 0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3c0-1.65685425 1.3431458-3 3-3zm0 2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm-5-8c1.65685425 0 3 1.34314575 3 3s-1.34314575 3-3 3-3-1.34314575-3-3 1.34314575-3 3-3zm10 0c1.6568542 0 3 1.34314575 3 3s-1.3431458 3-3 3-3-1.34314575-3-3 1.3431458-3 3-3zm-10 2c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1 1-.44771525 1-1-.44771525-1-1-1zm10 0c-.5522847 0-1 .44771525-1 1s.4477153 1 1 1 1-.44771525 1-1-.4477153-1-1-1z"
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

IconUserGroup24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconUserGroup = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconUserGroup16 className={className} color={color} />

        case 24:
            return <IconUserGroup24 className={className} color={color} />

        default:
            return null
    }
}

IconUserGroup.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconUserGroup.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconUserGroup }
