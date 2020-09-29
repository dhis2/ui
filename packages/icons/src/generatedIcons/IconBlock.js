import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconBlock16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 2c3.3137085 0 6 2.6862915 6 6s-2.6862915 6-6 6-6-2.6862915-6-6 2.6862915-6 6-6zm-5 6c0 2.7614237 2.23857625 5 5 5 1.20065927 0 2.302475-.4231997 3.1644179-1.1285699l-7.03584796-7.03584804c-.70537025.86194298-1.12856994 1.96375867-1.12856994 3.16441794zm5-5c-1.20065927 0-2.30247496.42319969-3.16441794 1.12856994l7.03584804 7.03584796c.7053702-.8619429 1.1285699-1.96375863 1.1285699-3.1644179 0-2.76142375-2.2385763-5-5-5z"
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

IconBlock16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconBlock24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 3c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm-7 9c0 3.8659932 3.13400675 7 7 7 1.5719021 0 3.0227913-.5181181 4.1912056-1.3928924l-9.79831321-9.79831323c-.87477432 1.16841436-1.39289239 2.61930353-1.39289239 4.19120563zm7-7c-1.5719021 0-3.02279127.51811807-4.19120563 1.39289239l9.79831323 9.79831321c.8747743-1.1684143 1.3928924-2.6193035 1.3928924-4.1912056 0-3.86599325-3.1340068-7-7-7z"
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

IconBlock24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconBlock = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconBlock16 className={className} color={color} />

        case 24:
            return <IconBlock24 className={className} color={color} />

        default:
            return null
    }
}

IconBlock.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconBlock.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconBlock }
