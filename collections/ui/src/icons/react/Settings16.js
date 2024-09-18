import PropTypes from 'prop-types'
import * as React from 'react'
function SvgSettings16({ color, dataTest, ariaLabel }) {
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
                d="M10 1v2.416l.264.125a5 5 0 01.689.424l.014.011 2.095-1.208 2 3.464-2.094 1.209.016.15.009.136L13 8c0 .182-.01.364-.03.543l-.002.015 2.094 1.21-2 3.464-2.095-1.209-.236.166a4.991 4.991 0 01-.712.386l-.019.008V15H6v-2.417l-.263-.123a5 5 0 01-.69-.425l-.015-.012-2.094 1.209-2-3.464 2.093-1.21-.015-.15-.009-.135L3 8c0-.183.01-.364.03-.543l.001-.016L.938 6.232l2-3.464 2.094 1.208.238-.165c.226-.148.464-.277.711-.386L6 3.416V1zM9 2H7v2.126a3.996 3.996 0 00-1.853 1.07L3.304 4.135l-1 1.732 1.841 1.063a4.004 4.004 0 000 2.142l-1.841 1.063 1 1.732 1.843-1.063c.501.51 1.139.887 1.853 1.071V14h2v-2.126a3.996 3.996 0 001.853-1.07l1.843 1.062 1-1.732-1.84-1.064a4.004 4.004 0 000-2.14l1.84-1.064-1-1.732-1.843 1.063a3.996 3.996 0 00-1.852-1.07zM8 6a2 2 0 110 4 2 2 0 010-4zm0 1a1 1 0 100 2 1 1 0 000-2z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgSettings16.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgSettings16
