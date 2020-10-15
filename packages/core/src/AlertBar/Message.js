import propTypes from '@dhis2/prop-types'
import React from 'react'

const Message = ({ children }) => (
    <div>
        {children}
        <style jsx>{`
            div {
                flex-grow: 1;
                min-width: 240px;
            }
        `}</style>
    </div>
)

Message.propTypes = {
    children: propTypes.string.isRequired,
}

export { Message }
