import { SimpleSingleSelect } from '@dhis2/ui'
import React, { useMemo, useState } from 'react'

const options = [
    { label: 'No selection', value: '' },
    { label: 'ANC 1st visit', value: 'anc_1st_visit' },
    { label: 'ANC 2nd visit', value: 'anc_2nd_visit' },
    { label: 'ARI treated follow-up', value: 'ari_treated_follow-up' },
    { label: 'ARI treated with new', value: 'ari_treated_with_new' },
]

function filterOptions(options, searchTerm) {
    // If there is no search term, we want to return all options
    if (!searchTerm) {
        return options
    }

    // We're transform both the label and the search term to
    // lower-case strings so the search is case-insensitive
    return options.filter(({ label }) => {
        return label.toLowerCase().startsWith(searchTerm.toLowerCase())
    })
}

export const SimpleFilterSelect = () => {
    // Handle actual value changes
    const [selected, setSelected] = useState({
        value: '',
        label: 'No selection',
    })

    // Handle filtering
    const [searchTerm, setSearchTerm] = useState('')
    const filteredOptions = useMemo(
        () => filterOptions(options, searchTerm),
        [searchTerm]
    )

    return (
        <SimpleSingleSelect
            filterable
            filterValue={searchTerm}
            idPrefix="simple"
            options={filteredOptions}
            selected={selected}
            onChange={setSelected}
            onFilterChange={setSearchTerm}
        />
    )
}
