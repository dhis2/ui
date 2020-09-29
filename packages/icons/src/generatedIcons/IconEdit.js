import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconEdit16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m10.6128994 2.62391817.0942074.08318861 2.5857864 2.58578644c.360484.36048396.3882135.92771502.0831886 1.32000622l-.0831886.09420734-7.2928932 7.29289322h-4v-4l7.29289322-7.29289322c.36048396-.36048396.92771498-.3882135 1.32000618-.08318861zm-.6128994.79029539-6.793 6.79200004 2.585 2.585 6.7937864-6.7912136z"
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

IconEdit16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconEdit24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m17.2869988 4.29738081.1272148.11683275 2.1715728 2.17157288c.7399408.73994076.7788851 1.91542492.1168328 2.70121235l-.1168328.12721477-10.5857864 10.58578644h-5v-5l10.5857864-10.58578644c.7399408-.73994076 1.915425-.77888501 2.7012124-.11683275zm-1.2869988 1.53104631-9.586 9.58499998 2.171 2.171 9.5865729-9.5844271z"
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

IconEdit24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconEdit = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconEdit16 className={className} color={color} />

        case 24:
            return <IconEdit24 className={className} color={color} />

        default:
            return null
    }
}

IconEdit.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconEdit.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconEdit }
