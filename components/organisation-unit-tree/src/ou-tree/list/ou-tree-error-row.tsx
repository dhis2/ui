import i18n from '@dhis2/d2-i18n'
import React, { memo } from 'react'
import {
    type Row,
    rowKey,
    useOuTreeActions,
    useOuTreeRowElementId,
    useOuTreeRowFocused,
    useOuTreeRowGuide,
} from '../tree'
import { OuTreeRetrySkeleton } from './ou-tree-retry-skeleton'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeToggle } from './ou-tree-toggle'

export type ErrorRow = Extract<Row, { kind: 'children-error' | 'result-error' }>

export interface OuTreeErrorRowProps {
    row: ErrorRow
    dataTest?: string
}

/** An empty slot of a failed page, children or results, as a retry bar. */
export const OuTreeErrorRow = memo(function OuTreeErrorRow({
    row,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeErrorRowProps) {
    const { store, retryResultsPage, setHoveredGuide, closeGuideBranch } =
        useOuTreeActions()
    const key = rowKey(row)
    const elementId = useOuTreeRowElementId(key)
    const focused = useOuTreeRowFocused(key)
    const { litLevel } = useOuTreeRowGuide(key)
    const onRetry =
        row.kind === 'children-error'
            ? () => store.retryChildrenPage(row.parentId, row.page)
            : () => retryResultsPage(row.page)
    return (
        <OuTreeRowShell
            depth={row.depth}
            elementId={elementId}
            focused={focused}
            litLevel={litLevel}
            onGuideHover={(level) =>
                setHoveredGuide(
                    level === undefined ? undefined : { key, level }
                )
            }
            onGuideClick={(level) => closeGuideBranch({ key, level })}
            ariaLabel={i18n.t('Could not load. Retry')}
            keyshortcuts="Shift+Enter"
            rowKind={row.kind}
            dataTest={`${dataTest}-row`}
        >
            <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
            <OuTreeRetrySkeleton
                onRetry={onRetry}
                dataTest={`${dataTest}-retry`}
            />
        </OuTreeRowShell>
    )
})
