import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconTextBox16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm0 1h-12v12h12zm-5.14133945 2.22727966 2.56391805 7.27272034h-1.4062487l-.60369261-1.79332215h-2.73437239l-.60014147 1.79332215h-1.40624866l2.56036687-7.27272034zm-.78480039 1.49147585h-.05681813l-.98366383 2.92968471h2.02414579z"
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

IconTextBox16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTextBox24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 3c1.1045695 0 2 .8954305 2 2v14c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm0 2h-14v14h14zm-5.7565395 2.2727356 3.0085199 8.7272644h-1.9772709l-.6477266-1.9900549h-3.1491448l-.64772662 1.9900549h-1.97727084l3.01278126-8.7272644zm-1.1548284 1.99431628h-.0681818l-1.0738626 3.30255362h2.215907z"
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

IconTextBox24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTextBox = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconTextBox16 className={className} color={color} />

        case 24:
            return <IconTextBox24 className={className} color={color} />

        default:
            return null
    }
}

IconTextBox.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconTextBox.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconTextBox }
