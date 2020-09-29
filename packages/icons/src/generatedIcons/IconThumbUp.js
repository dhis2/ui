import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconThumbUp16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9.21922359 2c.45886765 0 .85885071.31229737.97014251.75746437l.8106339 3.24253563h2c1.1045695 0 2 .8954305 2 2v2c0 2.209139-1.790861 4-4 4h-10v-7h3l3-2v-3zm-5.21922359 6h-2v5h2zm5.219-5h-1.219v2.53518376l-3 1.99981624v5.465h6c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-2c0-.51283584-.3860402-.93550716-.8833789-.99327227l-.1166211-.00672773h-2.7807764z"
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

IconThumbUp16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconThumbUp24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12.5405883 3c1.4300431 0 2.6612875 1.009379 2.941742 2.41165159l.5176697 2.58834841h3c1.1045695 0 2 .8954305 2 2v6c0 2.7614237-2.2385763 5-5 5h-12c-.55228475 0-1-.4477153-1-1v-9c0-.5522847.44771525-1 1-1h4l2-2 1-5zm-7.5405883 9v7h1v-7zm3 7h8c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-6h-4.6396078l-.8392232-4.19611614c-.0856945-.42847218-.4376981-.74689777-.8629361-.7969932l-.0202329-.00189066-.795597 3.98102415-3.01397588 3.01397585h-.82842712z"
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

IconThumbUp24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconThumbUp = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconThumbUp16 className={className} color={color} />

        case 24:
            return <IconThumbUp24 className={className} color={color} />

        default:
            return null
    }
}

IconThumbUp.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconThumbUp.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconThumbUp }
