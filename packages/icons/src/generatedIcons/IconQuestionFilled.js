import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconQuestionFilled16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c3.8659932 0 7 3.13400675 7 7 0 3.8659932-3.1340068 7-7 7-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 10c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1 1-.4477153 1-1-.44771525-1-1-1zm0-7.5c-1.38071187 0-2.5 1.11928813-2.5 2.5h1l.00686658-.14446001c.07268474-.76065191.7134373-1.35553999 1.49313342-1.35553999.82842712 0 1.5.67157288 1.5 1.5s-.67157288 1.5-1.5 1.5h-.5v2.5h1v-1.551l.13915054-.03144752c1.07107976-.28241713 1.86084946-1.25775451 1.86084946-2.41755248 0-1.38071187-1.11928813-2.5-2.5-2.5z"
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

IconQuestionFilled16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconQuestionFilled24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c5.5228475 0 10 4.4771525 10 10s-4.4771525 10-10 10-10-4.4771525-10-10 4.4771525-10 10-10zm0 14c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm0-10c-2.209139 0-4 1.790861-4 4h2l.0054857-.14926234c.0763492-1.03485987.9401525-1.85073766 1.9945143-1.85073766 1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2h-1v3h2v-1.127l.1552529-.0423561c1.6459063-.4956935 2.8447471-2.0231665 2.8447471-3.8306439 0-2.209139-1.790861-4-4-4z"
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

IconQuestionFilled24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconQuestionFilled = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconQuestionFilled16 className={className} color={color} />

        case 24:
            return <IconQuestionFilled24 className={className} color={color} />

        default:
            return null
    }
}

IconQuestionFilled.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconQuestionFilled.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconQuestionFilled }
