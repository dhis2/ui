import React from 'react'
import propTypes from '@dhis2/prop-types'

export function CancelOutline({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={className}
        >
            <path d="M11.2928932,3.29289322 L12.7071068,4.70710678 L9.41389322,7.99989322 L12.7071068,11.2928932 L11.2928932,12.7071068 L7.99989322,9.41389322 L4.70710678,12.7071068 L3.29289322,11.2928932 L6.58589322,7.99989322 L3.29289322,4.70710678 L4.70710678,3.29289322 L7.99989322,6.58589322 L11.2928932,3.29289322 Z" />

            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 16px;
                    width: 16px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}
CancelOutline.propTypes = {
    className: propTypes.string,
}
