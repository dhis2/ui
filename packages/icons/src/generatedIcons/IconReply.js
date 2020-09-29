import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconReply16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7 2v4h4c2 0 3 2.33333333 3 7l-.3402647-.4990548c-1.1644612-1.6672968-2.0510396-2.5009452-2.6597353-2.5009452h-4v4l-6-6zm-1 2.414-3.585 3.586 3.585 3.585v-2.585h5c.5541566 0 1.1054515.26313345 1.6987666.79151078l.1022334.09448922-.0363806-.222629c-.3058382-1.75512725-.8935069-2.59497289-1.6669751-2.65935234l-.0976443-.00401866h-5z"
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

IconReply16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconReply24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m10 17.5857864c0 .2652165-.10535684.5195704-.29289322.7071068-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-5.58578644-5.5857864c-.36048396-.360484-.3882135-.927715-.08318861-1.3200062l.08318861-.0942074 5.58578644-5.58578642c.18753638-.18753638.44189029-.29289322.70710678-.29289322.51283584 0 .93550716.38604019.99327227.88337888l.00672773.11662112-.00078644 1.585 6.00078644.00078644.4701846.00481699c6.4843669.13734182 5.5298154 3.24805661 5.5298154 13.99518301h-1c0-4-1.6666667-6-5-6l-6.00078644-.0007864zm-2-8.7577864-3.171 3.172 3.171 3.171v-1.171h8c1.5976862 0 2.9395663.3696997 4.0071894 1.0693722l.0318106.0216278-.0152066-.8964783c-.0425828-1.6032978-.1585816-2.3929588-.3916155-2.9850063l-.0691407-.1628591c-.3203464-.7023892-1.0561873-1.0225908-3.2976617-1.0453459l-6.2653755-.0013104h-2z"
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

IconReply24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconReply = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconReply16 className={className} color={color} />

        case 24:
            return <IconReply24 className={className} color={color} />

        default:
            return null
    }
}

IconReply.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconReply.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconReply }
