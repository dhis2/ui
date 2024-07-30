import { spacers } from '@dhis2/ui-constants'
import { Button } from '@dhis2-ui/button'
import PropTypes from 'prop-types'
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
                margin-inline-start: ${spacers.dp8};
            }
        `}</style>
    </div>
)

ReorderingActions.propTypes = {
    dataTest: PropTypes.string.isRequired,
    onChangeDown: PropTypes.func.isRequired,
    onChangeUp: PropTypes.func.isRequired,
    disabledDown: PropTypes.bool,
    disabledUp: PropTypes.bool,
}
