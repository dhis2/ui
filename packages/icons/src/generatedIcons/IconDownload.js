import React from 'react'
import propTypes from '@dhis2/prop-types'

const IconDownload16 = ({ className, color }) => (
    <svg
        className={className}
        height="16"
        viewBox="0 0 16 16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m13.5 9.5c.2454599 0 .4496084.17687516.4919443.41012437l.0080557.08987563v3.5c0 .7796961-.5948881 1.4204487-1.35554 1.4931334l-.14446.0068666h-9c-.77969612 0-1.42044868-.5948881-1.49313342-1.35554l-.00686658-.14446v-3.5c0-.27614237.22385763-.5.5-.5.24545989 0 .44960837.17687516.49194433.41012437l.00805567.08987563v3.5c0 .2454599.17687516.4496084.41012437.4919443l.08987563.0080557h9c.2454599 0 .4496084-.1768752.4919443-.4101244l.0080557-.0898756v-3.5c0-.27614237.2238576-.5.5-.5zm-5-7.5v7.792l3.1464466-3.14555339.7071068.70710678-4.3535534 4.35355341-4.35355339-4.35355341.70710678-.70710678 3.14644661 3.14555339v-7.792z"
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

IconDownload16.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDownload24 = ({ className, color }) => (
    <svg
        className={className}
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="m20 14c.5128358 0 .9355072.3860402.9932723.8833789l.0067277.1166211v3c0 1.5976809-1.24892 2.9036609-2.8237272 2.9949073l-.1762728.0050927h-12c-1.59768088 0-2.90366088-1.24892-2.99490731-2.8237272l-.00509269-.1762728v-3c0-.5522847.44771525-1 1-1 .51283584 0 .93550716.3860402.99327227.8833789l.00672773.1166211v3c0 .5128358.38604019.9355072.88337887.9932723l.11662113.0067277h12c.5128358 0 .9355072-.3860402.9932723-.8833789l.0067277-.1166211v-3c0-.5522847.4477153-1 1-1zm-8-11c.5128358 0 .9355072.38604019.9932723.88337887l.0067277.11662113v9.584l2.2928932-2.2911068c.360484-.3604839.927715-.3882135 1.3200062-.0831886l.0942074.0831886c.3604839.360484.3882135.927715.0831886 1.3200062l-.0831886.0942074-4 4c-.360484.3604839-.927715.3882135-1.3200062.0831886l-.0942074-.0831886-3.99999998-4c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136.36048396-.3604839.92771502-.3882135 1.32000622-.0831886l.09420734.0831886 2.29289322 2.2911068v-9.584c0-.55228475.4477153-1 1-1z"
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

IconDownload24.propTypes = {
    color: propTypes.string.isRequired,
    className: propTypes.string,
}

const IconDownload = ({ className, color, size }) => {
    switch (size) {
        case 16:
            return <IconDownload16 className={className} color={color} />

        case 24:
            return <IconDownload24 className={className} color={color} />

        default:
            return null
    }
}

IconDownload.defaultProps = {
    size: 16,
    color: 'inherit',
}

IconDownload.propTypes = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.oneOf([16, 24]),
}

export { IconDownload }
