import * as React from 'react'
import { InputChangeHandler, InputEventHandler } from '@dhis2-ui/input'

export interface TransferProps {
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
    renderOption?: (props: TransferOptionRenderProps) => JSX.Element
    rightFooter?: React.ReactNode
    rightHeader?: React.ReactNode
    searchTerm?: string
    searchTermPicked?: string
    selected?: string[]
    selectedEmptyComponent?: React.ReactNode
    /**
     * To be used in scenarios where selected options may not be present
     * in the options array. Like when having options that lazy load or can
     * be filtered async.
     */
    selectedOptionsLookup?: Record<string, TransferOption>
    selectedWidth?: string
    sourceEmptyPlaceholder?: React.ReactNode
    onEndReached?: () => void
    onEndReachedPicked?: () => void
    onFilterChange?: InputChangeHandler
    onFilterChangePicked?: InputChangeHandler
}

export const Transfer: React.FC<TransferProps>

export type TransferOptionOnClickProp = (payload: { value: string }) => void

export interface TransferOptionRenderProps extends TransferOption {
    highlighted: boolean
    selected: boolean
    onClick: TransferOptionOnClickProp
    onDoubleClick: TransferOptionOnClickProp
}

export interface TransferOptionProps {
    label: React.ReactNode
    value: string
    onClick: TransferOptionOnClickProp
    onDoubleClick: TransferOptionOnClickProp
    className?: string
    dataTest?: string
    disabled?: boolean
    highlighted?: boolean
}

export const TransferOption: React.FC<TransferOptionProps>

export interface TransferOption {
    label: string
    value: string
    disabled?: boolean
}
