import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconFile16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9 1 4 4v9c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm-1 5v-4h-4v12h8v-8zm1-3.585v2.585h2.586z"
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

IconFile16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFile24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 2 6 6v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-16c0-1.1045695.8954305-2 2-2zm-8 2v16h12v-10h-4c-1.0543618 0-1.9181651-.81587779-1.9945143-1.85073766l-.0054857-.14926234v-4zm11.171 4-3.171-3.171v3.171z"
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

IconFile24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconFile = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconFile16 className={className} color={color} />

        case 24:
            return <IconFile24 className={className} color={color} />

        default:
            return null
    }
}

IconFile.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconFile.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconFile }
