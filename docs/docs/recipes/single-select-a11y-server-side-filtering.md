---
title: Single Select A11y - Server-side filtering
---

import { ServerSideFilteringSelect } from './single-select-a11y-server-side-filtering.js'

# Single Select A11y - Server-side filtering

## Demo

<ServerSideFilteringSelect />

## Summary

The `<SingleSelectA11y/>` component does not handle filtering automatically.
Instead, it provides all necessary toold to implement filtering is various ways.
This recipe will show how to set up filtering in a more complex scenario:

-   The select loads options progressively (10 at a time in this case)
-   The select can be filtered by asking the server for a search result
-   The search result is paginated, options also load progressively

## Example

As this example is quite complex, we'll first define the requirements that the
select will have to fulfill, then we'll cover how to implement those step by
step:

-   When there is an initially selected value, the select loads the label of that option
    -   when that fails, we use the value as the label
-   When rendered initially, the select loads the first page of options
-   When reaching the end of the options list, the select loads the next page
    -   only when there is a next page
    -   only when not already loading options
    -   loads the next page of the searched options when there is a search-term
-   When loading options or the initial value, the select is disabled
    -   and shows a "Loading" text
-   When searching for options, the actual request is debounced to prevent sending many unnecesary requests
    -   and previously send requests that haven't responded yet should be aborted

### When there is an initially selected value, the select loads the label of that option

Under normal circumstances, the select we're creating would receive the selected value as a prop.
As this is a demo, we simply define the selected value statically:

```js
const [selectedOption, setSelectedOption] = useState({
    value: 'fbfJHSPpUQD', // This value should come from the props
    label: '',
})
```

The reason we're storing the object rather than just the selected value is:
When the user searches for options while having already selected an option,
we could lose the label we want to display. This can happen when the user
searches for an option, then selects an option from the search result,
and then searches the options again.

We also need to define whether we're done loading the selected value's label:

```js
const [initializedSelectedLabel, setInitializedSelectedLabel] = useState(false)
```

The reason for `useState` is that we're also done initializing when we have a
value and the request for getting the label fails for whatever reason.

To get the label, the select component can leverage our `useDataQuery` hook:

```js
// Outside of the component
function useLoadDataElementQuery(options) {
    return useDataQuery(
        {
            result: {
                resource: 'dataElements',
                id: ({ id }) => id,
            },
        },
        { ...options, lazy: true }
    )
}

// Inside of the component
const loadDataElementQuery = useLoadDataElementQuery({
    onComplete: (data) => {
        setSelectedOption(dataElementToOption(data.result.dataElements))
        setInitializedSelectedLabel(true) // Done AFTER setting the option's label!
    },
    onError: () => {
        setSelectedOption((option) => ({ ...option, label: option.value }))
        setInitializedSelectedLabel(true) // Done AFTER setting the option's label!
    },
})
```

The query has the `lazy: true` option to not start loading the label right
away. The idea behind this is that we don't want to load anything when
there is no selected value, but that also means we'll have to start the
process manually:

```js
useEffect(() => {
    if (selectedOption?.value) {
        loadDataElementQuery.refetch({ id: selectedOption.value })
    } else {
        setInitializedSelectedLabel(true)
    }
}, [])
```

This is enough to address not having the label in case there's a selected value.
Here's the code we're written so far:

```js
function useLoadDataElementQuery(options) {
    return useDataQuery(
        {
            result: {
                resource: 'dataElements',
                id: ({ id }) => id,
            },
        },
        { ...options, lazy: true }
    )
}

function OurSelectComponent() {
    const [initializedSelectedLabel, setInitializedSelectedLabel] =
        useState(false)
    const [selectedOption, setSelectedOption] = useState({
        value: 'fbfJHSPpUQD', // This value should come from the props
        label: '',
    })

    const loadDataElementQuery = useLoadDataElementQuery({
        onComplete: (data) => {
            setSelectedOption(dataElementToOption(data.result.dataElements))
            setInitializedSelectedLabel(true) // Done AFTER setting the option's label!
        },
        onError: () => {
            setSelectedOption((option) => ({ ...option, label: option.value }))
            setInitializedSelectedLabel(true) // Done AFTER setting the option's label!
        },
    })

    useEffect(() => {
        if (selectedOption?.value) {
            loadDataElementQuery.refetch({ id: selectedOption.value })
        } else {
            setInitializedSelectedLabel(true)
        }
    }, [])
}
```

### When rendered initially, the select loads the first page of options

The options can be stored in an array:

```js
const [loadedOptions, setLoadedOptions] = useState([])
```

The normal options should be rendered page by page, so we'll have to store
the paging information:

```js
// The name is "default" because we'll have another pager later for filtering
const [defaultPager, setPager] = useState({
    page: 0,
    pageSize: -1,
    total: -1,
    pageCount: -1,
})
```

By using `0` as the default value for page and `-1`s for the other values,
we can leverage that as these value mean that we haven't loaded any options yet.

Now we also need a way to load the elements, for which we'll use `useDataQuery` again:

```js
// Outside of the component
function useLoadDataElementsQuery(options) {
    return useDataQuery(
        {
            result: {
                resource: 'dataElements',
                params: ({ page }) => ({ page, pageSize: 10 }),
            },
        },
        options
    )
}

// Inside the component
const loadDataElementsQuery = useLoadDataElementsQuery({
    onComplete: ({ result }) => {
        setDefaultPager(result.pager)
        setLoadedOptions((prevLoadedOptions) => [
            ...prevLoadedOptions,
            ...result.dataElements.map(dataElementToOption),
        ])
    },
    onError: () => {
        setDefaultPager((prevPager) => ({
            ...prevPager,
            pageCount: prevPager.page,
            total: loadedOptions.length,
        }))
    },
})
```

Unlike loading the label for the initial selection, this request
should go out regardless of the props, so no need to add `lazy: true`
Here you can see that we'll update the pager when we successfully loaded
options and add them to the `loadedOptions` array.

In case something went wrong, we pretend there are no more results by
adjusting the pager object.
