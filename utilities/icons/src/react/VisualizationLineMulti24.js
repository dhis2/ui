import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationLineMulti24({ color }) {
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
                d="M4 2v18h18v2H2V2h2zm2.91 1.586L8.898 7.96l2.313-2.774 1.94 3.882 2.743-4.936 2.968 4.155 1.228-2.7 1.82.828-1.706 3.752 1.61 2.253-1.628 1.162-.938-1.313-3.205 7.054-2.985-5.968-2.147 3.866-2.516-5.533-1.627 1.953-1.536-1.28 2.244-2.695L5.09 4.414l1.82-.828zm9.196 4.282l-1.871 3.367 1.722 3.442 1.949-4.289-1.8-2.52zm-5.317.947l-.972 1.166 1.272 2.798.885-1.593-1.185-2.371z"
            />
        </svg>
    )
}

SvgVisualizationLineMulti24.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationLineMulti24
