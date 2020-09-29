import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconPushRight16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m10 1v3h-1v-2h-6v12h6v-5h1v6h-7c-.55228475 0-1-.4477153-1-1v-12c0-.55228475.44771525-1 1-1zm2.2843055 2.08859116.0692479.05785545 3 3c.1735663.17356635.1928515.44299075.0578554.63785889l-.0578554.06924789-3 3c-.1952622.19526211-.5118446.19526211-.7071068 0-.1735663-.17356635-.1928515-.44299075-.0578554-.63785889l.0578554-.06924789 2.1465534-2.14644661h-8.293c-.27614237 0-.5-.22385763-.5-.5 0-.24545989.17687516-.44960837.41012437-.49194433l.08987563-.00805567h8.293l-2.1465534-2.14644661c-.1735663-.17356635-.1928515-.44299075-.0578554-.63785889l.0578554-.06924789c.1735664-.17356635.4429908-.1928515.6378589-.05785545z"
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

IconPushRight16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconPushRight24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 2v4h-2v-2h-7v16h7v-8h2v10h-9c-1.1045695 0-2-.8954305-2-2v-16c0-1.1045695.8954305-2 2-2zm4.6128994 2.20970461.0942074.08318861 4 4c.3604839.36048396.3882135.92771502.0831886 1.32000622l-.0831886.09420734-4 4.00000002c-.3905243.3905243-1.0236893.3905243-1.4142136 0-.3604839-.360484-.3882135-.927715-.0831886-1.3200062l.0831886-.0942074 2.2921068-2.2928932h-11.585c-.55228475 0-1-.44771525-1-1 0-.51283584.38604019-.93550716.88337887-.99327227l.11662113-.00672773h11.585l-2.2921068-2.29289322c-.3604839-.36048396-.3882135-.92771502-.0831886-1.32000622l.0831886-.09420734c.360484-.36048396.927715-.3882135 1.3200062-.08318861z"
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

IconPushRight24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconPushRight = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconPushRight16 className={className} color={color} />

        case 24:
            return <IconPushRight24 className={className} color={color} />

        default:
            return null
    }
}

IconPushRight.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconPushRight.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconPushRight }
