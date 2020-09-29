import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconCalendar16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.5 2c.2761424 0 .5.22385763.5.5v1.5h1c.5522847 0 1 .44771525 1 1v8c0 .5522847-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1v-8c0-.55228475.44771525-1 1-1h1v-1.5c0-.27614237.22385763-.5.5-.5s.5.22385763.5.5v1.5h6v-1.5c0-.27614237.2238576-.5.5-.5zm1.5 4h-10v7h10zm-8 4c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1-1-.4477153-1-1 .44771525-1 1-1zm3 0c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1-1-.4477153-1-1 .44771525-1 1-1zm-3-3c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm3 0c.55228475 0 1 .44771525 1 1s-.44771525 1-1 1-1-.44771525-1-1 .44771525-1 1-1zm3 0c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1-1-.44771525-1-1 .4477153-1 1-1z"
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

IconCalendar16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCalendar24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m17 2c.5522847 0 1 .44771525 1 1v2h1c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2h1v-2c0-.55228475.44771525-1 1-1s1 .44771525 1 1v2h8v-2c0-.55228475.4477153-1 1-1zm2 7h-14v10h14zm-6 6v2h-2v-2zm-4 0v2h-2v-2zm0-4v2h-2v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"
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

IconCalendar24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCalendar = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconCalendar16 className={className} color={color} />

        case 24:
            return <IconCalendar24 className={className} color={color} />

        default:
            return null
    }
}

IconCalendar.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconCalendar.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconCalendar }
