import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Button } from '../Button.js'
import { IconMoveDown, IconMoveUp } from './icons'
import { spacers } from '../theme.js'

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
                    dataTest={dataTest}
                    disabled={`${dataTest}-iconmoveup`}
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
