import React, { memo } from 'react'
import { type Row, useOuTreeActions } from '../tree/index'
import { OuTreeRetryButton } from './ou-tree-retry-button'
import { OuTreeRowShell } from './ou-tree-row-shell'
import { OuTreeSkeleton } from './ou-tree-skeleton'

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
            <OuTreeSkeleton error dataTest={`${dataTest}-skeleton`} />
            <OuTreeRetryButton
                onRetry={() => store.retryChildrenPage(row.parentId, row.page)}
                dataTest={`${dataTest}-retry`}
            />
        </OuTreeRowShell>
    )
})
