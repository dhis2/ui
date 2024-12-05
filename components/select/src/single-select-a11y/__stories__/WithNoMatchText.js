import React, { useMemo, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'

export const WithNoMatchText = () => {
    const [selected, setSelected] = useState({
        label: 'Foo',
        value: 'foo',
    })
    const [filterValue, setFilterValue] = useState('Bar')
    const filteredOptions = useMemo(() => [], [])

    return (
        <SingleSelectA11y
            name="a11y"
            selected={selected}
            onChange={setSelected}
            filterable
            filterPlaceholder="Filter placeholder"
            filterValue={filterValue}
            onFilterChange={setFilterValue}
            noMatchText="No results for your filter"
            options={filteredOptions}
        />
    )
}
