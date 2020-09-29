import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconColor16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m8 1c4 3.12419433 6 5.790861 6 8 0 3.3137085-2.6862915 6-6 6s-6-2.6862915-6-6c0-2.209139 2-4.87580567 6-8zm0 1.278-.04988035.0409699c-3.32787679 2.71407973-4.95011965 4.98015362-4.95011965 6.6810301 0 2.7614237 2.23857625 5 5 5 1.63527922 0 3.0872034-.7850361 3.9994649-1.9988005l-3.9994649-.0011995v-1l4.5837237.0005324c.2677428-.6126027.4162763-1.28922163.4162763-2.0005324h-5v-1l4.833618.00096916c-.1932468-.6119062-.5553593-1.27986212-1.0890988-1.99998733l-3.7445192-.00098183v-1l2.9225155.00087837c-.6815557-.75868964-1.53262996-1.56683176-2.55590431-2.42065808z"
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

IconColor16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconColor24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m12 2 .7107438.59386844c4.8595041 4.12578959 7.2892562 7.59450006 7.2892562 10.40613156 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8c0-2.9455187 2.66666667-6.61218533 8-11zm0 2.622-.0329398.0285003c-4.02301496 3.52656794-5.9670602 6.3825978-5.9670602 8.3494997 0 3.3137085 2.6862915 6 6 6 1.7765803 0 3.3728184-.7721368 4.4714352-1.9991311l-4.4714352-.0008689v-2l5.6583461.0006859c.2212575-.6257517.3416539-1.2991587.3416539-2.0006859h-6v-2l5.4741547.0012933c-.292464-.616862-.7077564-1.28470908-1.2479549-2.00017519l-4.2261998-.00111811v-2l2.5057661.00111675c-.6277221-.65641821-1.3414631-1.34314315-2.1423846-2.05829264z"
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

IconColor24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconColor = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconColor16 className={className} color={color} />

        case 24:
            return <IconColor24 className={className} color={color} />

        default:
            return null
    }
}

IconColor.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconColor.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconColor }
