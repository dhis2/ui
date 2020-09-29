import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconSubscribe16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8.5 1 .00070198 1.02475737c2.52632482.25118732 4.49929802 2.38280869 4.49929802 4.97524263v2l1.5 2v2l-4.0500973.0004345c-.231803 1.1409037-1.24057725 1.9995655-2.4499027 1.9995655s-2.21809967-.8586618-2.44990271-1.9995655l-4.05009729-.0004345v-2l1.5-2v-2c0-2.59277672 1.97349494-4.72461899 4.50030016-4.97534217l-.00030016-1.02465783zm.913 12h-2.827l.01883645.0520151c.20296783.5125531.68021461.8866048 1.25070354.9411183l.14446001.0068666c.6335031 0 1.17528173-.3927191 1.39516355-.9479849zm-1.413-10c-2.14219539 0-3.89107888 1.68396847-3.99510469 3.80035966l-.00489531.19964034v2.33333333l-1.5 1.99966667v.667h11v-.667l-1.5-1.99966667v-2.33333333c0-2.209139-1.790861-4-4-4z"
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

IconSubscribe16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSubscribe24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 1 .0010101 2.07103341c3.3918017.48566424 5.9989899 3.40284469 5.9989899 6.92896659v2l2 3v3h-5c0 2.209139-1.790861 4-4 4s-4-1.790861-4-4h-5v-3l2-3v-2c0-3.52646906 2.60770164-6.44387676 5.9999918-6.92910996l.0000082-2.07089004zm1 17h-4c0 1.1045695.8954305 2 2 2 1.0543618 0 1.9181651-.8158778 1.9945143-1.8507377zm-2-13c-2.6887547 0-4.88181811 2.12230671-4.99538049 4.78311038l-.00461951.21688962v2.6055513l-2 2.9994487v.395h14v-.393l-2-3.0014487v-2.6055513c0-2.76142375-2.2385763-5-5-5z"
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

IconSubscribe24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSubscribe = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconSubscribe16 className={className} color={color} />

        case 24:
            return <IconSubscribe24 className={className} color={color} />

        default:
            return null
    }
}

IconSubscribe.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconSubscribe.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconSubscribe }
