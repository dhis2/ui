import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @returns {React.Component}
 */
export const FolderClosed = ({ dataTest }) => (
    <svg
        width="18px"
        height="18px"
        viewBox="0 0 18 18"
        version="1.1"
        data-test={`${dataTest}-iconfolderclosed`}
    >
        <g
            id="icon/folder/closed"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <path
                d="M2,3.5 C1.17157288,3.5 0.5,4.17157288 0.5,5 L0.5,13 C0.5,13.8284271 1.17157288,14.5 2,14.5 L12,14.5 C12.8284271,14.5 13.5,13.8284271 13.5,13 L13.5,7 C13.5,6.17157288 12.8284271,5.5 12,5.5 L6.69098301,5.5 L5.82917961,3.7763932 C5.7444836,3.60700119 5.57135204,3.5 5.38196601,3.5 L2,3.5 Z"
                id="Path-2"
                stroke="#6E7A8A"
                fill="#D5DDE5"
            />
        </g>

        <style jsx>{`
            svg {
                display: block;
                margin: 3px 0;
            }
        `}</style>
    </svg>
)

FolderClosed.propTypes = {
    dataTest: propTypes.string.isRequired,
}
