import { useState } from 'react'

const identity = (value) => value

export const useFilter = ({
    initialSearchTerm,
    onFilterChange,
    externalSearchTerm,
    filterable,
    filterCallback,
}) => {
    const [internalFilter, setInternalFilter] = useState(initialSearchTerm)
    const filterValue = onFilterChange ? externalSearchTerm : internalFilter
    const filter = filterable ? filterCallback : identity

    return { filterValue, filter, setInternalFilter }
}
