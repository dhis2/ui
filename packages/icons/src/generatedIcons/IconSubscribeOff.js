import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconSubscribeOff16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m3.2658127 5.38721514.81416123.81298472c-.03962625.19526485-.06502864.3956943-.07507862.6001598l-.00489531.19964034v2.33333333l-1.5 1.99966667v.667h7.37844661l.99999999 1-.4285439.0004345c-.231803 1.1409037-1.24057725 1.9995655-2.4499027 1.9995655s-2.21809967-.8586618-2.44990271-1.9995655l-4.05009729-.0004345v-2l1.5-2v-2c0-.56431023.09348493-1.10678588.2658127-1.61278486zm-1.41225931-4.24076853 13.00000001 12.99999999-.7071068.7071068-12.99999999-13.00000001zm7.55944661 11.85355339h-2.827l.01883645.0520151c.20296783.5125531.68021461.8866048 1.25070354.9411183l.14446001.0068666c.6335031 0 1.17528173-.3927191 1.39516355-.9479849zm-.913-12 .00070198 1.02475737c2.52632482.25118732 4.49929802 2.38280869 4.49929802 4.97524263v2l1.5 2-.0005534 1.378-1-1 .0005534-.045-1.5-1.99966667v-2.33333333c0-2.209139-1.790861-4-4-4-.81814631 0-1.57892314.24562793-2.21260969.66716298l-.71868363-.71822819c.69673223-.50502227 1.52885079-.83470199 2.43159348-.92427696l-.00030016-1.02465783z"
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

IconSubscribeOff16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSubscribeOff24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m5.26329813 8.09160846 1.73970187 1.73939154-.003.169v2.6055513l-2 2.9994487v.395h8.171l2.7575484 2.7565788c-.3536562 1.847382-1.9780711 3.2434212-3.9285484 3.2434212-2.209139 0-4-1.790861-4-4h-5v-3l2-3v-2c0-.66157907.09177856-1.3017221.26329813-1.90839154zm-.55619135-4.79871524 16.00000002 15.99999998-1.4142136 1.4142136-15.99999998-16.00000002zm9.29289322 14.70710678h-4c0 1.1045695.8954305 2 2 2 1.0543618 0 1.9181651-.8158778 1.9945143-1.8507377zm-1-17 .0010101 2.07103341c3.3918017.48566424 5.9989899 3.40284469 5.9989899 6.92896659v2l2 3v3h-.171l-2-2h.171v-.393l-2-3.0014487v-2.6055513c0-2.76142375-2.2385763-5-5-5-1.169499 0-2.24521834.40151843-3.09682664 1.07422391l-1.42134869-1.42101621c.97889422-.82802638 2.18823517-1.39208419 3.51816713-1.58231766l.0000082-2.07089004z"
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

IconSubscribeOff24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSubscribeOff = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconSubscribeOff16 className={className} color={color} />

        case 24:
            return <IconSubscribeOff24 className={className} color={color} />

        default:
            return null
    }
}

IconSubscribeOff.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconSubscribeOff.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconSubscribeOff }
