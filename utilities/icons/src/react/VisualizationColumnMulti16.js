import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationColumnMulti16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <g fill="currentColor" fillRule="evenodd">
                <path d="M0 0h1v15h15v1H0z" />
                <path d="M4 11v4H2v-4zm3-2v6H5V9zm6-7v13h-2V2zm3 4v9h-2V6z" />
            </g>
        </svg>
    )
}

SvgVisualizationColumnMulti16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationColumnMulti16
