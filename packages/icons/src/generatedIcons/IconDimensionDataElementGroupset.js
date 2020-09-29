import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDimensionDataElementGroupset16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm0 1h-12v12h12zm-3 7c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm-4 0v4h-4v-4zm4 1c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm-5 0h-2v2h2zm-1-7c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm8 0v4h-4v-4zm-8 1c-.55228475 0-1 .44771525-1 1s.44771525 1 1 1 1-.44771525 1-1-.44771525-1-1-1zm7 0h-2v2h2z"
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

IconDimensionDataElementGroupset16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDimensionDataElementGroupset = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return (
                <IconDimensionDataElementGroupset16
                    className={className}
                    color={color}
                />
            )

        default:
            return null
    }
}

IconDimensionDataElementGroupset.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDimensionDataElementGroupset.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16]),
}

export { IconDimensionDataElementGroupset }
