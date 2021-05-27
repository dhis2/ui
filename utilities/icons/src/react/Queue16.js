import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgQueue16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 13a1 1 0 01-1 1H5a1 1 0 01-1-1zm1-2a1 1 0 01-1 1H4a1 1 0 01-1-1zm0-9a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm0 1H3v6h10z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgQueue16.propTypes = {
    color: propTypes.string,
}
export default SvgQueue16
