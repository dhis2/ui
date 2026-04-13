import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { useRef } from 'react'

const DOUBLE_CLICK_MAX_DELAY = 500

export interface TransferOptionProps {
    label: React.ReactNode
    value: string
    className?: string
    dataTest?: string
    disabled?: boolean
    highlighted?: boolean
    selected?: boolean
    onClick?: (payload: { value: string }, event: React.MouseEvent<HTMLDivElement>) => void
    onDoubleClick?: (payload: { value: string }, event: React.MouseEvent<HTMLDivElement>) => void
}

export const TransferOption = ({
    className,
    disabled,
    dataTest = 'dhis2-uicore-transferoption',
    highlighted,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selected: _selected,
    onClick,
    onDoubleClick,
    label,
    value,
}: TransferOptionProps) => {
    const doubleClickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    return (
        <div
            data-test={dataTest}
            onClick={(event) => {
                if (disabled) {
                    return
                }

                if (doubleClickTimeout.current) {
                    clearTimeout(doubleClickTimeout.current)
                    doubleClickTimeout.current = null

                    onDoubleClick?.({ value }, event)
                } else {
                    doubleClickTimeout.current = setTimeout(() => {
                        clearTimeout(doubleClickTimeout.current!)
                        doubleClickTimeout.current = null
                    }, DOUBLE_CLICK_MAX_DELAY)

                    onClick?.({ value }, event)
                }
            }}
            data-value={value}
            className={cx(className, { highlighted, disabled })}
        >
            {label}

            <style jsx>{`
                div {
                    font-size: 14px;
                    line-height: 16px;
                    padding: 4px 8px;
                    color: ${colors.grey900};
                    user-select: none;
                }

                div:hover {
                    background: ${colors.grey200};
                }

                div.highlighted {
                    background: ${colors.teal700};
                    color: ${colors.white};
                }

                div.disabled {
                    color: ${colors.grey600};
                    cursor: not-allowed;
                }

                div:first-child {
                    margin-block-start: ${spacers.dp4};
                }

                div:last-child {
                    margin-block-end: ${spacers.dp4};
                }
            `}</style>
        </div>
    )
}
