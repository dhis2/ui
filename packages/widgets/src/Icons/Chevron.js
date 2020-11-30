import React from 'react'
import propTypes from '@dhis2/prop-types'

export function ChevronRight({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
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
ChevronRight.propTypes = {
    className: propTypes.string,
}

export function ChevronLeft({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className={className}
        >
            <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
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
ChevronLeft.propTypes = {
    className: propTypes.string,
}
