import PropTypes from 'prop-types'
import * as React from 'react'
function SvgDataInteger24({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M6.318 16V8H4.94L2.951 9.277v1.328L4.822 9.41h.047V16zm7.52 0v-1.21h-3.484v-.056l1.378-1.402c1.555-1.492 1.985-2.219 1.985-3.121 0-1.34-1.09-2.32-2.7-2.32-1.585 0-2.71.984-2.71 2.504h1.379c0-.817.515-1.329 1.312-1.329.762 0 1.328.465 1.328 1.22 0 .667-.406 1.144-1.195 1.944l-2.777 2.723V16zm4.223.11c1.71 0 2.957-.981 2.953-2.333.004-1-.621-1.718-1.743-1.879v-.062c.868-.188 1.45-.832 1.446-1.73.004-1.22-1.035-2.215-2.633-2.215-1.555 0-2.758.925-2.79 2.265h1.395c.024-.672.649-1.09 1.387-1.09.746 0 1.242.454 1.238 1.125.004.7-.574 1.164-1.402 1.164h-.707v1.118h.707c1.012 0 1.613.507 1.61 1.23.003.707-.61 1.192-1.465 1.192-.805 0-1.426-.418-1.461-1.07h-1.469c.039 1.35 1.246 2.284 2.934 2.284z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgDataInteger24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgDataInteger24
