import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgSubscribeOff24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M5.263 8.092l1.74 1.739L7 10v2.606l-2 2.999V16h8.171l2.758 2.757A4.001 4.001 0 018 18H3v-3l2-3v-2c0-.662.092-1.302.263-1.908zm-.556-4.8l16 16-1.414 1.415-16-16zM14 18h-4a2 2 0 003.995.15zM13 1l.001 2.071A7.002 7.002 0 0119 10v2l2 3v3h-.171l-2-2H19v-.393l-2-3.001V10a5 5 0 00-8.097-3.926l-1.421-1.42A6.97 6.97 0 0111 3.07V1z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgSubscribeOff24.propTypes = {
    color: propTypes.string,
}
export default SvgSubscribeOff24
