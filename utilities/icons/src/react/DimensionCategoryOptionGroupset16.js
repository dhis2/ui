import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionCategoryOptionGroupset16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1H2v12h12zm-5 8l-1 1-1-1zm2-2l-1 1H6L5 8zm2-2l-1 1H4L3 6z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    )
}

SvgDimensionCategoryOptionGroupset16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionCategoryOptionGroupset16
