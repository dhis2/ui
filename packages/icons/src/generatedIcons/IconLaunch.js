import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLaunch16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m7 2v1h-4v10h10v-4h1v4c0 .5522847-.4477153 1-1 1h-10c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm7.5-1c.2454599 0 .4496084.17687516.4919443.41012437l.0080557.08987563v5c0 .27614237-.2238576.5-.5.5-.2454599 0-.4496084-.17687516-.4919443-.41012437l-.0080557-.08987563v-3.794l-6.64644661 6.64755339c-.19526215.19526215-.51184463.19526215-.70710678 0-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 6.64555339-6.64644661h-3.792c-.24545989 0-.44960837-.17687516-.49194433-.41012437l-.00805567-.08987563c0-.24545989.17687516-.44960837.41012437-.49194433l.08987563-.00805567z"
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

IconLaunch16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLaunch24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11 3v2h-6v14h14v-6h2v6c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-14c0-1.1045695.8954305-2 2-2zm11-2c.5128358 0 .9355072.38604019.9932723.88337887l.0067277.11662113v6c0 .55228475-.4477153 1-1 1-.5128358 0-.9355072-.38604019-.9932723-.88337887l-.0067277-.11662113v-3.586l-7.2928932 7.2931068c-.3905243.3905243-1.0236893.3905243-1.4142136 0-.3604839-.360484-.3882135-.927715-.0831886-1.3200062l.0831886-.0942074 7.2911068-7.2928932h-3.584c-.5128358 0-.9355072-.38604019-.9932723-.88337887l-.0067277-.11662113c0-.51283584.3860402-.93550716.8833789-.99327227l.1166211-.00672773z"
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

IconLaunch24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLaunch = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLaunch16 className={className} color={color} />

        case 24:
            return <IconLaunch24 className={className} color={color} />

        default:
            return null
    }
}

IconLaunch.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLaunch.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLaunch }
