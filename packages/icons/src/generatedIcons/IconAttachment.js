import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconAttachment16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7 1c1.59768088 0 2.90366088 1.24891996 2.99490731 2.82372721l.00509269.17627279v7c0 1.1045695-.8954305 2-2 2-1.0543618 0-1.91816512-.8158778-1.99451426-1.8507377l-.00548574-.1492623v-6c0-.27614237.22385763-.5.5-.5.24545989 0 .44960837.17687516.49194433.41012437l.00805567.08987563v6c0 .5522847.44771525 1 1 1 .51283584 0 .93550716-.3860402.99327227-.8833789l.00672773-.1166211v-7c0-1.1045695-.8954305-2-2-2-1.0543618 0-1.91816512.81587779-1.99451426 1.85073766l-.00548574.14926234v7c0 1.6568542 1.34314575 3 3 3 1.59768088 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-6c0-.27614237.2238576-.5.5-.5.2454599 0 .4496084.17687516.4919443.41012437l.0080557.08987563v6c0 2.209139-1.790861 4-4 4-2.14219539 0-3.89107888-1.6839685-3.99510469-3.8003597l-.00489531-.1996403v-7c0-1.65685425 1.34314575-3 3-3z"
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

IconAttachment16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconAttachment24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m10.5 2c2.4142733 0 4.3844891 1.90123652 4.495102 4.2881643l.004898.2118357v8.5c0 1.6568542-1.3431458 3-3 3-1.5976809 0-2.90366088-1.24892-2.99490731-2.8237272l-.00509269-.1762728v-7c0-.55228475.44771525-1 1-1 .5128358 0 .9355072.38604019.9932723.88337887l.0067277.11662113v7c0 .5522847.4477153 1 1 1 .5128358 0 .9355072-.3860402.9932723-.8833789l.0067277-.1166211v-8.5c0-1.38071187-1.1192881-2.5-2.5-2.5-1.3254834 0-2.41003867 1.03153594-2.49468232 2.33562431l-.00531768.16437569v9.5c0 2.209139 1.790861 4 4 4 2.1421954 0 3.8910789-1.6839685 3.9951047-3.8003597l.0048953-.1996403v-8c0-.55228475.4477153-1 1-1 .5128358 0 .9355072.38604019.9932723.88337887l.0067277.11662113v8c0 3.3137085-2.6862915 6-6 6-3.23839694 0-5.87757176-2.5655749-5.99586153-5.7750617l-.00413847-.2249383v-9.5c0-2.48528137 2.01471863-4.5 4.5-4.5z"
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

IconAttachment24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconAttachment = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconAttachment16 className={className} color={color} />

        case 24:
            return <IconAttachment24 className={className} color={color} />

        default:
            return null
    }
}

IconAttachment.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconAttachment.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconAttachment }
