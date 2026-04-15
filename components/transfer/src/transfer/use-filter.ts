import { useState } from 'react'
import { TransferOptionObject } from '../common/index.ts'

type FilterCallback = (
    options: TransferOptionObject[],
    filter: string
) => TransferOptionObject[]

interface UseFilterArgs {
    initialSearchTerm: string
    onFilterChange?: (payload: { value: string }) => void
    externalSearchTerm?: string
    filterable?: boolean
    filterCallback: FilterCallback
}

interface UseFilterResult {
    filterValue: string | undefined
    filter:
        | FilterCallback
        | ((value: TransferOptionObject[]) => TransferOptionObject[])
    setInternalFilter: React.Dispatch<React.SetStateAction<string>>
}

const identity = <T>(value: T): T => value

export const useFilter = ({
    initialSearchTerm,
    onFilterChange,
    externalSearchTerm,
    filterable,
    filterCallback,
}: UseFilterArgs): UseFilterResult => {
    const [internalFilter, setInternalFilter] = useState(initialSearchTerm)
    const filterValue = onFilterChange ? externalSearchTerm : internalFilter
    const filter = filterable ? filterCallback : identity

    return { filterValue, filter, setInternalFilter }
}
