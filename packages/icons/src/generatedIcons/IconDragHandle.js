import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDragHandle16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6 11c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1-1-.4477153-1-1 .44771525-1 1-1zm4 0c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-4-4c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm4 0c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-4-4c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm4 0c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z"
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

IconDragHandle16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDragHandle24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9.5 16c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm5 0c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.6715729-1.5 1.5-1.5zm-5-6c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm5 0c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.6715729-1.5 1.5-1.5zm-5-6c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5zm5 0c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5-1.5-.67157288-1.5-1.5.6715729-1.5 1.5-1.5z"
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

IconDragHandle24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDragHandle = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconDragHandle16 className={className} color={color} />

        case 24:
            return <IconDragHandle24 className={className} color={color} />

        default:
            return null
    }
}

IconDragHandle.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDragHandle.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconDragHandle }
