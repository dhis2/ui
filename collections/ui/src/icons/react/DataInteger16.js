import PropTypes from 'prop-types'
import * as React from 'react'
function SvgDataInteger16({ color, dataTest, ariaLabel }) {
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
                d="M3.868 11V5.182H2.865L1.42 6.11v.966l1.36-.87h.035V11zm5.469 0v-.88H6.803v-.04l1.002-1.02C8.936 7.974 9.25 7.446 9.25 6.79c0-.975-.793-1.688-1.963-1.688-1.154 0-1.972.716-1.972 1.821h1.003c0-.593.375-.966.954-.966.554 0 .966.338.966.887 0 .486-.295.832-.87 1.415l-2.019 1.98V11zm3.07.08c1.245 0 2.151-.714 2.148-1.696.003-.728-.451-1.25-1.267-1.367v-.045c.631-.137 1.054-.606 1.051-1.259.003-.886-.752-1.61-1.914-1.61-1.131 0-2.006.673-2.029 1.647h1.015c.017-.489.471-.793 1.008-.793.543 0 .903.33.9.819.003.508-.417.846-1.02.846h-.513v.813h.514c.736 0 1.173.369 1.17.895.003.514-.443.866-1.065.866-.585 0-1.037-.304-1.063-.778h-1.068c.029.983.906 1.662 2.134 1.662z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgDataInteger16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgDataInteger16
