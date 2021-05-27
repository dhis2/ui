import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgWarningFilled16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 15 16"
            width={15}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8.85 1.839l.056.103 5.43 11.635a1 1 0 01-.79 1.416L13.43 15H2.57a1 1 0 01-.95-1.314l.044-.109 5.43-11.635a1 1 0 011.757-.103zM8 11a1 1 0 100 2 1 1 0 000-2zm1-6H7v5h2z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgWarningFilled16.propTypes = {
    color: propTypes.string,
}
export default SvgWarningFilled16
