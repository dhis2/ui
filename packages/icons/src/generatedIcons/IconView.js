import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconView16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 3c4 0 7 4 7 5s-3 5-7 5-7-4-7-5 3-5 7-5zm0 1c-1.52041056 0-3.03348161.70049586-4.33103527 1.86829415-.52698321.47428489-.98237493.99834678-1.30566444 1.48328105-.23627001.35440502-.36330029.64436544-.36330029.6484248l.04168452.09115762c.05514008.1133692.16410243.32099717.32161577.55726718.32328951.48493427.77868123 1.00899616 1.30566444 1.4832811 1.29755366 1.1677982 2.81062471 1.8682941 4.33103527 1.8682941s3.0334816-.7004959 4.3310353-1.8682941c.5269832-.47428494.9823749-.99834683 1.3056644-1.4832811.23627-.35440502.3633003-.64436544.3633003-.6484248l-.0416845-.09115762c-.0551401-.1133692-.1641025-.32099717-.3216158-.55726718-.3232895-.48493427-.7786812-1.00899616-1.3056644-1.48328105-1.2975537-1.16779829-2.81062474-1.86829415-4.3310353-1.86829415zm0 1c1.65685425 0 3 1.34314575 3 3s-1.34314575 3-3 3-3-1.34314575-3-3 1.34314575-3 3-3zm0 1c-1.1045695 0-2 .8954305-2 2s.8954305 2 2 2 2-.8954305 2-2-.8954305-2-2-2z"
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

IconView16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconView24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 5c5 0 10 4 10 7s-5 7-10 7-10-4-10-7 5-7 10-7zm0 2c-3.77852722 0-8 3.0957467-8 5s4.22147278 5 8 5c3.7785272 0 8-3.0957467 8-5s-4.2214728-5-8-5zm0 2c1.6568542 0 3 1.3431458 3 3s-1.3431458 3-3 3-3-1.3431458-3-3 1.3431458-3 3-3zm0 2c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1z"
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

IconView24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconView = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconView16 className={className} color={color} />

        case 24:
            return <IconView24 className={className} color={color} />

        default:
            return null
    }
}

IconView.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconView.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconView }
