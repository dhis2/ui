import PropTypes from 'prop-types'
import * as React from 'react'
function SvgViewOff16({ color, dataTest, ariaLabel }) {
    return (
        <svg
            height={16}
            viewBox="0 0 16 16"
            width={16}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
            data-test={dataTest}
        >
            <path
                d="M2.354 1.646l12 12-.708.708-12-12zm.649 3.476l.707.71a8.15 8.15 0 00-1.347 1.52A4.336 4.336 0 002 8l.042.091c.055.114.164.321.321.557a8.15 8.15 0 001.306 1.484C4.967 11.3 6.479 12 8 12c.544 0 1.088-.09 1.621-.259l.78.782A6.475 6.475 0 018 13c-4 0-7-4-7-5 0-.5.751-1.752 2.003-2.878zM5.1 7.224l.903.901.001.024a2 2 0 001.87 1.847l.902.902a3.004 3.004 0 01-3.676-3.674zM8 3c4 0 7 4 7 5 0 .5-.75 1.751-2.002 2.877l-.708-.708.041-.037a8.15 8.15 0 001.306-1.484C13.873 8.294 14 8.004 14 8l-.042-.091a4.902 4.902 0 00-.321-.557 8.15 8.15 0 00-1.306-1.484C11.033 4.7 9.521 4 8 4c-.544 0-1.087.09-1.62.258l-.782-.78A6.476 6.476 0 018 3zm0 2a3 3 0 012.899 3.776l-.904-.903v-.022a2 2 0 00-1.87-1.847l-.902-.902C7.47 5.035 7.73 5 8 5z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgViewOff16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgViewOff16
