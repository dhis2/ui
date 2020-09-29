import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconTextBold16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m5 3h3.5c1.38071187 0 2.5 1.11928813 2.5 2.5 0 .63584783-.2373789 1.21625285-.6283513 1.65742951.9504612.35187383 1.6283513 1.2680573 1.6283513 2.34257049 0 1.3807119-1.1192881 2.5-2.5 2.5h-4.5zm4.5 5h-3.5v3h3.5c.8284271 0 1.5-.6715729 1.5-1.5 0-.77969612-.5948881-1.42044868-1.35553999-1.49313342zm-1-4h-2.5v3h2.5c.82842712 0 1.5-.67157288 1.5-1.5 0-.77969612-.59488808-1.42044868-1.35553999-1.49313342z"
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

IconTextBold16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTextBold24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7 5h6c2.209139 0 4 1.790861 4 4 0 .97998001-.3524116 1.8776499-.9374171 2.5731919 1.1608063.6986588 1.9374171 1.9720399 1.9374171 3.4268081 0 2.209139-1.790861 4-4 4h-7zm7 8h-5v4h5c1.1045695 0 2-.8954305 2-2 0-1.0543618-.8158778-1.9181651-1.8507377-1.9945143zm-1-6h-4v4h4c1.1045695 0 2-.8954305 2-2 0-1.0543618-.8158778-1.91816512-1.8507377-1.99451426z"
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

IconTextBold24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconTextBold = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconTextBold16 className={className} color={color} />

        case 24:
            return <IconTextBold24 className={className} color={color} />

        default:
            return null
    }
}

IconTextBold.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconTextBold.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconTextBold }
