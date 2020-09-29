import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDelete16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13.5 3c.2761424 0 .5.22385763.5.5s-.2238576.5-.5.5h-.5v10c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1v-10h-.5c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5zm-1.5 1h-8v10h8zm-5 2v6h-1v-6zm3 0v6h-1v-6zm-.5-5c.27614237 0 .5.22385763.5.5s-.22385763.5-.5.5h-3c-.27614237 0-.5-.22385763-.5-.5s.22385763-.5.5-.5z"
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

IconDelete16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDelete24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 5c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-1v13c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2v-13h-1c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-3 2h-10v13h10zm-6 2v8h-1v-8zm3 0v8h-1v-8zm1-7v2h-6v-2z"
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

IconDelete24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDelete = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconDelete16 className={className} color={color} />

        case 24:
            return <IconDelete24 className={className} color={color} />

        default:
            return null
    }
}

IconDelete.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDelete.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconDelete }
