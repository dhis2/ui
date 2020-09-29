import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconWarningFilled16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 15 16"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8.8507692 1.83898598.05541394.10283503 5.42980366 11.63529349c.0617934.1324144.0938168.2767623.0938168.4228855 0 .5128358-.3860401.9355072-.8833788.9932723l-.1166212.0067277h-10.85960724c-.14612321 0-.29047108-.0320235-.42288547-.0938169-.46472319-.2168708-.68449003-.7454355-.5265185-1.2205434l.04322083-.1085252 5.42980364-11.63529349c.09933578-.21286239.27043528-.38396189.48329767-.48329767.4647232-.21687082 1.01099161-.04578927 1.27365467.38046264zm-.8507692 9.16101402c-.55228475 0-1 .4477153-1 1s.44771525 1 1 1 1-.4477153 1-1-.44771525-1-1-1zm1-6h-2v5h2z"
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

IconWarningFilled16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconWarningFilled24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12.846647 2.79359739.0562135.10240014 8.4162187 17.67405937c.0639537.1343026.0971395.2811812.0971395.4299335 0 .5128359-.3860402.9355072-.8833788.9932723l-.1166212.0067277h-16.83243743c-.14875232 0-.29563098-.0331858-.42993358-.0971394-.46301923-.2204854-.67866084-.7507464-.51699207-1.2246091l.04406513-.108185 8.41621875-17.67405937c.0986902-.20724955.2656774-.37423668.4729269-.47292694.4630193-.22048535 1.0106041-.0536655 1.2765806.3705268zm-.846647 15.20640261c-.5522847 0-1 .4477153-1 1s.4477153 1 1 1 1-.4477153 1-1-.4477153-1-1-1zm1-9h-2v7h2z"
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

IconWarningFilled24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconWarningFilled = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconWarningFilled16 className={className} color={color} />

        case 24:
            return <IconWarningFilled24 className={className} color={color} />

        default:
            return null
    }
}

IconWarningFilled.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconWarningFilled.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconWarningFilled }
