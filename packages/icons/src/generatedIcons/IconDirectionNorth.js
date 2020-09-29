import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDirectionNorth16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 5c2.7614237 0 5 2.23857625 5 5 0 2.7614237-2.2385763 5-5 5-2.76142375 0-5-2.2385763-5-5 0-2.76142375 2.23857625-5 5-5zm0 1c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4zm-1 3.333v2.667h-1v-4h1l2 2.667v-2.667h1v4h-1zm.64644661-8.68655339c.19526215-.19526215.51184463-.19526215.70710678 0l2.50000001 2.5c.3149824.31498243.091899.85355339-.3535534.85355339h-5c-.44545243 0-.66853582-.53857096-.35355339-.85355339zm.35355339 1.06055339-1.294 1.293h2.587z"
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

IconDirectionNorth16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDirectionNorth24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 8c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7c-3.86599325 0-7-3.1340068-7-7s3.13400675-7 7-7zm0 2c-2.76142375 0-5 2.2385763-5 5s2.23857625 5 5 5c2.7614237 0 5-2.2385763 5-5s-2.2385763-5-5-5zm-1 2 2 3v-3h2v6h-2l-2-3v3h-2v-6zm1.6128994-9.79029539.0942074.08318861 3.5 3.5c.3905243.39052429.3905243 1.02368927 0 1.41421356-.360484.36048396-.927715.3882135-1.3200062.08318861l-.0942074-.08318861-2.7928932-2.79210678-2.79289322 2.79210678c-.36048396.36048396-.92771502.3882135-1.32000622.08318861l-.09420734-.08318861c-.36048396-.36048396-.3882135-.92771502-.08318861-1.32000622l.08318861-.09420734 3.49999998-3.5c.360484-.36048396.927715-.3882135 1.3200062-.08318861z"
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

IconDirectionNorth24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDirectionNorth = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconDirectionNorth16 className={className} color={color} />

        case 24:
            return <IconDirectionNorth24 className={className} color={color} />

        default:
            return null
    }
}

IconDirectionNorth.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDirectionNorth.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconDirectionNorth }
