import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgVisualizationLineMulti16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <g fill="currentColor" fillRule="evenodd">
                <path d="M0 0h1v15h15v1H0z" />
                <g fillRule="nonzero">
                    <path d="M2.685 2.695l3.398 7.646L9.896 3.67l4.69 5.861-1.172.938-3.31-4.139-4.188 7.328L1.315 3.305z" />
                    <path d="M13.329 4.665l1.342.67-4.578 9.156-4.21-6.314L2.53 11.53l-1.06-1.06 4.647-4.647 3.79 5.685z" />
                </g>
            </g>
        </svg>
    )
}

SvgVisualizationLineMulti16.propTypes = {
    color: propTypes.string,
}
export default SvgVisualizationLineMulti16
