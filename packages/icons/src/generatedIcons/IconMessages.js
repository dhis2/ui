import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconMessages16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m14 3c.5522847 0 1 .44771525 1 1v6c0 .5522847-.4477153 1-1 1h-1v2.1492189c0 .5522848-.4477153 1-1 1-.3037837 0-.5910966-.1380897-.7808688-.3753049l-2.2191312-2.773914h-5c-.55228475 0-1-.4477153-1-1v-6c0-.55228475.44771525-1 1-1zm0 1h-10v6h5.48062485l2.51937515 3.1492189v-3.1492189h2zm-4-3v1h-7.5c-.24545989 0-.44960837.17687516-.49194433.41012437l-.00805567.08987563v5.5h-1v-5.5c0-.77969612.59488808-1.42044868 1.35553999-1.49313342l.14446001-.00686658z"
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

IconMessages16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconMessages24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 5c1.1045695 0 2 .8954305 2 2v8c0 1.1045695-.8954305 2-2 2h-1v3.8257794c0 .5522847-.4477153 1-1 1-.2387113 0-.4695483-.0853922-.6507914-.2407434l-5.3492086-4.585036h-5c-1.1045695 0-2-.8954305-2-2v-8c0-1.1045695.8954305-2 2-2zm0 2h-13v8h5.7398482l4.2601518 3.652v-3.652h3zm-6-5v2h-9c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v7h-2v-7c0-1.59768088 1.24891996-2.90366088 2.82372721-2.99490731l.17627279-.00509269z"
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

IconMessages24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconMessages = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconMessages16 className={className} color={color} />

        case 24:
            return <IconMessages24 className={className} color={color} />

        default:
            return null
    }
}

IconMessages.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconMessages.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconMessages }
