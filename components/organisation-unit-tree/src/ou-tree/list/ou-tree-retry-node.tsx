import i18n from '@dhis2/d2-i18n'
import { colors, theme } from '@dhis2/ui-constants'
import { IconSync16 } from '@dhis2/ui-icons'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'

export interface OuTreeRetryNodeProps {
    onRetry: () => void
    /** The label slot. */
    children: React.ReactNode
    dataTest?: string
}

/**
 * The label slot of a node whose children did not load, so it did not
 * open: a button around the label, hugging it, with the sync icon after
 * the label. Hover and keyboard focus colour it like the retry skeleton
 * and show the icon; clicking opens the node again, which reloads its
 * children. The button is the tooltip's reference, so there is no wrapper
 * and no second tab stop.
 */
export const OuTreeRetryNode = ({
    onRetry,
    children,
    dataTest,
}: OuTreeRetryNodeProps) => (
    <Tooltip content={i18n.t('Could not load children. Click to retry')}>
        {({ ref, ...tooltip }) => (
            <button
                {...tooltip}
                ref={ref as React.RefObject<HTMLButtonElement>}
                type="button"
                data-test={dataTest}
                onClick={onRetry}
            >
                {children}
                <span className="icon" aria-hidden>
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
                    /* Takes its space always, so nothing moves on hover. */
                    .icon {
                        width: 24px;
                        height: 24px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-shrink: 0;
                        visibility: hidden;
                    }
                    button:hover > .icon,
                    button:focus-visible > .icon {
                        visibility: visible;
                    }
                `}</style>
            </button>
        )}
    </Tooltip>
)
