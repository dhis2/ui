import PropTypes from 'prop-types'
import * as React from 'react'
function SvgLegend24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
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
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgLegend24
