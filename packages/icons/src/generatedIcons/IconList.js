import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconList16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m2 10.5c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1-1-.4477153-1-1 .44771525-1 1-1zm13 .5v1h-10v-1zm-13-4.5c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm13 .5v1h-10v-1zm-13-4.5c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm13 .5v1h-10v-1z"
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

IconList16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconList24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4.5 16.5c.82842712 0 1.5.6715729 1.5 1.5s-.67157288 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.67157288-1.5 1.5-1.5zm15.5.5c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-11c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-15.5-6.5c.82842712 0 1.5.6715729 1.5 1.5s-.67157288 1.5-1.5 1.5-1.5-.6715729-1.5-1.5.67157288-1.5 1.5-1.5zm15.5.5c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-11c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1zm-15.5-6.5c.82842712 0 1.5.67157288 1.5 1.5s-.67157288 1.5-1.5 1.5-1.5-.67157288-1.5-1.5.67157288-1.5 1.5-1.5zm15.5.5c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1h-11c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1z"
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

IconList24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconList = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconList16 className={className} color={color} />

        case 24:
            return <IconList24 className={className} color={color} />

        default:
            return null
    }
}

IconList.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconList.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconList }
