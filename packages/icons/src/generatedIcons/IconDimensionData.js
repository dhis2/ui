import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDimensionData16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 1c.5522847 0 1 .44771525 1 1v11c0 .5522847-.4477153 1-1 1h-8c-.55228475 0-1-.4477153-1-1v-11c0-.55228475.44771525-1 1-1zm-8 9v3h8v-3zm2 1v1h-1v-1zm0-4v1h-1v-1zm6-5h-8v3h8zm-6 1v1h-1v-1zm-2 6h8v-3h-8z"
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

IconDimensionData16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDimensionData = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconDimensionData16 className={className} color={color} />

        default:
            return null
    }
}

IconDimensionData.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDimensionData.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconDimensionData }
