import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgMailOpen24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12.614 2.478l7.614 5.921A2 2 0 0121 9.98V20a2 2 0 01-2 2H5a2 2 0 01-2-2V9.978A2 2 0 013.772 8.4l7.614-5.921a1 1 0 011.228 0zM19 11.414L13.414 17a2 2 0 01-2.701.117L10.586 17 5 11.415V20h14zm-7-6.881L5.783 9.369 12 15.586l6.216-6.217z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgMailOpen24.propTypes = {
    color: propTypes.string,
}
export default SvgMailOpen24
