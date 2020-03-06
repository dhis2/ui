import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

const commonStyles = css`
    svg {
        display: block;
        pointer-events: none;
    }
    svg .border {
        fill: ${colors.grey600};
    }
    svg .background,
    svg .indeterminate,
    svg .checkmark {
        fill: ${colors.white};
    }

    svg.checked .background,
    svg.indeterminate .background {
        fill: ${colors.teal400};
    }
    svg.valid .background {
        fill: ${colors.blue600};
    }
    svg.warning .background {
        fill: ${colors.yellow700};
    }
    svg.error .background {
        fill: ${colors.red500};
    }

    svg:not(.checked) .checkmark,
    svg:not(.indeterminate) .indeterminate {
        fill: none;
    }
    svg:not(.checked):not(.indeterminate) .background {
        fill: ${colors.white};
    }
`

export function Regular({ className }) {
    return (
        <svg
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                className="background"
                x="0"
                y="0"
                width="18"
                height="18"
                rx="3"
            ></rect>
            <path
                d="M3,0 L15,0 C16.6568542,0 18,1.34314575 18,3 L18,15 C18,16.6568542 16.6568542,18 15,18 L3,18 C1.34314575,18 0,16.6568542 0,15 L0,3 C0,1.34314575 1.34314575,0 3,0 Z M3,2 C2.44771525,2 2,2.44771525 2,3 L2,15 C2,15.5522847 2.44771525,16 3,16 L15,16 C15.5522847,16 16,15.5522847 16,15 L16,3 C16,2.44771525 15.5522847,2 15,2 L3,2 Z"
                className="border"
            ></path>
            <path
                d="M4.74451387,8.02852516 C4.39595738,8.11985643 4.12375034,8.39235188 4.03251575,8.74127768 C3.94128115,9.09020348 4.04521722,9.46125864 4.30437605,9.71182782 L7.29823844,12.7078028 C7.68753993,13.0973991 8.31859767,13.0973991 8.70789916,12.7078028 L13.695624,6.71585285 C13.9547828,6.46528367 14.0587189,6.09422851 13.9674843,5.74530271 C13.8762497,5.39637691 13.6040426,5.12388146 13.2554861,5.0325502 C12.9069296,4.94121893 12.5362672,5.04526513 12.2859632,5.30469855 L8.0030688,10.5910713 L5.71403676,8.30067351 C5.46373279,8.0412401 5.09307036,7.9371939 4.74451387,8.02852516 Z"
                className="checkmark"
            ></path>
            <rect
                className="indeterminate"
                x="4"
                y="8"
                width="10"
                height="2"
                rx="1"
            ></rect>
            <style jsx>{commonStyles}</style>
            <style jsx>{`
                svg {
                    width: 18px;
                    height: 18px;
                }
                svg.checked .border,
                svg.indeterminate .border {
                    fill: ${colors.teal700};
                }

                svg.disabled .background {
                    fill: ${colors.grey300};
                }
                svg.disabled .border {
                    fill: ${colors.grey400};
                }

                svg.valid .border {
                    fill: ${colors.blue600};
                }
                svg.valid.checked .border,
                svg.valid.indeterminate .border {
                    fill: ${colors.blue700};
                }

                svg.warning .border {
                    fill: ${colors.yellow700};
                }
                svg.warning.checked .border,
                svg.warning.indeterminate .border {
                    fill: ${colors.yellow800};
                }

                svg.error .border {
                    fill: ${colors.red500};
                }
                svg.error.checked .border,
                svg.error.indeterminate .border {
                    fill: ${colors.red700};
                }
            `}</style>
        </svg>
    )
}
Regular.propTypes = {
    className: propTypes.string,
}

export function Dense({ className }) {
    return (
        <svg
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                className="background"
                fill="#009688"
                x="0"
                y="0"
                width="14"
                height="14"
                rx="2"
            ></rect>
            <path
                d="M2,0 L12,0 C13.1045695,0 14,0.8954305 14,2 L14,12 C14,13.1045695 13.1045695,14 12,14 L2,14 C0.8954305,14 0,13.1045695 0,12 L0,2 C0,0.8954305 0.8954305,0 2,0 Z M2,1 C1.44771525,1 1,1.44771525 1,2 L1,12 C1,12.5522847 1.44771525,13 2,13 L12,13 C12.5522847,13 13,12.5522847 13,12 L13,2 C13,1.44771525 12.5522847,1 12,1 L2,1 Z"
                className="border"
                fill="#004D40"
            ></path>
            <path
                d="M10.3520005,3.30015877 L5.54268293,8.03252726 L3.64634146,6.16652726 L2.28668615,7.5044281 L5.54310367,10.7010587 L11.7145993,4.628307 L10.3520005,3.30015877 Z M5.54268293,9.43547274 L5.61193184,9.36733181 L5.54226219,9.29894127 L5.47309681,9.367 L5.54268293,9.43547274 Z M10.6496329,4.41023392 L10.6495057,4.35652297 L10.5648412,4.35672356 L10.2854007,4.631693 L10.3553166,4.69984123 L10.6496329,4.41023392 Z M3.42891348,7.22439304 L3.35030905,7.22439304 L3.35034135,7.27820863 L3.64634146,7.56947274 L3.71331385,7.5035719 L3.42891348,7.22439304 Z"
                className="checkmark"
                fill="#FFFFFF"
            ></path>
            <rect
                className="indeterminate"
                fill="#FFFFFF"
                x="3"
                y="6"
                width="8"
                height="2"
            ></rect>
            <style jsx>{commonStyles}</style>
            <style jsx>{`
                svg {
                    width: 14px;
                    height: 14px;
                }

                svg.checked .border,
                svg.indeterminate .border {
                    fill: ${colors.teal800};
                }

                svg.disabled .background {
                    fill: ${colors.grey400};
                }
                svg.disabled .border {
                    fill: ${colors.grey400};
                }
                svg.disabled.checked .border,
                svg.disabled.indeterminate .border {
                    fill: ${colors.grey500};
                }

                svg.valid .border {
                    fill: ${colors.blue600};
                }
                svg.valid.checked .border,
                svg.valid.indeterminate .border {
                    fill: ${colors.blue800};
                }

                svg.warning .border {
                    fill: ${colors.yellow700};
                }
                svg.warning.checked .border,
                svg.warning.indeterminate .border {
                    fill: ${colors.yellow800};
                }

                svg.error .border {
                    fill: ${colors.red500};
                }
                svg.error.checked .border,
                svg.error.indeterminate .border {
                    fill: ${colors.red800};
                }
            `}</style>
        </svg>
    )
}
Dense.propTypes = {
    className: propTypes.string,
}
