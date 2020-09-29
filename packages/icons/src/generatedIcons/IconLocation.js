import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconLocation16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c3.3137085 0 6 2.6862915 6 6 0 4-6 9-6 9l-.39658955-.3459303c-1.33812787-1.1980912-5.60341045-5.2815207-5.60341045-8.6540697 0-3.3137085 2.6862915-6 6-6zm0 1c-2.76142375 0-5 2.23857625-5 5 0 .50078188.12554008 1.06571224.37292114 1.68416488.45270186 1.13175465 1.28485152 2.37997912 2.38633546 3.66504372.50520405.5894048 1.04094483 1.1564757 1.58275428 1.6881313l.49531946.4748558.16166966.1508043.25187647-.2337632c.67914317-.641413 1.35836187-1.3432723 1.98986693-2.0800282 1.1014839-1.2850646 1.9336336-2.53328907 2.3863355-3.66504372.247381-.61845264.3729211-1.183383.3729211-1.68416488 0-2.76142375-2.2385763-5-5-5zm0 2.5c1.38071187 0 2.5 1.11928813 2.5 2.5s-1.11928813 2.5-2.5 2.5-2.5-1.11928813-2.5-2.5 1.11928813-2.5 2.5-2.5zm0 1c-.82842712 0-1.5.67157288-1.5 1.5s.67157288 1.5 1.5 1.5 1.5-.67157288 1.5-1.5-.67157288-1.5-1.5-1.5z"
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

IconLocation16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLocation24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2c4.1421356 0 7.5 3.35786438 7.5 7.5 0 6.5-7.5 11.5-7.5 11.5l-.3013654-.212337c-1.3997345-1.0164085-7.1986346-5.5721458-7.1986346-11.287663 0-4.14213562 3.35786438-7.5 7.5-7.5zm0 2c-3.03756612 0-5.5 2.46243388-5.5 5.5 0 2.2584574 1.18941793 4.597646 3.22988015 6.8421544.62282165.6851038 1.28631705 1.3179355 1.95591535 1.8876106l.3142045.260235.3142045-.260235c.5356787-.4557401 1.0674514-.9519004 1.5776181-1.482908l.3782973-.4047026c2.0404622-2.2445084 3.2298801-4.583697 3.2298801-6.8421544 0-3.03756612-2.4624339-5.5-5.5-5.5zm0 3c1.6568542 0 3 1.34314575 3 3 0 1.6568542-1.3431458 3-3 3s-3-1.3431458-3-3c0-1.65685425 1.3431458-3 3-3zm0 2c-.5522847 0-1 .44771525-1 1 0 .5522847.4477153 1 1 1s1-.4477153 1-1c0-.55228475-.4477153-1-1-1z"
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

IconLocation24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconLocation = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconLocation16 className={className} color={color} />

        case 24:
            return <IconLocation24 className={className} color={color} />

        default:
            return null
    }
}

IconLocation.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconLocation.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconLocation }
