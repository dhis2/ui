import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconCheckmark16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13.6464466 3.64644661c.1952622-.19526215.5118446-.19526215.7071068 0 .1735663.17356635.1928515.44299075.0578554.63785889l-.0578554.06924789-8.00000001 8.00000001c-.17356635.1735663-.44299075.1928515-.63785889.0578554l-.06924789-.0578554-3-3.00000001c-.19526215-.19526215-.19526215-.51184463 0-.70710678.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 2.64644661 2.64655339z"
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

IconCheckmark16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCheckmark24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19.2928932 6.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0 .3604839.36048396.3882135.92771502.0831886 1.32000622l-.0831886.09420734-10 10.00000002c-.360484.3604839-.92771504.3882135-1.32000624.0831886l-.09420734-.0831886-5-5c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136.36048396-.3604839.92771502-.3882135 1.32000622-.0831886l.09420734.0831886 4.29289322 4.2921068z"
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

IconCheckmark24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCheckmark = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconCheckmark16 className={className} color={color} />

        case 24:
            return <IconCheckmark24 className={className} color={color} />

        default:
            return null
    }
}

IconCheckmark.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconCheckmark.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconCheckmark }
