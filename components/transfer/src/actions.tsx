import { spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface ActionsProps {
    dataTest: string
    children?: React.ReactNode
}

export const Actions = ({ children, dataTest }: ActionsProps) => (
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
