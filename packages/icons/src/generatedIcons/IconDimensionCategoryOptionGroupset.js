import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDimensionCategoryOptionGroupset16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm0 1h-12v12h12zm-5 8-1 1-1-1zm2-2-1 1h-4l-1-1zm2-2-1 1h-8l-1-1z"
            fill="inherit"
            fillRule="evenodd"
        />
        <style jsx>{`
            svg {
                fill: ${color};
                pointer-events: none;
            }
        `}</style>
    </svg>
)

IconDimensionCategoryOptionGroupset16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDimensionCategoryOptionGroupset = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconDimensionCategoryOptionGroupset16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconDimensionCategoryOptionGroupset.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDimensionCategoryOptionGroupset.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconDimensionCategoryOptionGroupset }
