import React, { memo } from 'react'
import { type Row, useOuTreeActions } from '../tree/index'
import { OuTreeRetrySkeleton } from './ou-tree-retry-skeleton'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeToggle } from './ou-tree-toggle'

export type ErrorRow = Extract<Row, { kind: 'error' }>

export interface OuTreeErrorRowProps {
    row: ErrorRow
    dataTest?: string
}

export const OuTreeErrorRow = memo(function OuTreeErrorRow({
    row,
    dataTest = 'dhis2-uicore-outree',
}: OuTreeErrorRowProps) {
    const { store } = useOuTreeActions()
    return (
        <OuTreeRowShell
            depth={row.depth}
            rowKind="error"
            dataTest={`${dataTest}-row`}
        >
            <OuTreeToggle leaf dataTest={`${dataTest}-toggle-space`} />
            <OuTreeRetrySkeleton
                onRetry={() => store.retryChildrenPage(row.parentId, row.page)}
                dataTest={`${dataTest}-retry`}
            />
        </OuTreeRowShell>
    )
})
