import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconPushLeft16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13 1c.5522847 0 1 .44771525 1 1v12c0 .5522847-.4477153 1-1 1h-7v-6h1v5h6v-12h-6v2h-1v-3zm-8.64644661 2.14644661c.17356635.17356635.1928515.44299075.05785545.63785889l-.05785545.06924789-2.14855339 2.14644661h8.295c.2761424 0 .5.22385763.5.5 0 .24545989-.1768752.44960837-.4101244.49194433l-.0898756.00805567h-8.293l2.14655339 2.14644661c.17356635.17356635.1928515.44299075.05785545.63785889l-.05785545.06924789c-.17356635.17356631-.44299075.19285151-.63785889.05785545l-.06924789-.05785545-3-3c-.17356635-.17356635-.1928515-.44299075-.05785545-.63785889l.05785545-.06924789 3-3c.19526215-.19526215.51184463-.19526215.70710678 0z"
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

IconPushLeft16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconPushLeft24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m19 2c1.1045695 0 2 .8954305 2 2v16c0 1.1045695-.8954305 2-2 2h-9v-10h2v8h7v-16h-7v2h-2v-4zm-12.29289322 2.29289322c.36048396.36048396.3882135.92771502.08318861 1.32000622l-.08318861.09420734-2.29310678 2.29289322h11.586c.5522847 0 1 .44771525 1 1 0 .51283584-.3860402.93550716-.8833789.99327227l-.1166211.00672773h-11.586l2.29310678 2.2928932c.36048396.360484.3882135.927715.08318861 1.3200062l-.08318861.0942074c-.36048396.3604839-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-4-4.00000002c-.36048396-.36048396-.3882135-.92771502-.08318861-1.32000622l.08318861-.09420734 4-4c.39052429-.39052429 1.02368927-.39052429 1.41421356 0z"
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

IconPushLeft24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconPushLeft = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconPushLeft16 className={className} color={color} />

        case 24:
            return <IconPushLeft24 className={className} color={color} />

        default:
            return null
    }
}

IconPushLeft.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconPushLeft.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconPushLeft }
