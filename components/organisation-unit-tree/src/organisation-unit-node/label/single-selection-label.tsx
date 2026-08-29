import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface SingleSelectionLabelProps {
    children: React.ReactNode
    checked?: boolean
    loading?: boolean
    onChange?: (payload: { checked: boolean }, event: React.MouseEvent) => void
}

export const SingleSelectionLabel = ({
    checked,
    children,
    onChange,
    loading,
}: SingleSelectionLabelProps) => (
    <span
        role={'checkbox' /* NOSONAR */}
        aria-checked={!!checked}
        tabIndex={loading ? -1 : 0}
        onClick={(event) => {
            const payload = { checked: !checked }
            onChange?.(payload, event)
        }}
        onKeyDown={(event) => {
            if (!loading && (event.key === 'Enter' || event.key === ' ')) {
                event.preventDefault()
                onChange?.(
                    { checked: !checked },
                    event as unknown as React.MouseEvent
                )
            }
        }}
        className={cx({ checked, loading })}
    >
        {children}

        <style jsx>{`
            span {
                background: transparent;
                border-radius: 3px;
                color: ${colors.grey900};
                cursor: pointer;
                display: inline-block;
                font-size: 14px;
                line-height: 24px;
                padding: 0 5px;
                user-select: none;
                white-space: nowrap;
            }

            .checked {
                background: ${colors.teal700};
                color: white;
            }

            .loading {
                cursor: auto;
            }
        `}</style>
    </span>
)
