import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'

export interface OuTreeRowShellProps {
    depth: number
    role?: 'treeitem' | 'presentation'
    ariaExpanded?: boolean
    rowKind?: 'node' | 'skeleton' | 'error' | 'roots'
    id?: string
    dataTest?: string
    className?: string
    children: React.ReactNode
}

/**
 * The element every row sits in, with one indent element per level. A
 * child with the `data-hover-only` attribute is shown only while the row
 * is hovered or has focus within.
 */
export const OuTreeRowShell = ({
    depth,
    role = 'presentation',
    ariaExpanded,
    rowKind,
    id,
    dataTest,
    className,
    children,
}: OuTreeRowShellProps) => (
    <div
        className={cx('shell', className)}
        role={role}
        aria-level={depth + 1}
        aria-expanded={ariaExpanded}
        data-row-kind={rowKind}
        data-id={id}
        data-test={dataTest}
    >
        {Array.from({ length: depth }, (_, level) => (
            <span
                key={level}
                className="indent"
                data-level={level}
                aria-hidden
            />
        ))}
        {children}
        <style jsx>{`
            .shell {
                min-height: 24px;
                display: flex;
                align-items: flex-start;
            }
            .shell:not(:hover):not(:focus-within) > :global([data-hover-only]) {
                visibility: hidden;
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
        `}</style>
    </div>
)
