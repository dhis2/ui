import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLegend24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <g fill="currentColor" fillRule="evenodd">
                <rect height={7} opacity={0.9} rx={1} width={7} x={4} y={4} />
                <rect height={7} opacity={0.3} rx={1} width={7} x={13} y={4} />
                <rect height={7} opacity={0.5} rx={1} width={7} x={4} y={13} />
                <rect height={7} opacity={0.7} rx={1} width={7} x={13} y={13} />
            </g>
        </svg>
    )
}

SvgLegend24.propTypes = {
    color: propTypes.string,
}
export default SvgLegend24
