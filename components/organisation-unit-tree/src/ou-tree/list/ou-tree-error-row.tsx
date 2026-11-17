import i18n from '@dhis2/d2-i18n'
import React, { memo } from 'react'
import {
    type Row,
    rowKey,
    useOuTreeActions,
    useOuTreeRowElementId,
    useOuTreeRowFocused,
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
    const { store, retryResultsPage } = useOuTreeActions()
    const key = rowKey(row)
    const elementId = useOuTreeRowElementId(key)
    const focused = useOuTreeRowFocused(key)
    const onRetry =
        row.kind === 'children-error'
            ? () => store.retryChildrenPage(row.parentId, row.page)
            : () => retryResultsPage(row.page)
    return (
        <OuTreeRowShell
            depth={row.depth}
            elementId={elementId}
            focused={focused}
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
