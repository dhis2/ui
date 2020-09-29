import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconThumbDown16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11 2c2.209139 0 4 1.790861 4 4v2c0 1.1045695-.8954305 2-2 2h-2l-1 4h-3v-3l-3-2h-3v-7zm-9 1v5h2v-5zm3 5.465 3 1.9998162v2.5351838h1.218l1.0012236-4h2.7807764c.5128358 0 .9355072-.38604019.9932723-.88337887l.0067277-.11662113v-2c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269h-6z"
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

IconThumbDown16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconThumbDown24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m16 3c2.7614237 0 5 2.23857625 5 5v6c0 1.1045695-.8954305 2-2 2h-3l-.5176697 2.5883484c-.2804545 1.4022726-1.5116989 2.4116516-2.941742 2.4116516h-1.5405883l-1-5-2-2h-5v-11zm-11 2v7h1v-7zm3 7h.82842712l3.01397588 3.0139759.795597 3.9800241.0202329-.0008907c.38658-.0455413.7126357-.312843.8331072-.6829845l.0298289-.1140087.8392232-4.1961161h4.6396078v-6c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269h-8z"
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

IconThumbDown24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconThumbDown = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconThumbDown16 className={className} color={color} />

        case 24:
            return <IconThumbDown24 className={className} color={color} />

        default:
            return null
    }
}

IconThumbDown.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconThumbDown.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconThumbDown }
