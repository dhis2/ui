import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLayoutColumns16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 1c.5522847 0 1 .48215488 1 1.07692308v11.84615382c0 .5947682-.4477153 1.0769231-1 1.0769231h-10c-.55228475 0-1-.4821549-1-1.0769231v-11.84615382c0-.5947682.44771525-1.07692308 1-1.07692308zm-7.5 1h-2.5v12h2.5zm1 0v12h3v-12zm4 12h2.5v-12h-2.5z"
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

IconLayoutColumns16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLayoutColumns24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m18 3c1.1045695 0 2 .8954305 2 2v14c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm-9.5 2h-2.5v14h2.5zm2 0v14h3v-14zm5 14h2.5v-14h-2.5z"
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

IconLayoutColumns24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLayoutColumns = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLayoutColumns16 className={className} color={color} />

        case 24:
            return <IconLayoutColumns24 className={className} color={color} />

        default:
            return null
    }
}

IconLayoutColumns.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLayoutColumns.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLayoutColumns }
