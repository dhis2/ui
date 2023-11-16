import PropTypes from 'prop-types'
import React from 'react'

export const Title = ({ app, instance }) => (
    <div data-test="headerbar-title">
        {app ? `${instance} - ${app}` : `${instance}`}

        <style jsx>{`
            div {
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 13px;
                letter-spacing: 0.01em;
                text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
                white-space: nowrap;
            }
        `}</style>
    </div>
)
Title.propTypes = {
    app: PropTypes.string,
    instance: PropTypes.string,
}
