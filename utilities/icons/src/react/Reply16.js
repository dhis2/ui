import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgReply16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M7 2v4h4c2 0 3 2.333 3 7l-.34-.5C12.495 10.835 11.609 10 11 10H7v4L1 8zM6 4.414L2.415 8 6 11.585V9h5c.554 0 1.105.263 1.699.792l.102.094-.036-.223c-.306-1.755-.894-2.595-1.667-2.659L11 7H6z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgReply16.propTypes = {
    color: propTypes.string,
}
export default SvgReply16
