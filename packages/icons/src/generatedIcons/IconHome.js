import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconHome16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m2 14-.0006191-7.1004518-.7087618.50731854-.5812382-.81373348 7.2906191-5.20758506 7.2906191 5.20758506-.5812382.81373348-.71-.50731854.0006191 7.1004518zm6-11.386-5.0006191 3.5715482.0006191 6.8144518h3v-4c0-.55228475.44771525-1 1-1h2c.55228475 0 1 .44771525 1 1v4h3l-.0006191-6.8144518zm1 6.386h-2v4h2z"
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

IconHome16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconHome24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m3 21-.00046234-10.4806556-.42607532.2998875-1.14692468-1.63846382 10.57346234-7.40142364 10.5734623 7.40142364-1.1469246 1.63846382-.427-.2988875.0004623 10.4796556zm9-16.78-7.00046234 4.89934444.00046234 9.88065556 3.99953766-.0006556.00046234-6.9993444h6l-.0004623 6.9993444 4.0004623.0006556-.0004623-9.87965556zm1 9.78h-2v5h2z"
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

IconHome24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconHome = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconHome16 className={className} color={color} />

        case 24:
            return <IconHome24 className={className} color={color} />

        default:
            return null
    }
}

IconHome.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconHome.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconHome }
