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
 * The body of a node row whose children did not load, so the node did not
 * open: a button holding the error icon in the toggle's place, the label
 * slot and, after the label, the sync icon. The button hugs its content.
 * Hover and keyboard focus colour it like the retry skeleton and show the
 * sync icon; clicking opens the node again, which reloads its children.
 * The button is the tooltip's reference, so there is no wrapper and no
 * second tab stop, and the tooltip sits beside the button so it covers no
 * row above it.
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
