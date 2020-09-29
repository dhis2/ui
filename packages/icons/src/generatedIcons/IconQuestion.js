import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconQuestion16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 1c-3.3137085 0-6 2.6862915-6 6s2.6862915 6 6 6 6-2.6862915 6-6-2.6862915-6-6-6zm0 9c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1-1-.4477153-1-1 .44771525-1 1-1zm0-7.5c1.38071187 0 2.5 1.11928813 2.5 2.5 0 1.15979797-.7897697 2.13513535-1.86084946 2.41755248l-.13915054.03144752v1.551h-1v-2.5h.5c.82842712 0 1.5-.67157288 1.5-1.5s-.67157288-1.5-1.5-1.5c-.77969612 0-1.42044868.59488808-1.49313342 1.35553999l-.00686658.14446001h-1c0-1.38071187 1.11928813-2.5 2.5-2.5z"
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

IconQuestion16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconQuestion24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 2c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8zm0 12c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1-1-.4477153-1-1 .4477153-1 1-1zm0-10c2.209139 0 4 1.790861 4 4 0 1.8074774-1.1988408 3.3349504-2.8447471 3.8306439l-.1552529.0423561v1.127h-2v-3h1c1.1045695 0 2-.8954305 2-2s-.8954305-2-2-2c-1.0543618 0-1.9181651.81587779-1.9945143 1.85073766l-.0054857.14926234h-2c0-2.209139 1.790861-4 4-4z"
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

IconQuestion24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconQuestion = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconQuestion16 className={className} color={color} />

        case 24:
            return <IconQuestion24 className={className} color={color} />

        default:
            return null
    }
}

IconQuestion.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconQuestion.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconQuestion }
