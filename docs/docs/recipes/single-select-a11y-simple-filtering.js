import { SingleSelectA11y } from '@dhis2/ui'
import React, { useMemo, useState } from 'react'

const options = [
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
    const [value, setValue] = useState('')

    // Handle filtering
    const [searchTerm, setSearchTerm] = useState('')
    const filteredOptions = useMemo(
        () => filterOptions(options, searchTerm),
        [searchTerm]
    )

    // We have to default to an empty string in case there is no selection
    // and the options array does not include an "empty"-option,
    // e.g. `{ value: '', label: 'None' }`
    const valueLabel =
        options.find((option) => option.value === value)?.label ||
        'No selection'

    return (
        <SingleSelectA11y
            filterable
            filterValue={searchTerm}
            idPrefix="a11y"
            options={filteredOptions}
            value={value}
            valueLabel={valueLabel}
            onChange={setValue}
            onFilterChange={setSearchTerm}
        />
    )
}
