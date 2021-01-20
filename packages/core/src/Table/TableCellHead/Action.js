import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const Action = ({ onClick, children }) => (
    <span onClick={onClick}>
        {children}
        <style jsx>{`
            span {
                background: transparent;
                width: 24px;
                height: 36px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            span:hover {
                background: ${colors.grey400};
                cursor: pointer;
            }
        `}</style>
    </span>
)

Action.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}
