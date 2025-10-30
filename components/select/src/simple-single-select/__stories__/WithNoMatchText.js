import React, { useMemo, useState } from 'react'
import { SimpleSingleSelect } from '../simple-single-select.js'

export const WithNoMatchText = () => {
    const [selected, setSelected] = useState({
        label: 'Foo',
        value: 'foo',
    })
    const [filterValue, setFilterValue] = useState('Bar')
    const filteredOptions = useMemo(() => [], [])

    return (
        <SimpleSingleSelect
            name="simple"
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
