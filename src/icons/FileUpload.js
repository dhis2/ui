import React from 'react'
import propTypes from '@dhis2/prop-types'

export function FileUpload({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" />
            <style jsx>{`
                svg {
                    fill: inherit;
                    height: 24px;
                    width: 24px;
                    vertical-align: middle;
                    pointer-events: none;
                }
            `}</style>
        </svg>
    )
}

FileUpload.propTypes = {
    className: propTypes.string,
}
