import React, { useMemo, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

export const WithNoMatchText = () => {
    const [value, setValue] = useState('foo')
    const [filterValue, setFilterValue] = useState('Bar')
    const filteredOptions = useMemo(() => [], [])

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            filterable
            filterPlaceholder="Filter placeholder"
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            noMatchText="No results for your filter"
            options={filteredOptions}
        />
    )
}
