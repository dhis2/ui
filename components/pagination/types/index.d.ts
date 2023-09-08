import * as React from 'react'

type TranslateableProp = string | ((argv0: any) => string)

export interface PaginationProps {
    page: number
    pageSize: number
    className?: string
    dataTest?: string
    disabled?: boolean
    hidePageSelect?: boolean
    hidePageSizeSelect?: boolean
    hidePageSummary?: boolean
    isLastPage?: boolean
    nextPageText?: TranslateableProp
    pageCount?: number
    pageLength?: boolean
    pageSelectText?: TranslateableProp
    pageSizeSelectText?: TranslateableProp
    pageSizes?: string[]
    pageSummaryText?: TranslateableProp
    previousPageText?: TranslateableProp
    total?: number
    onPageChange?: (page: number) => void
    onPageSizeChange?: (pageSize: number) => void
}

export const Pagination: React.FC<PaginationProps>
