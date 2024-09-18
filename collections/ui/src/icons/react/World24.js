import PropTypes from 'prop-types'
import * as React from 'react'
function SvgWorld24({ color, dataTest, ariaLabel }) {
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
                d="M12 3a9 9 0 110 18 9 9 0 010-18zm0 2a6.967 6.967 0 00-3.848 1.152l.494.494a.5.5 0 00.708 0l.5-.5A.5.5 0 0110.207 6h.859a.5.5 0 01.416.777l-1.434 2.15a.5.5 0 00-.069.157l-.384 1.537A.5.5 0 019.11 11H8.5a.5.5 0 01-.5-.5V10a.414.414 0 00-.707-.293l-.94.94a.5.5 0 000 .707l1.5 1.5a.5.5 0 00.354.146h1.484a.5.5 0 01.447.276l.75 1.5a.5.5 0 010 .448L9.275 18.45c.838.354 1.759.55 2.725.55a6.968 6.968 0 004.026-1.273.43.43 0 01-.026-.152V15.36a.5.5 0 00-.342-.474l-2.184-.728a.5.5 0 01-.316-.632l.728-2.184A.5.5 0 0114.36 11h4.57a6.951 6.951 0 00-.712-2.218l-.928.928a.5.5 0 01-.631.063l-2.243-1.496a.5.5 0 01-.139-.693l1.133-1.699A6.968 6.968 0 0012 5zm-7 7.009a6.98 6.98 0 002.435 5.298l-.398-1.195a.5.5 0 00-.12-.195l-.77-.77A.5.5 0 016 14.792v-1.586a.5.5 0 00-.146-.353l-.797-.797z"
                fill="currentColor"
            />
        </svg>
    )
}
SvgWorld24.propTypes = {
    color: PropTypes.string,
    dataTest: PropTypes.string,
    ariaLabel: PropTypes.string,
}
export default SvgWorld24
