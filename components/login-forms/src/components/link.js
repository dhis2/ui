import PropTypes from 'prop-types'
import React from 'react'

const updateHistory = (to) => {
    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
}

export const Link = ({ to, children }) => (
    <>
        <span
            onClick={() => {
                updateHistory(to)
            }}
        >
            {children}
        </span>
        <style>
            {`
        span * {
            text-decoration: underline;
            cursor: pointer;
        }
    `}
        </style>
    </>
)

Link.propTypes = {
    children: PropTypes.node,
    to: PropTypes.string,
}
