import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import { Action } from './action.tsx'

export interface AlertBarAction {
    label: string
    onClick: (event: React.MouseEvent<HTMLSpanElement>) => void
}

interface ActionsProps {
    dataTest: string
    hide: (event: React.MouseEvent<HTMLSpanElement>) => void
    actions?: AlertBarAction[]
}

const Actions = ({ actions, hide, dataTest }: ActionsProps) => {
    if (!actions) {
        return null
    }

    return (
        <div>
            {actions.map((action) => (
                <Action
                    key={action.label}
                    {...action}
                    hide={hide}
                    dataTest={`${dataTest}-action`}
                />
            ))}
            <style jsx>{`
                div {
                    margin-inline-start: ${spacers.dp48};
                    margin-inline-end: -${spacers.dp12};
                }
            `}</style>
        </div>
    )
}

export { Actions }
