import { spacers } from '@dhis2/ui-constants'
import React from 'react'

export interface ModalActionsProps {
    children?: React.ReactNode
    dataTest?: string
}

export const ModalActions = ({
    children,
    dataTest = 'dhis2-uicore-modalactions',
}: ModalActionsProps) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                order: 3;
                display: flex;
                justify-content: flex-end;
                align-self: flex-end;
                margin: ${spacers.dp16} 0 0;
            }
        `}</style>
    </div>
)
