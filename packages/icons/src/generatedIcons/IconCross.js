import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconCross16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4.2843055 3.58859116.06924789.05785545 3.64644661 3.64655339 3.6464466-3.64655339c.1952622-.19526215.5118446-.19526215.7071068 0 .1735663.17356635.1928515.44299075.0578554.63785889l-.0578554.06924789-3.6465534 3.64644661 3.6465534 3.6464466c.1952621.1952622.1952621.5118446 0 .7071068-.1735664.1735663-.4429908.1928515-.6378589.0578554l-.0692479-.0578554-3.6464466-3.6465534-3.64644661 3.6465534c-.19526215.1952621-.51184463.1952621-.70710678 0-.17356635-.1735664-.1928515-.4429908-.05785545-.6378589l.05785545-.0692479 3.64655339-3.6464466-3.64655339-3.64644661c-.19526215-.19526215-.19526215-.51184463 0-.70710678.17356635-.17356635.44299075-.1928515.63785889-.05785545z"
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

IconCross16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCross24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6.61289944 5.20970461.09420734.08318861 5.29289322 5.29210678 5.2928932-5.29210678c.3905243-.39052429 1.0236893-.39052429 1.4142136 0 .3604839.36048396.3882135.92771502.0831886 1.32000622l-.0831886.09420734-5.2921068 5.29289322 5.2921068 5.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-5.2928932-5.2921068-5.29289322 5.2921068c-.39052429.3905243-1.02368927.3905243-1.41421356 0-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074 5.29210678-5.2928932-5.29210678-5.29289322c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356.36048396-.36048396.92771502-.3882135 1.32000622-.08318861z"
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

IconCross24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconCross = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconCross16 className={className} color={color} />

        case 24:
            return <IconCross24 className={className} color={color} />

        default:
            return null
    }
}

IconCross.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconCross.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconCross }
