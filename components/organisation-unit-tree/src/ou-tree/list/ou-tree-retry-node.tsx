import i18n from '@dhis2/d2-i18n'
import { colors, theme } from '@dhis2/ui-constants'
import { IconErrorFilled16, IconSync16 } from '@dhis2/ui-icons'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'

export interface OuTreeRetryNodeProps {
    onRetry: () => void
    /** The label slot. */
    children: React.ReactNode
    dataTest?: string
}

/**
 * A failed node's row body: a button with the error icon in the toggle's
 * place, the label slot and, shown on hover and focus, the sync icon.
 * Clicking opens the node again, which reloads its children.
 */
export const OuTreeRetryNode = ({
    onRetry,
    children,
    dataTest,
}: OuTreeRetryNodeProps) => (
    <Tooltip
        content={i18n.t('Could not load children. Click to retry')}
        placement="right"
    >
        {/* The button itself is the tooltip's reference. */}
        {({ ref, ...tooltip }) => (
            <button
                {...tooltip}
                ref={ref as React.RefObject<HTMLButtonElement>}
                type="button"
                data-test={dataTest}
                onClick={onRetry}
            >
                <span className="icon" aria-hidden>
                    <IconErrorFilled16 color={theme.error} />
                </span>
                {children}
                <span className="icon sync" aria-hidden>
                    <IconSync16 color={theme.error} />
                </span>
                <style jsx>{`
                    button {
                        display: flex;
                        align-items: flex-start;
                        min-width: 0;
                        min-height: 24px;
                        margin: 0;
                        padding: 0;
                        border: none;
                        border-radius: 3px;
                        background: none;
                        font: inherit;
                        color: inherit;
                        text-align: start;
                        cursor: pointer;
                    }
                    button:hover,
                    button:focus-visible {
                        background: ${colors.red200};
                        box-shadow: inset 0 0 0 1px ${colors.red400};
                    }
                    .icon {
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                    }
                    /* Takes its space always, so nothing moves on hover. */
                    .sync {
                        visibility: hidden;
                    }
                    button:hover > .sync,
                    button:focus-visible > .sync {
                        visibility: visible;
                    }
                `}</style>
            </button>
        )}
    </Tooltip>
)
