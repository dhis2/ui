import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconChevronRight16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6.14644661 4.14644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 3.50000001 3.5c.1735663.17356635.1928515.44299075.0578554.63785889l-.0578554.06924789-3.50000001 3.50000001c-.19526215.1952621-.51184463.1952621-.70710678 0-.17356635-.1735664-.1928515-.4429908-.05785545-.6378589l.05785545-.0692479 3.14655339-3.1464466-3.14655339-3.14644661c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889z"
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

IconChevronRight16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronRight24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9.29289322 6.29289322c.36048396-.36048396.92771498-.3882135 1.32000618-.08318861l.0942074.08318861 5 4.99999998c.3604839.360484.3882135.927715.0831886 1.3200062l-.0831886.0942074-5 5c-.3905243.3905243-1.02368929.3905243-1.41421358 0-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074 4.29210678-4.2928932-4.29210678-4.29289322c-.36048396-.36048396-.3882135-.92771502-.08318861-1.32000622z"
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

IconChevronRight24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronRight = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconChevronRight16 className={className} color={color} />

        case 24:
            return <IconChevronRight24 className={className} color={color} />

        default:
            return null
    }
}

IconChevronRight.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconChevronRight.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconChevronRight }
