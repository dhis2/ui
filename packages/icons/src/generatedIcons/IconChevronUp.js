import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconChevronUp16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7.64644661 5.64644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 3.50000001 3.5c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356631-.4429908.19285151-.6378589.05785545l-.0692479-.05785545-3.1464466-3.14655339-3.14644661 3.14655339c-.17356635.17356631-.44299075.19285151-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789z"
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

IconChevronUp16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronUp24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.2928932 8.29289322c.360484-.36048396.927715-.3882135 1.3200062-.08318861l.0942074.08318861 5 4.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-4.2928932-4.2921068-4.29289322 4.2921068c-.36048396.3604839-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886c-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074z"
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

IconChevronUp24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronUp = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconChevronUp16 className={className} color={color} />

        case 24:
            return <IconChevronUp24 className={className} color={color} />

        default:
            return null
    }
}

IconChevronUp.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconChevronUp.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconChevronUp }
