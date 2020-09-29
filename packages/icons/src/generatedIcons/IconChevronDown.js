import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconChevronDown16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m4.14644661 6.14644661c.17356635-.17356635.44299075-.1928515.63785889-.05785545l.06924789.05785545 3.14644661 3.14655339 3.1464466-3.14655339c.1735664-.17356635.4429908-.1928515.6378589-.05785545l.0692479.05785545c.1735663.17356635.1928515.44299075.0578554.63785889l-.0578554.06924789-3.50000001 3.50000001c-.17356635.1735663-.44299075.1928515-.63785889.0578554l-.06924789-.0578554-3.5-3.50000001c-.19526215-.19526215-.19526215-.51184463 0-.70710678z"
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

IconChevronDown16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronDown24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.29289 15.7071c.39053.3905 1.02369.3905 1.41422 0l4.99999-4.99999c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-4.2929 4.2929-4.29289-4.2929c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422z"
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

IconChevronDown24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconChevronDown = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconChevronDown16 className={className} color={color} />

        case 24:
            return <IconChevronDown24 className={className} color={color} />

        default:
            return null
    }
}

IconChevronDown.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconChevronDown.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconChevronDown }
