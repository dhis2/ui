import i18n from '@dhis2/d2-i18n'
import { colors, theme } from '@dhis2/ui-constants'
import { IconSync16 } from '@dhis2/ui-icons'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'
import { OuTreeSkeleton } from './ou-tree-skeleton'

export interface OuTreeRetrySkeletonProps {
    onRetry: () => void
    dataTest?: string
}

/**
 * An error-state skeleton that is itself the retry control: the bar stands
 * for a node that did not load, and clicking it reloads. The icon appears
 * on hover and keyboard focus only, so a block of failed rows stays calm.
 * The button is the tooltip's reference, so there is no wrapper and no
 * second tab stop.
 */
export const OuTreeRetrySkeleton = ({
    onRetry,
    dataTest,
}: OuTreeRetrySkeletonProps) => (
    <Tooltip content={i18n.t('Could not load. Click to retry')}>
        {({ ref, ...tooltip }) => (
            <button
                {...tooltip}
                ref={ref as React.RefObject<HTMLButtonElement>}
                type="button"
                aria-label={i18n.t('Retry')}
                data-test={dataTest}
                onClick={onRetry}
            >
                <OuTreeSkeleton
                    error
                    dataTest={dataTest && `${dataTest}-skeleton`}
                />
                <span className="icon" aria-hidden>
                    <IconSync16 color={theme.error} />
                </span>
                <style jsx>{`
                    button {
                        display: flex;
                        align-items: center;
                        gap: 4px;
                        height: 24px;
                        border: none;
                        background: none;
                        padding: 0;
                        cursor: pointer;
                        border-radius: 3px;
                    }
                    /* The skeleton owns its colours; the hover darkens them. */
                    button:hover > :global(.skeleton),
                    button:focus-visible > :global(.skeleton) {
                        background: ${colors.red200};
                        border-color: ${colors.red400};
                    }
                    .icon {
                        display: none;
                        width: 16px;
                        height: 16px;
                    }
                    button:hover > .icon,
                    button:focus-visible > .icon {
                        display: flex;
                    }
                `}</style>
            </button>
        )}
    </Tooltip>
)
