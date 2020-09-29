import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconSearch16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m6 1c2.76142375 0 5 2.23857625 5 5 0 1.20065927-.4231997 2.30247496-1.12856994 3.16441794l4.48212334 4.48202866-.7071068.7071068-4.48202866-4.48212334c-.86194298.70537024-1.96375867 1.12856994-3.16441794 1.12856994-2.76142375 0-5-2.23857625-5-5s2.23857625-5 5-5zm0 1c-2.209139 0-4 1.790861-4 4s1.790861 4 4 4 4-1.790861 4-4-1.790861-4-4-4z"
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

IconSearch16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSearch24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m10 3c3.8659932 0 7 3.13400675 7 7 0 1.5763766-.521072 3.0310504-1.4003714 4.2011767.0041847.0015255.0087394.0050045.0132708.0085279l.0942074.0831886 5 5c.3905243.3905243.3905243 1.0236893 0 1.4142136-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-5-5c-.0342043-.0342044-.0654128-.07027-.0936256-.107871-1.1682172.8796922-2.622891 1.4007642-4.1992676 1.4007642-3.86599325 0-7-3.1340068-7-7 0-3.86599325 3.13400675-7 7-7zm0 2c-2.76142375 0-5 2.23857625-5 5 0 2.7614237 2.23857625 5 5 5 2.7614237 0 5-2.2385763 5-5 0-2.76142375-2.2385763-5-5-5z"
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

IconSearch24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconSearch = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconSearch16 className={className} color={color} />

        case 24:
            return <IconSearch24 className={className} color={color} />

        default:
            return null
    }
}

IconSearch.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconSearch.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconSearch }
