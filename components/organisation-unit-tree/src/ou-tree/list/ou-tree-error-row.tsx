import React, { memo } from 'react'
import { type Row, useOuTreeActions } from '../tree/index'
import { OuTreeRetrySkeleton } from './ou-tree-retry-skeleton'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeToggle } from './ou-tree-toggle'

export type ErrorRow = Extract<Row, { kind: 'error' | 'result-error' }>

export interface OuTreeErrorRowProps {
    row: ErrorRow
    dataTest?: string
}

/** An empty slot of a failed page, children or results, as a retry bar. */
export const OuTreeErrorRow = memo(function OuTreeErrorRow({
    row,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeErrorRowProps) {
    const { store, retryResultsPage } = useOuTreeActions()
    const onRetry =
        row.kind === 'error'
            ? () => store.retryChildrenPage(row.parentId, row.page)
            : () => retryResultsPage(row.page)
    return (
        <OuTreeRowShell
            depth={row.depth}
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
