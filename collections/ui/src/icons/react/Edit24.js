import PropTypes from 'prop-types'
import * as React from 'react'
function SvgEdit24({ color, dataTest, ariaLabel }) {
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
                d="M17.287 4.297l.127.117 2.172 2.172a2 2 0 01.117 2.701l-.117.127L9 20H4v-5L14.586 4.414a2 2 0 012.701-.117zM16 5.828l-9.586 9.585 2.171 2.171L18.172 8z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgEdit24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgEdit24
