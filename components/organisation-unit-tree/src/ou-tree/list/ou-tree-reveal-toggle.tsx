import i18n from '@dhis2/d2-i18n'
import { colors } from '@dhis2/ui-constants'
import { IconView16, IconViewOff16 } from '@dhis2/ui-icons'
import { Tooltip } from '@dhis2-ui/tooltip'
import React from 'react'

export interface OuTreeRevealToggleProps {
    revealed: boolean
    onToggle: () => void
    dataTest?: string
}

/**
 * The eye after a pruned node's label: shows all the node's children, or
 * hides them again. Carries `data-hover-only`, so the row shell shows it
 * only while the row is hovered or has focus within.
 */
export const OuTreeRevealToggle = ({
    revealed,
    onToggle,
    dataTest,
}: OuTreeRevealToggleProps) => {
    const name = revealed
        ? i18n.t('Hide all children')
        : i18n.t('Show all children')
    return (
        <Tooltip content={name} placement="right">
            {/* The button itself is the tooltip's reference. */}
            {({ ref, ...tooltip }) => (
                <button
                    {...tooltip}
                    ref={ref as React.RefObject<HTMLButtonElement>}
                    type="button"
                    aria-label={name}
                    data-hover-only=""
                    data-test={dataTest}
                    onClick={onToggle}
                >
                    {revealed ? (
                        <IconViewOff16 color={colors.grey600} />
                    ) : (
                        <IconView16 color={colors.grey600} />
                    )}
                    <style jsx>{`
                        button {
                            width: 24px;
                            height: 24px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-shrink: 0;
                            margin: 0;
                            padding: 0;
                            border: none;
                            border-radius: 3px;
                            background: none;
                            cursor: pointer;
                        }
                        button:hover,
                        button:focus-visible {
                            background: ${colors.grey200};
                        }
                    `}</style>
                </button>
            )}
        </Tooltip>
    )
}
