import * as React from 'react'
import propTypes from '@dhis2/prop-types'

function SvgStar24({ color }) {
    return (
        <svg
            height={24}
            viewBox="0 0 24 24"
            width={24}
            xmlns="http://www.w3.org/2000/svg"
            color={color}
        >
            <path
                d="M8.397 7.041l-6.051.88-.114.022a1 1 0 00-.44 1.683l4.378 4.268-1.033 6.027-.013.11a1 1 0 001.463.944L12 18.13l5.413 2.845.1.047a1 1 0 001.35-1.1l-1.034-6.028 4.38-4.268.078-.086a1 1 0 00-.633-1.62l-6.052-.879-2.705-5.484a1 1 0 00-1.794 0zM12 4.258l2.042 4.14.061.106a1 1 0 00.692.44l4.566.664-3.304 3.221-.082.09a1 1 0 00-.205.795l.779 4.548-4.084-2.147-.111-.05a1 1 0 00-.82.05L7.45 18.262l.78-4.548.014-.122a1 1 0 00-.301-.763L4.638 9.608l4.567-.663a1 1 0 00.753-.548z"
                fill="currentColor"
            />
        </svg>
    )
}

SvgStar24.propTypes = {
    color: propTypes.string,
}
export default SvgStar24
