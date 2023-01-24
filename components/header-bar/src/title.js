import PropTypes from 'prop-types'
import React from 'react'

export const Title = ({ app, instance }) => (
    <div data-test="headerbar-title">
        {app ? `${instance} - ${app}` : `${instance}`}

        <style jsx>{`
            div {
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0.01em;
                white-space: nowrap;
            }
        `}</style>
    </div>
)
Title.propTypes = {
    app: PropTypes.string,
    instance: PropTypes.string,
}
