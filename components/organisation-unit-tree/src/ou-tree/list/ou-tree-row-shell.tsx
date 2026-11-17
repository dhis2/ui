import { colors, theme } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface OuTreeRowShellProps {
    depth: number
    /** The element id `aria-activedescendant` names. */
    elementId?: string
    /** Shows the focus ring: the focused row while the tree has focus. */
    focused?: boolean
    ariaExpanded?: boolean
    ariaLabel?: string
    ariaBusy?: boolean
    /** Announced as `aria-keyshortcuts`: how to reach the row's controls. */
    keyshortcuts?: string
    /** The indent level whose guide segment is lit on this row. */
    litLevel?: number
    /** The pointer entered the guide segment at a level, or left it. */
    onGuideHover?: (level: number | undefined) => void
    /** A click on the guide segment at a level; the row does not get it. */
    onGuideClick?: (level: number) => void
    rowKind?:
        | 'node'
        | 'children-skeleton'
        | 'children-error'
        | 'result-skeleton'
        | 'result-error'
        | 'roots'
    id?: string
    /** Called with true when the pointer enters the row and false when it leaves. */
    onHoverChange?: (hovered: boolean) => void
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
    dataTest?: string
    className?: string
    children: React.ReactNode
}

/** The element every row sits in, a treeitem with one indent element per level. */
export const OuTreeRowShell = ({
    depth,
    elementId,
    focused = false,
    ariaExpanded,
    ariaLabel,
    ariaBusy,
    keyshortcuts,
    litLevel,
    onGuideHover,
    onGuideClick,
    rowKind,
    id,
    onHoverChange,
    onClick,
    dataTest,
    className,
    children,
}: OuTreeRowShellProps) => (
    <div
        id={elementId}
        className={cx('shell', { focused }, className)}
        role="treeitem"
        aria-level={depth + 1}
        aria-expanded={ariaExpanded}
        aria-label={ariaLabel}
        aria-busy={ariaBusy || undefined}
        aria-keyshortcuts={keyshortcuts}
        data-row-kind={rowKind}
        data-id={id}
        data-test={dataTest}
        onPointerEnter={onHoverChange && (() => onHoverChange(true))}
        onPointerLeave={onHoverChange && (() => onHoverChange(false))}
        onClick={onClick}
    >
        {Array.from({ length: depth }, (_, level) => (
            <span
                key={level}
                className={cx('indent', { lit: level === litLevel })}
                data-level={level}
                aria-hidden
                onPointerEnter={onGuideHover && (() => onGuideHover(level))}
                onPointerLeave={onGuideHover && (() => onGuideHover(undefined))}
                onClick={
                    onGuideClick &&
                    ((event) => {
                        event.stopPropagation()
                        onGuideClick(level)
                    })
                }
            />
        ))}
        {children}
        <style jsx>{`
            .shell {
                min-height: 24px;
                display: flex;
                align-items: flex-start;
                border-radius: 3px;
            }
            .focused {
                box-shadow: inset 0 0 0 2px ${theme.focus};
            }
            .indent {
                flex-shrink: 0;
                align-self: stretch;
                width: 24px;
                position: relative;
            }
            .indent::after {
                content: '';
                position: absolute;
                top: 0;
                bottom: 0;
                inset-inline-start: 11px;
                width: 1px;
                background: ${colors.grey400};
            }
            .indent.lit {
                cursor: pointer;
            }
            .indent.lit::after {
                background: ${colors.grey500};
            }
        `}</style>
    </div>
)
