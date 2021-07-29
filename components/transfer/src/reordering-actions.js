import { Button } from '@dhis2-ui/button'
import propTypes from '@dhis2/prop-types'
import { spacers } from '@dhis2/ui-constants'
import React from 'react'
import { IconMoveDown, IconMoveUp } from './icons.js'

export const ReorderingActions = ({
    dataTest,
    disabledDown,
    disabledUp,
    onChangeUp,
    onChangeDown,
}) => (
    <div data-test={dataTest}>
        <Button
            small
            disabled={disabledDown}
            onClick={() => !disabledDown && onChangeDown(event)}
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
            onClick={() => !disabledUp && onChangeUp(event)}
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
                margin-left: ${spacers.dp8};
            }
        `}</style>
    </div>
)

ReorderingActions.propTypes = {
    dataTest: propTypes.string.isRequired,
    onChangeDown: propTypes.func.isRequired,
    onChangeUp: propTypes.func.isRequired,
    disabledDown: propTypes.bool,
    disabledUp: propTypes.bool,
}
