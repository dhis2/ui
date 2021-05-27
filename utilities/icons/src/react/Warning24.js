import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgWarning24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12.847 2.794l.056.102 8.416 17.674a1 1 0 01-.786 1.423l-.117.007H3.584a1 1 0 01-.947-1.322l.044-.108 8.416-17.674a1 1 0 011.75-.102zM12 5.65L5.167 19.999h13.665zM12 17a1 1 0 110 2 1 1 0 010-2zm1-7v6h-2v-6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgWarning24.propTypes = {
    color: propTypes.string,
}
export default SvgWarning24
