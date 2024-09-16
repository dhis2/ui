import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSync16({ color, dataTest, ariaLabel }) {
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
                d="M12.5 3.5h.012c.02 0 .041.002.062.005L12.5 3.5a.502.502 0 01.284.089l.018.013c.014.01.027.02.04.033l.012.011 3 3a.5.5 0 01-.638.765l-.07-.057L13 5.206V12.5a2.5 2.5 0 01-2.336 2.495L10.5 15h-7a.5.5 0 01-.09-.992L3.5 14h7a1.5 1.5 0 001.493-1.356L12 12.5V5.206L9.854 7.354a.5.5 0 01-.638.057l-.07-.057a.5.5 0 01-.057-.638l.057-.07 3-3 .013-.011a.503.503 0 01.039-.033l-.052.044A.502.502 0 0112.5 3.5zm0-2.5a.5.5 0 01.09.992L12.5 2h-7a1.5 1.5 0 00-1.493 1.356L4 3.5v7.293l2.146-2.147a.5.5 0 01.638-.057l.07.057a.5.5 0 01.057.638l-.057.07-3 3-.013.011a.503.503 0 01-.039.033l.052-.044a.502.502 0 01-.354.146h-.02a.503.503 0 01-.052-.005l.072.005a.502.502 0 01-.284-.089l-.018-.013a.503.503 0 01-.04-.033l-.012-.011-3-3a.5.5 0 01.638-.765l.07.057L3 10.793V3.5a2.5 2.5 0 012.336-2.495L5.5 1z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSync16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSync16
