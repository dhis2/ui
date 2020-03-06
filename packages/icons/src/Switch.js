import React from 'react'
import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import css from 'styled-jsx/css'

const styles = css`
    svg {
        display: block;
        pointer-events: none;
        height: 18px;
        width: 35px;
    }

    svg.dense {
        height: 14px;
        width: 27px;
    }

    svg .background,
    svg .border {
        fill: ${colors.grey600};
    }

    svg .checkmark,
    svg .cross,
    svg .handle {
        fill: ${colors.white};
    }

    svg.checked .handle-unchecked,
    svg:not(.checked) .handle-checked {
        fill: none;
    }

    svg.checked .background {
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

    svg.checked .border {
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
    svg.warning.checked .border {
        fill: ${colors.yellow800};
    }

    svg.error .border {
        fill: ${colors.red500};
    }
    svg.error.checked .border {
        fill: ${colors.red700};
    }
`

export function Regular({ className }) {
    return (
        <svg
            viewBox="0 0 42 22"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M0,11 L0,11 C0,4.92486775 4.92076837,0 11.0075657,0 L30.9924343,0 C37.071745,0 42,4.923532 42,11 L42,11 C42,17.0751322 37.0792316,22 30.9924343,22 L11.0075657,22 C4.92825504,22 0,17.0791222 0,11 L0,11 Z"
                className="background"
                fill="red"
            ></path>
            <path
                d="M30.9924343,0 C36.975248,0 41.8432574,4.76846989 41.99629,10.7115309 L42,11 C42,17.0751322 37.0792316,22 30.9924343,22 L11.0075657,22 C5.02475203,22 0.156742552,17.2341007 0.00370995454,11.2885915 L0,11 C0,4.92486775 4.92076837,0 11.0075657,0 L30.9924343,0 Z M30.9924343,1 L11.0075657,1 C5.47559009,1 0.99991738,5.47461611 0.99991738,10.9871457 L1.00337887,11.2628608 C1.14271146,16.6761076 5.5768313,21 11.0075657,21 L30.9924343,21 C36.5244099,21 41.0000827,16.5253839 41.0000827,11.0128598 L40.9966214,10.7372722 C40.8572703,5.32553352 36.4222391,1 30.9924343,1 Z"
                className="border"
                // fill="#00695C"
                // fillRule="nonzero"
            ></path>
            <path
                d="M27.7071068,7.29289322 L30,9.585 L32.2928932,7.29289322 C32.6533772,6.93240926 33.2206082,6.90467972 33.6128994,7.20970461 L33.7071068,7.29289322 C34.0976311,7.68341751 34.0976311,8.31658249 33.7071068,8.70710678 L33.7071068,8.70710678 L31.415,11 L33.7071068,13.2928932 C34.0976311,13.6834175 34.0976311,14.3165825 33.7071068,14.7071068 C33.3165825,15.0976311 32.6834175,15.0976311 32.2928932,14.7071068 L30,12.415 L27.7071068,14.7071068 C27.3466228,15.0675907 26.7793918,15.0953203 26.3871006,14.7902954 L26.2928932,14.7071068 C25.9023689,14.3165825 25.9023689,13.6834175 26.2928932,13.2928932 L26.2928932,13.2928932 L28.585,11 L26.2928932,8.70710678 C25.9023689,8.31658249 25.9023689,7.68341751 26.2928932,7.29289322 C26.6834175,6.90236893 27.3165825,6.90236893 27.7071068,7.29289322 Z"
                className="cross"
                fill="#FFFFFF"
            ></path>
            <path
                d="M7.74451387,10.0285252 C7.39595738,10.1198564 7.12375034,10.3923519 7.03251575,10.7412777 C6.94128115,11.0902035 7.04521722,11.4612586 7.30437605,11.7118278 L10.2982384,14.7078028 C10.6875399,15.0973991 11.3185977,15.0973991 11.7078992,14.7078028 L16.695624,8.71585285 C16.9547828,8.46528367 17.0587189,8.09422851 16.9674843,7.74530271 C16.8762497,7.39637691 16.6040426,7.12388146 16.2554861,7.0325502 C15.9069296,6.94121893 15.5362672,7.04526513 15.2859632,7.30469855 L11.0030688,12.5910713 L8.71403676,10.3006735 C8.46373279,10.0412401 8.09307036,9.9371939 7.74451387,10.0285252 Z"
                className="checkmark"
                // fill="#FFFFFF"
                // fillRule="nonzero"
            ></path>
            <path
                d="M11,20 C15.9705627,20 20,15.9705627 20,11 C20,6.02943725 15.9705627,2 11,2 C6.02943725,2 2,6.02943725 2,11 C2,15.9705627 6.02943725,20 11,20 Z"
                className="handle handle-unchecked"
                // fill="#FFFFFF"
            ></path>
            <path
                d="M31,20 C35.9705627,20 40,15.9705627 40,11 C40,6.02943725 35.9705627,2 31,2 C26.0294373,2 22,6.02943725 22,11 C22,15.9705627 26.0294373,20 31,20 Z"
                className="handle handle-checked"
                // fill="#FFFFFF"
            ></path>
            <style jsx>{styles}</style>
        </svg>
    )
}
Regular.propTypes = {
    className: propTypes.string,
}
