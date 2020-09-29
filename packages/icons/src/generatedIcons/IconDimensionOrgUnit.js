import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDimensionOrgUnit16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6 1v4h-2v2h6v-1h4v4h-4v-2h-6v4h6v-1h4v4h-4v-2h-6.5c-.24545989 0-.44960837-.1768752-.49194433-.4101244l-.00805567-.0898756v-7.5h-1v-4zm7 11h-2v2h2zm0-5h-2v2h2zm-8-5h-2v2h2z"
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

IconDimensionOrgUnit16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDimensionOrgUnit = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconDimensionOrgUnit16 className={className} color={color} />
            )

        default:
            return null
    }
}

IconDimensionOrgUnit.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDimensionOrgUnit.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconDimensionOrgUnit }
