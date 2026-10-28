import i18n from '@dhis2/d2-i18n'
import { colors, theme } from '@dhis2/ui-constants'
import { IconSync16 } from '@dhis2/ui-icons'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'

export interface OuTreeRetrySkeletonProps {
    onRetry: () => void
    dataTest?: string
}

/**
 * An error-state skeleton that is itself the retry control: the button is
 * the bar, standing for a node that did not load, and clicking it reloads.
 * The sync icon sits at the bar's end and shows on hover and keyboard focus
 * only, so a block of failed rows stays calm. The button is the tooltip's
 * reference, so there is no wrapper and no second tab stop, and the
 * tooltip sits beside the control so it covers no row above it.
 */
export const OuTreeRetrySkeleton = ({
    onRetry,
    dataTest,
}: OuTreeRetrySkeletonProps) => (
    <Tooltip
        content={i18n.t('Could not load. Click to retry')}
        placement="right"
    >
        {({ ref, ...tooltip }) => (
            <button
                {...tooltip}
                ref={ref as React.RefObject<HTMLButtonElement>}
                type="button"
                aria-label={i18n.t('Retry')}
                data-test={dataTest}
                onClick={onRetry}
            >
                <span className="icon" aria-hidden>
                    <IconSync16 color={theme.error} />
                </span>
                <style jsx>{`
                    button {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        box-sizing: border-box;
                        width: 120px;
                        height: 20px;
                        margin: 2px 0;
                        padding: 0 4px;
                        border: 1px solid ${colors.red300};
                        border-radius: 3px;
                        background: ${colors.red100};
                        cursor: pointer;
                    }
                    button:hover,
                    button:focus-visible {
                        background: ${colors.red200};
                        border-color: ${colors.red400};
                    }
                    .icon {
                        display: flex;
                        visibility: hidden;
                    }
                    .icon > :global(svg) {
                        width: 12px;
                        height: 12px;
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
