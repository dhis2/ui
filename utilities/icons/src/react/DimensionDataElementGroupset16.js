import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgDimensionDataElementGroupset16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1zm0 1H2v12h12zm-3 7a2 2 0 110 4 2 2 0 010-4zM7 9v4H3V9zm4 1a1 1 0 100 2 1 1 0 000-2zm-5 0H4v2h2zM5 3a2 2 0 110 4 2 2 0 010-4zm8 0v4H9V3zM5 4a1 1 0 100 2 1 1 0 000-2zm7 0h-2v2h2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgDimensionDataElementGroupset16.propTypes = {
    color: propTypes.string,
}
export default SvgDimensionDataElementGroupset16
