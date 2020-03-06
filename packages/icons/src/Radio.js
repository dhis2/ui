import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors, theme } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

const styles = css`
    svg {
        display: block;
        pointer-events: none;
    }

    svg {
        fill: ${theme.default};
    }

    circle.background {
        fill: ${colors.white};
    }

    svg.checked {
        fill: ${colors.teal400};
    }

    svg.disabled {
        fill: ${colors.grey400};
    }

    svg.error {
        fill: ${theme.error};
    }

    svg.valid {
        fill: ${theme.valid};
    }

    svg.warning {
        fill: ${theme.warning};
    }

    svg:not(.checked) .inner,
    svg:not(.checked) .outer.checked {
        fill: none;
    }
`

export function Regular({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            className={className}
        >
            <circle className="background" cx="9" cy="9" r="9"></circle>
            <path
                d="M9,18 C13.9705627,18 18,13.9705627 18,9 C18,4.02943725 13.9705627,0 9,0 C4.02943725,0 0,4.02943725 0,9 C0,13.9705627 4.02943725,18 9,18 Z M9,16 C5.13400675,16 2,12.8659932 2,9 C2,5.13400675 5.13400675,2 9,2 C12.8659932,2 16,5.13400675 16,9 C16,12.8659932 12.8659932,16 9,16 Z"
                className="outer"
            ></path>
            <circle className="inner" cx="9" cy="9" r="5"></circle>
            <style jsx>{`
                svg {
                    height: 18px;
                    width: 18px;
                }
            `}</style>
            <style jsx>{styles}</style>
        </svg>
    )
}
Regular.propTypes = {
    className: propTypes.string,
}

export function Dense({ className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            className={className}
        >
            <circle className="background" cx="7" cy="7" r="7"></circle>
            <path
                d="M7,14 C10.8659932,14 14,10.8659932 14,7 C14,3.13400675 10.8659932,0 7,0 C3.13400675,0 0,3.13400675 0,7 C0,10.8659932 3.13400675,14 7,14 Z M7,13 C3.6862915,13 1,10.3137085 1,7 C1,3.6862915 3.6862915,1 7,1 C10.3137085,1 13,3.6862915 13,7 C13,10.3137085 10.3137085,13 7,13 Z"
                className="outer unchecked"
            ></path>
            <path
                d="M7,14 C10.8659932,14 14,10.8659932 14,7 C14,3.13400675 10.8659932,0 7,0 C3.13400675,0 0,3.13400675 0,7 C0,10.8659932 3.13400675,14 7,14 Z M7,12 C4.23857625,12 2,9.76142375 2,7 C2,4.23857625 4.23857625,2 7,2 C9.76142375,2 12,4.23857625 12,7 C12,9.76142375 9.76142375,12 7,12 Z"
                className="outer checked"
            ></path>
            <circle className="inner" cx="7" cy="7" r="3"></circle>
            <style jsx>{`
                svg {
                    height: 14px;
                    width: 14px;
                }
            `}</style>
            <style jsx>{styles}</style>
        </svg>
    )
}
Dense.propTypes = {
    className: propTypes.string,
}
