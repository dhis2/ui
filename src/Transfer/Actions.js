import React from 'react'
import propTypes from '@dhis2/prop-types'
import { spacers } from '../theme.js'

export const Actions = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                align-content: center;
                display: flex;
                flex-direction: column;
                flex-shrink: 1;
                justify-content: center;
                margin: 0 ${spacers.dp8};
            }

            div > :global(button) {
                margin-top: 8px;
            }

            div > :global(button):first-child {
                margin-top: 0;
            }
        `}</style>
    </div>
)

Actions.propTypes = {
    dataTest: propTypes.string.isRequired,
    children: propTypes.node,
}
