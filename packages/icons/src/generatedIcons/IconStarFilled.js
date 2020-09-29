import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconStarFilled16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m5.611 5.211-4.34029477.63107753-.08403197.01933156c-.34712222.11116346-.46863619.56490908-.19307472.83351513l3.14040146 3.06007578-.74130093 4.3235964-.00752687.080277c-.00564127.3674654.39064215.6268003.7330016.4468113l3.8808262-2.0416847 3.8828262 2.0416847.074022.0319654c.3477371.1189182.7168376-.1778308.6514527-.5590537l-.7423009-4.3235964 3.1414015-3.06007578.0566204-.06503231c.2154876-.29396645.0470895-.73247849-.3337271-.78781438l-4.3412948-.63107753-1.93963196-3.93228286c-.18340685-.37162285-.71332923-.37162285-.89673608 0z"
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

IconStarFilled16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconStarFilled24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8.397 7.041-6.05136348.87922304-.11377631.02293026c-.73554697.19127832-1.00569137 1.13177635-.44043706 1.68276312l4.37857685 4.26808358-1.03346085 6.0271249-.01302815.1101176c-.0493896.7613373.76369692 1.3122182 1.4639776.9440589l5.4125114-2.8453014 5.4125114 2.8453014.1007022.0464187c.7088125.2822385 1.483989-.3208212 1.3502472-1.1005952l-1.0344608-6.0271249 4.3795769-4.26808358.0785689-.08542701c.4826394-.58709107.1483799-1.50675685-.6327823-1.62026637l-6.0523635-.87922304-2.7052639-5.48356571c-.3668137-.74324572-1.4266585-.74324572-1.7934722 0z"
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

IconStarFilled24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconStarFilled = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconStarFilled16 className={className} color={color} />

        case 24:
            return <IconStarFilled24 className={className} color={color} />

        default:
            return null
    }
}

IconStarFilled.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconStarFilled.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconStarFilled }
