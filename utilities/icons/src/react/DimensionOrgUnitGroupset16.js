import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionOrgUnitGroupset16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1H2v12h12zM5 3v2h3V4h4v4H8V6H5v4h3V9h4v4H8v-2H4V3zm6 7H9v2h2zm0-5H9v2h2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDimensionOrgUnitGroupset16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionOrgUnitGroupset16
