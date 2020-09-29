import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconMail16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 2c.5522847 0 1 .44771525 1 1v10c0 .5522847-.4477153 1-1 1h-12c-.55228475 0-1-.4477153-1-1v-10c0-.55228475.44771525-1 1-1zm0 1.706-4.93933983 4.94044661c-.54917478.54917478-1.41823719.58349821-2.00739793.10297027l-.11392241-.10297027-4.93933983-4.93944661v9.293h12zm-.708-.706h-10.585l4.93944661 4.93933983c.17356635.17356635.44299075.1928515.63785889.05785545l.06924789-.05785545z"
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

IconMail16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconMail24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-14c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2zm0 3.414-5.5857864 5.586c-.7399408.7399408-1.915425.778885-2.7012124.1168328l-.1272148-.1168328-5.5857864-5.585v8.585h14zm-1.416-1.414h-11.169l5.585 5.5857864z"
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

IconMail24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconMail = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconMail16 className={className} color={color} />

        case 24:
            return <IconMail24 className={className} color={color} />

        default:
            return null
    }
}

IconMail.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconMail.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconMail }
