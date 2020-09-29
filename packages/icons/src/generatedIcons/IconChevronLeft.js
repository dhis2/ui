import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconChevronLeft16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m9.14644661 4.14644661c.19526215-.19526215.51184463-.19526215.70710678 0 .17356631.17356635.19285151.44299075.05785545.63785889l-.05785545.06924789-3.14655339 3.14644661 3.14655339 3.1464466c.17356631.1735664.19285151.4429908.05785545.6378589l-.05785545.0692479c-.17356635.1735663-.44299075.1928515-.63785889.0578554l-.06924789-.0578554-3.5-3.50000001c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789z"
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

IconChevronLeft16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronLeft24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13.2928932 6.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0 .3604839.36048396.3882135.92771502.0831886 1.32000622l-.0831886.09420734-4.2921068 4.29289322 4.2921068 4.2928932c.3604839.360484.3882135.927715.0831886 1.3200062l-.0831886.0942074c-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-4.99999998-5c-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074z"
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

IconChevronLeft24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronLeft = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconChevronLeft16 className={className} color={color} />

        case 24:
            return <IconChevronLeft24 className={className} color={color} />

        default:
            return null
    }
}

IconChevronLeft.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconChevronLeft.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconChevronLeft }
