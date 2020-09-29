import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconArrowUp16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8.2843055 1.58859116.06924789.05785545 5.00000001 5c.1952621.19526215.1952621.51184463 0 .70710678-.1735664.17356635-.4429908.1928515-.6378589.05785545l-.0692479-.05785545-4.1464466-4.14555339v10.792c0 .2761424-.22385763.5-.5.5-.24545989 0-.44960837-.1768752-.49194433-.4101244l-.00805567-.0898756v-10.794l-4.14644661 4.14755339c-.17356635.17356635-.44299075.1928515-.63785889.05785545l-.06924789-.05785545c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 5-5c.17356635-.17356635.44299075-.1928515.63785889-.05785545z"
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

IconArrowUp16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconArrowUp24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12.6128994 4.20970461.0942074.08318861 6 5.99999998c.3905243.3905243.3905243 1.0236893 0 1.4142136-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-4.2928932-4.2921068v11.585c0 .5522847-.4477153 1-1 1-.5128358 0-.9355072-.3860402-.9932723-.8833789l-.0067277-.1166211v-11.587l-4.29289322 4.2941068c-.36048396.3604839-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886c-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074 5.99999998-5.99999998c.360484-.36048396.927715-.3882135 1.3200062-.08318861z"
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

IconArrowUp24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconArrowUp = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconArrowUp16 className={className} color={color} />

        case 24:
            return <IconArrowUp24 className={className} color={color} />

        default:
            return null
    }
}

IconArrowUp.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconArrowUp.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconArrowUp }
