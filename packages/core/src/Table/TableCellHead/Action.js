import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
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
    children: propTypes.node.isRequired,
    onClick: propTypes.func.isRequired,
}
