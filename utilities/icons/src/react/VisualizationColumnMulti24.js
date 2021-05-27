import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationColumnMulti24({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            color={color}
        >
            <path
                fill="currentColor"
                d="M4 2v18h18v2H2V2h2zm4 10v6H6v-6h2zm3-4v10H9V8h2zm11 2v8h-2v-8h2zm-3-6v14h-2V4h2z"
            />
        </svg>
    )
}

SvgVisualizationColumnMulti24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationColumnMulti24
