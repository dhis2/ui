import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionOrgUnit16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M6 1v4H4v2h6V6h4v4h-4V8H4v4h6v-1h4v4h-4v-2H3.5a.5.5 0 01-.492-.41L3 12.5V5H2V1zm7 11h-2v2h2zm0-5h-2v2h2zM5 2H3v2h2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDimensionOrgUnit16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionOrgUnit16
