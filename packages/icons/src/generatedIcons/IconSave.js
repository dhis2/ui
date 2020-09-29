import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconSave16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11 1 4 4v9c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm-.415 1h-1.585v3c0 .55228475-.44771525 1-1 1h-6v8h2v-4c0-.55228475.44771525-1 1-1h6c.5522847 0 1 .44771525 1 1v4h2v-8.585zm.415 8h-6v4h6zm-3-8h-6v3h6z"
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

IconSave16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSave24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m15 3 6 6v10c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm-.829 2h-1.171v2c0 1.1045695-.8954305 2-2 2h-6v10h2v-4c0-1.1045695.8954305-2 2-2h6c1.1045695 0 2 .8954305 2 2v4h2v-9.171zm.829 10h-6v4h6zm-4-10h-6v2h6z"
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

IconSave24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSave = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconSave16 className={className} color={color} />

        case 24:
            return <IconSave24 className={className} color={color} />

        default:
            return null
    }
}

IconSave.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconSave.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconSave }
