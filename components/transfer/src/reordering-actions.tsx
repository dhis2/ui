import { spacers } from '@dhis2/ui-constants'
import { Button } from '@dhis2-ui/button'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'
import {
    IconMoveDown,
    IconMoveToBottom,
    IconMoveToTop,
    IconMoveUp,
} from './icons.tsx'
import i18n from './locales/index.js'

const filterActiveTooltip = i18n.t('Reordering not allowed when filtering list')

export interface ReorderingActionsProps {
    dataTest: string
    onChangeDown: () => void
    onChangeToBottom: () => void
    onChangeToTop: () => void
    onChangeUp: () => void
    disabledDown?: boolean
    disabledUp?: boolean
    filterActive?: boolean
}

export const ReorderingActions = ({
    dataTest,
    disabledDown,
    disabledUp,
    filterActive,
    onChangeUp,
    onChangeDown,
    onChangeToTop,
    onChangeToBottom,
}: ReorderingActionsProps) => {
    const moveToTopLabel = i18n.t('Move selected items to top')
    const moveUpLabel = i18n.t('Move selected items up')
    const moveDownLabel = i18n.t('Move selected items down')
    const moveToBottomLabel = i18n.t('Move selected items to bottom')

    const renderButtons = (tooltipHandlers: Record<string, unknown> = {}) => (
        <div data-test={dataTest} {...tooltipHandlers}>
            <Button
                small
                secondary
                disabled={disabledUp}
                onClick={() => !disabledUp && onChangeToTop()}
                dataTest={`${dataTest}-buttonmovetotop`}
                aria-label={moveToTopLabel}
                icon={
                    <IconMoveToTop
                        dataTest={`${dataTest}-iconmovetotop`}
                        disabled={disabledUp}
                    />
                }
            />

            <Button
                small
                secondary
                disabled={disabledUp}
                onClick={() => !disabledUp && onChangeUp()}
                dataTest={`${dataTest}-buttonmoveup`}
                aria-label={moveUpLabel}
                icon={
                    <IconMoveUp
                        dataTest={`${dataTest}-iconmoveup`}
                        disabled={disabledUp}
                    />
                }
            />
            <Button
                small
                secondary
                disabled={disabledDown}
                onClick={() => !disabledDown && onChangeDown()}
                dataTest={`${dataTest}-buttonmovedown`}
                aria-label={moveDownLabel}
                icon={
                    <IconMoveDown
                        dataTest={`${dataTest}-iconmovedown`}
                        disabled={disabledDown}
                    />
                }
            />
            <Button
                small
                secondary
                disabled={disabledDown}
                onClick={() => !disabledDown && onChangeToBottom()}
                dataTest={`${dataTest}-buttonmovetobottom`}
                aria-label={moveToBottomLabel}
                icon={
                    <IconMoveToBottom
                        dataTest={`${dataTest}-iconmovetobottom`}
                        disabled={disabledDown}
                    />
                }
            />

            <style jsx>{`
                div {
                    display: flex;
                    justify-content: flex-end;
                    margin-inline-start: auto;
                    width: fit-content;
                    gap: ${spacers.dp4};
                    padding-top: ${spacers.dp8};
                }

                div:last-child {
                    padding-bottom: ${spacers.dp8};
                }
            `}</style>
        </div>
    )

    if (filterActive) {
        return (
            <Tooltip openDelay={500} content={filterActiveTooltip}>
                {({ onMouseOver, onMouseOut, onFocus, onBlur, ref }) =>
                    renderButtons({
                        ref,
                        onMouseOver,
                        onMouseOut,
                        onFocus,
                        onBlur,
                    })
                }
            </Tooltip>
        )
    }

    return renderButtons()
}
