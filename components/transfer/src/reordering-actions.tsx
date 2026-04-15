import { spacers } from '@dhis2/ui-constants'
import { Button } from '@dhis2-ui/button'
import React from 'react'
import { IconMoveDown, IconMoveUp } from './icons.tsx'

export interface ReorderingActionsProps {
    dataTest: string
    onChangeDown: (event: Event) => void
    onChangeUp: (event: Event) => void
    disabledDown?: boolean
    disabledUp?: boolean
}

export const ReorderingActions = ({
    dataTest,
    disabledDown,
    disabledUp,
    onChangeUp,
    onChangeDown,
}: ReorderingActionsProps) => (
    <div data-test={dataTest}>
        <Button
            small
            disabled={disabledDown}
            onClick={() =>
                !disabledDown && onChangeDown(event as unknown as Event)
            }
            dataTest={`${dataTest}-buttonmovedown`}
            icon={
                <IconMoveDown
                    dataTest={`${dataTest}-iconmovedown`}
                    disabled={disabledDown}
                />
            }
        />

        <Button
            small
            disabled={disabledUp}
            onClick={() => !disabledUp && onChangeUp(event as unknown as Event)}
            dataTest={`${dataTest}-buttonmoveup`}
            icon={
                <IconMoveUp
                    dataTest={`${dataTest}-iconmoveup`}
                    disabled={disabledUp}
                />
            }
        />

        <style jsx>{`
            div {
                display: flex;
                flex-direction: row-reverse;
                padding-top: ${spacers.dp8};
            }

            div:last-child {
                padding-bottom: ${spacers.dp8};
            }

            div > :global(button):first-child {
                margin-inline-start: ${spacers.dp8};
            }
        `}</style>
    </div>
)
