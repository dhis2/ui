import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgAt16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8 1a7 7 0 017 7c0 2.244-.838 3.5-2.5 3.5-.901 0-1.554-.447-1.978-1.32-.485.862-1.335 1.32-2.522 1.32-1.87 0-3-1.467-3-3.5s1.13-3.5 3-3.5c.814 0 1.47.215 1.958.628.011-.216.026-.438.043-.666a.5.5 0 11.998.076c-.073.944-.097 1.771-.076 2.485.052.299.077.626.077.977l-.001.106c.193 1.619.715 2.394 1.501 2.394 1.004 0 1.5-.744 1.5-2.5a6 6 0 10-6.225 5.996L8 14h3a.5.5 0 01.09.992L11 15H8A7 7 0 018 1zm0 4.5c-1.253 0-2 .971-2 2.5s.747 2.5 2 2.5c1.363 0 2-.763 2-2.5l-.002.112a13.565 13.565 0 01-.07-1.005C9.728 5.998 9.1 5.5 8 5.5z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgAt16.propTypes = {
    color: propTypes.string,
}
export default SvgAt16
