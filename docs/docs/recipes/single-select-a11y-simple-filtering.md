---
title: Single Select A11y - Simple filtering
---

import { SimpleFilterSelect } from './single-select-a11y-simple-filtering.js'

# Single Select A11y - Simple filtering

## Demo

In this recipe we'll re-create the following searchable version of the `SingleSelectA11y`:

<SimpleFilterSelect />

## Summary

The `<SingleSelectA11y/>` component does not handle filtering automatically.
Instead, it provides all necessary toold to implement filtering is various ways.
This recipe will show how to set up filtering an existing list of options by
using react's `useState`, `useCallback` and `useMemo` hooks.
These will aid at persisting the select's current value as well as receiving
an update when the user changes the selected value.

## Example

Consider the following options:

```js
const options = [
    { label: 'ANC 1st visit', value: 'anc_1st_visit' },
    { label: 'ANC 2nd visit', value: 'anc_2nd_visit' },
    { label: 'ARI treated follow-up', value: 'ari_treated_follow-up' },
    { label: 'ARI treated with new', value: 'ari_treated_with_new' },
]
```

We'll have to use react's `useState` hook to persist the currently selected value:

```js
const [searchTerm, setSearchTerm] = useState('')
```

Note: If the initial value is already known by the time the above code is initially run,
then the hook can be given the initial value.

The next step is to filter the options. First we create a function that can live outside of the component's context:

```js
function filterOptions(options, searchTerm) {
    // If there is no search term, we want to return all options
    if (!searchTerm) {
        return options
    }

    // We're transform both the label and the search term to
    // lower-case strings so the search is case-insensitive
    return options.filter(({ label, value }) => {
        return label.toLowerCase().startsWith(searchTerm.toLowerCase())
    })
}
```

With that function, we can create a memoized options array:

```js
const filteredOptions = useMemo(
    () => filterOptions(options, searchTerm),
    [searchTerm, options]
)
```

Normally the select component will extract the label of a selected option
from the options array so it can display the currently selected option.
When filtering, that option might not be present if the filtered array,
so we'll have to make sure we can tell the select component what the label is:

```js
// We have to default to an empty string in case there is no selection
// and the options array does not include an "empty"-option,
// e.g. `{ value: '', label: 'None' }`
const valueLabel =
    options.find((option) => option.value === value)?.label || 'No selection'
```

Now all necessary parts are available to create a simple searchable select:

```jsx
import { SingleSelectA11y } from '@dhis2/ui'
import { useCallback, useMemo, useState } from 'react'

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
    return options.filter(({ label, value }) => {
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
        [options, searchTerm]
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
```
