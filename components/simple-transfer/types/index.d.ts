import * as React from 'react'
import { InputChangeHandler } from '@dhis2-ui/input'

export interface SimpleTransferProps {
    options: TransferOption[]
    onChange: (payload: { selected: string[] }) => void
    addAllText?: string
    addIndividualText?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    enableOrderChange?: boolean
    filterCallback?: (
        options: TransferOption[],
        filter: string
    ) => TransferOption[]
    filterCallbackPicked?: (
        options: TransferOption[],
        filter: string
    ) => TransferOption[]
    filterLabel?: string
    filterLabelPicked?: string
    filterPlaceholder?: string
    filterPlaceholderPicked?: string
    filterable?: boolean
    filterablePicked?: boolean
    height?: string
    hideFilterInput?: boolean
    hideFilterInputPicked?: boolean
    initialSearchTerm?: string
    initialSearchTermPicked?: string
    leftFooter?: React.ReactNode
    leftHeader?: React.ReactNode
    loading?: boolean
    loadingPicked?: boolean
    maxSelections?: number
    optionsWidth?: string
    removeAllText?: string
    removeIndividualText?: string
    rightFooter?: React.ReactNode
    rightHeader?: React.ReactNode
    searchTerm?: string
    searchTermPicked?: string
    selected?: string[]
    selectedEmptyComponent?: React.ReactNode
    selectedWidth?: string
    sourceEmptyPlaceholder?: React.ReactNode
    onEndReached?: () => void
    onEndReachedPicked?: () => void
    onFilterChange?: InputChangeHandler
    onFilterChangePicked?: InputChangeHandler
}

export const SimpleTransfer: React.FC<SimpleTransferProps>

export interface TransferOption {
    label: string
    value: string
    disabled?: boolean
}
