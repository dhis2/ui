import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconRuler16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 5c.5522847 0 1 .44771525 1 1v4c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-4c0-.55228475.44771525-1 1-1zm-2 3h-1v-2h-2.5v2h-1v-2h-2.5v2h-1v-2h-2v4h12v-4h-2z"
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

IconRuler16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconRuler24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 7c1.1045695 0 2 .8954305 2 2v6c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-6c0-1.1045695.8954305-2 2-2zm-14 2h-2v6h16v-6h-2v3c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-3h-3v3c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-3h-3v3c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1z"
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

IconRuler24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconRuler = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconRuler16 className={className} color={color} />

        case 24:
            return <IconRuler24 className={className} color={color} />

        default:
            return null
    }
}

IconRuler.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconRuler.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconRuler }
