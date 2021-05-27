import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgLegend16({ color }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <g fill="currentColor" fillRule="evenodd">
                <rect height={5} opacity={0.9} rx={1} width={5} x={2} y={2} />
                <rect height={5} opacity={0.3} rx={1} width={5} x={9} y={2} />
                <rect height={5} opacity={0.5} rx={1} width={5} x={2} y={9} />
                <rect height={5} opacity={0.7} rx={1} width={5} x={9} y={9} />
            </g>
        </svg>
    )
}

SvgLegend16.propTypes = {
    color: propTypes.string,
}
export default SvgLegend16
