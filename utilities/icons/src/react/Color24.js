import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgColor24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M12 2l.71.594C17.57 6.72 20 10.188 20 13a8 8 0 11-16 0c0-2.946 2.667-6.612 8-11zm0 2.622l-.033.029C7.944 8.177 6 11.033 6 13a6 6 0 0010.471 4H12v-2h5.658A5.99 5.99 0 0018 13h-6v-2l5.474.001c-.292-.617-.708-1.284-1.248-2L12 9V7l2.506.001a37.842 37.842 0 00-2.143-2.058z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgColor24.propTypes = {
    color: propTypes.string,
}
export default SvgColor24
