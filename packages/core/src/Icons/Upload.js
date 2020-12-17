import React from 'react'
import propTypes from '@dhis2/prop-types'

export function Upload({ className }) {
    return (
        <svg className={className}>
            <path d="M0 0h24v24H0z" fill="none" />
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

Upload.propTypes = {
    className: propTypes.string,
}
