import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconRedo16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m11.7843055 4.08859116.0692479.05785545 3 3c.1735663.17356635.1928515.44299075.0578554.63785889l-.0578554.06924789-3 3.00000001c-.1952622.1952621-.5118446.1952621-.7071068 0-.1735663-.1735664-.1928515-.4429908-.0578554-.6378589l.0578554-.0692479 2.1465534-2.1474466-9.293.001c-1.1045695 0-2 .8954305-2 2 0 1.0543618.81587779 1.9181651 1.85073766 1.9945143l.14926234.0054857h2.5c.27614237 0 .5.2238576.5.5 0 .2454599-.17687516.4496084-.41012437.4919443l-.08987563.0080557h-2.5c-1.65685425 0-3-1.3431458-3-3 0-1.59768088 1.24891996-2.90366088 2.82372721-2.99490731l.17627279-.00509269 9.293-.001-2.1465534-2.14544661c-.1735663-.17356635-.1928515-.44299075-.0578554-.63785889l.0578554-.06924789c.1735664-.17356635.4429908-.1928515.6378589-.05785545z"
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

IconRedo16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconRedo24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m17.1128994 4.70970461.0942074.08318861 4.5 4.5c.3604839.36048396.3882135.92771498.0831886 1.32000618l-.0831886.0942074-4.5 4.5c-.3905243.3905243-1.0236893.3905243-1.4142136 0-.3604839-.360484-.3882135-.927715-.0831886-1.3200062l.0831886-.0942074 2.7911068-2.7928932h-10.584c-1.65685425 0-3 1.3431458-3 3 0 1.5976809 1.24891996 2.9036609 2.82372721 2.9949073l.17627279.0050927h2c.5522847 0 1 .4477153 1 1 0 .5128358-.3860402.9355072-.8833789.9932723l-.1166211.0067277h-2c-2.76142375 0-5-2.2385763-5-5 0-2.6887547 2.12230671-4.88181811 4.78311038-4.99538049l.21688962-.00461951h10.586l-2.7931068-2.79289322c-.3604839-.36048396-.3882135-.92771502-.0831886-1.32000622l.0831886-.09420734c.360484-.36048396.927715-.3882135 1.3200062-.08318861z"
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

IconRedo24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconRedo = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconRedo16 className={className} color={color} />

        case 24:
            return <IconRedo24 className={className} color={color} />

        default:
            return null
    }
}

IconRedo.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconRedo.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconRedo }
