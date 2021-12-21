import PropTypes from 'prop-types'
import React from 'react'

const Message = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                flex-grow: 1;
            }
        `}</style>
    </div>
)

Message.propTypes = {
    children: PropTypes.string.isRequired,
}

export { Message }
