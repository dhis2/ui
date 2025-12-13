---
title: Simple Single Select - Server-side filtering
---

import { Demo } from '@site/src/components/DemoComponent.jsx'

# Simple Single Select - Server-side filtering

## Demo

<Demo path="simple-single-select--with-server-side-filtering-demo" height="410px" />

## Summary

The `<SimpleSingleSelect/>` component does not handle filtering automatically.
Instead, it provides all the necessary tools to implement filtering in various ways.
This recipe will show how to set up filtering in a more complex scenario:

-   The select loads options progressively (10 at a time in this case)
-   The select can be filtered by asking the server for a search result
-   The search result is paginated, and options also load progressively

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
-   When searching for options, the actual request is debounced to prevent sending many unnecessary requests
    -   and previously send requests that haven't responded yet should be aborted
-   When loading options or the initial value, the select is disabled
    -   and shows a "Loading" text

### When there is an initially selected value, the select loads the label of that option

Under normal circumstances, the select we're creating would receive the selected value as a prop.
As this is a demo, we simply define the selected value statically:

```js
const [selectedOption, setSelectedOption] = useState({
    value: 'fbfJHSPpUQD', // This value should come from the props
    label: 'Loading...',
})
```

The reason we're storing the object rather than just the selected value is:
The SimpleSingleSelect component expects the whole option as selected value, so
that when the user searches for options while having already selected an option,
we could lose the label we want to display. This can happen when the user
searches for an option, then selects an option from the search result,
and then searches the options again.

We also need to define whether we're done loading the selected value's label.
While this value is false, we'll disable the select as otherwise we'd have to
increase the select's complexity (abort the request when selecting an option
before the initially selected option's label hasn't been fetched yet).

```js
const [initializedSelectedLabel, setInitializedSelectedLabel] = useState(false)
```

With this, we can create component that returns a select component:

```jsx
function OurSelectComponent() {
    const [initializedSelectedLabel, setInitializedSelectedLabel] =
        useState(false)
    const [selectedOption, setSelectedOption] = useState({
        value: 'fbfJHSPpUQD', // This value should come from the props
        label: 'Loading...',
    })

    return (
        <SimpleSingleSelect
            name="demo"
            disabled={!initializedSelectedLabel}
            selected={selectedOption}
            onChange={setSelectedOption}
            options={[]} // @TODO
        />
    )
}
```

The reason for `useState` is that we're also done initializing when we have a
value and the request for getting the label fails for whatever reason.

To get the label, the select component can leverage our `useDataQuery` hook:

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
```

The query has the `lazy: true` option to not start loading the label, right
away. The idea behind this is that we don't want to load anything when
there is no selected value, but that also means we'll have to start the
process manually.

We can use the hook we just added inside the component.
In order to transform the result into options that the `SimpleSingleSelect` accepts,
we'll also add a utility function, which we'll use again later:

```js
// Outside of the component
// Request result is: { displayName: string, id: string }
// but we need: { value: string, label: string }
function dataElementToOption({ id, displayName }) {
    return { value: id, label: displayName }
}

// Inside the component
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

Now we have to use `loadDataElementQuery.refetch` to load the label, or - in
case there is no initial selection - set the "initialized"-value to true
immediately:

```js
useEffect(
    () => {
        if (selectedOption?.value) {
            loadDataElementQuery.refetch({ id: selectedOption.value })
        } else {
            setInitializedSelectedLabel(true)
        }
    },
    // Needs to run on initial render only!
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
)
```

This is enough to address not having the label in case there's a selected value.

### When rendered initially, the select loads the first page of options

The options can be stored in an array:

```js
const [loadedOptions, setLoadedOptions] = useState([])

// ...

return (
    <SimpleSingleSelect
        name="demo"
        disabled={!initializedSelectedLabel}
        selected={selectedOption}
        onChange={setSelectedOption}
        options={loadedOptions}               // <--
    />
)}
```

The normal options should be rendered page by page, so we'll have to store
the paging information:

```js
// The name is "default" because we'll have another pager later for filtering
const [defaultPager, setDefaultPager] = useState({
    page: 0,
    pageSize: -1,
    total: -1,
    pageCount: -1,
})
```

By using `0` as the default value for page and `-1`s for the other values,
we can leverage that, as these values mean that we haven't loaded any options yet.

Now we also need a way to load the elements, for which we'll use `useDataQuery` again:

```js
// Request result is: { displayName: string, id: string }
// but we need: { value: string, label: string }
function dataElementToOption({ id, displayName }) {
    return { value: id, label: displayName }
}

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

With the logic that loads the options, we can set the select's loading state:

```jsx
<SimpleSingleSelect
    name="demo"
    disabled={!initializedSelectedLabel}
    loading={loadDataElementQuery.loading} // <--
    selected={selectedOption}
    onChange={() => null} // @TODO
    options={loadedOptions}
/>
```

### When searching for options, the actual request is debounced to prevent sending many unnecesary requests

Similarly to the `loadedOptions`, we'll have to persist pager information,
the loaded, filtered options as well as the search term:

```js
const [searchTerm, _setSearchTerm] = useState('')
const [filteredOptions, setFilteredOptions] = useState([])
const [filterPager, setFilterPager] = useState({
    page: 0,
    pageSize: -1,
    total: -1,
    pageCount: -1,
})
```

Note that we prefixed the function for setting the value of `searchTerm` with an underscore.
We'll write a custom setter function that will also send a request to search for an option a little further down.
The `useDataQuery` hook does not accept a signal (see [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal)),
so we'll have to send the request manually by getting the underlying `DataEngine` and using its `query` method:

```js
function useLoadFilteredDataElementsQuery(customOptions) {
    const engine = useDataEngine()
    const abortController = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const refetch = useCallback(({ searchTerm, page }) => {
        abortController.current?.abort()
        abortController.current = new AbortController()
        setLoading(true)

        const query = {
            result: {
                resource: 'dataElements',
                params: {
                    filter: [`displayName:ilike:${searchTerm}`],
                    pageSize: 10,
                    page,
                },
            },
        }

        const options = {
            ...customOptions,
            signal: abortController.current.signal,
        }

        return engine
            .query(query, options)
            .catch((e) => setError(e))
            .finally(() => {
                abortController.current = null
                setLoading(false)
            })
    }, [])

    return { loading, error, refetch }
}
```

Here we're manually setting the `loading` and `error` states and ensuring that
the reference to the callback remains stable.

This implementation has one Problem: The component will send many requests when
the user is typing. To prevent that, we'll add a debouncing mechanism:

```js
function useLoadFilteredDataElementsQuery(customOptions) {
    const engine = useDataEngine()
    const timeout = useRef(null)
    const abortController = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const refetch = useCallback(
        ({ searchTerm, page }) => {
            if (timeout.current) {
                clearTimeout(timeout.current)
                abortController.current?.abort()
            }

            return new Promise((resolve, reject) => {
                timeout.current = setTimeout(async () => {
                    try {
                        abortController.current = new AbortController()
                        setLoading(true)

                        const query = {
                            result: {
                                resource: 'dataElements',
                                params: {
                                    filter: [`displayName:ilike:${searchTerm}`],
                                    pageSize: 10,
                                    page,
                                },
                            },
                        }

                        const options = {
                            ...customOptions,
                            signal: abortController.current.signal,
                        }

                        try {
                            const result = await engine.query(query, options)
                            resolve(result)
                        } catch (e) {
                            setError(e)
                        }

                        abortController.current = null
                        timeout.current = null
                        setLoading(false)
                    } catch (e) {
                        reject(e)
                    }
                }, 200)
            })
        },
        [abortController, engine, customOptions]
    )

    return { loading, error, refetch }
}
```

Contrary to loading the data elements when not searching, the implementation
for loading filtered data elements does not trigger automatically. We can use
the hook we created above like this inside the component:

```js
const loadFilteredDataElementsQuery = useLoadFilteredDataElementsQuery({
    onComplete: ({ result }) => {
        setFilterPager(result.pager)
        setFilteredOptions((prevFilteredOptions) => {
            const newOptions = result.dataElements.map(dataElementToOption)

            return result.pager.page === 1
                ? newOptions
                : [...prevFilteredOptions, ...newOptions]
        })
    },
    onError: () => {
        setFilterPager((prevPager) => ({
            ...prevPager,
            pageCount: prevPager.page,
            total: filteredOptions.length,
        }))
    },
})
```

This is almost identical to how we treat loading data elements normally with the exception that we'll overwrite the existing options when we've loaded the first page (which happens when the user changes the filter value).

Now we can create the function that sets the value of `searchTerm` when the user types as well as triggers the request to ask the server for options:

```js
const setSearchTerm = useCallback(
    (nextSearchTerm) => {
        _setSearchTerm(nextSearchTerm)

        if (nextSearchTerm.trim()) {
            loadFilteredDataElementsQuery.refetch({
                page: 1,
                searchTerm: nextSearchTerm,
            })
        }
    },
    [loadFilteredDataElementsQuery.refetch]
)
```

When the user types, we'll throw away the entire previous search result, which means we can start at page 1 again.

The options we want to render now depend on whether we have a filter value or not:

```
const options = searchTerm ? filteredOptions : loadedOptions
```

Because there are two different loading states, we can combine them into a single value, which we'll pass to the SimpleSingleSelect component, as well as the props required for the search to work:

```
const loadingOptions = loadDataElementsQuery.loading || loadFilteredDataElementsQuery.loading
```

### When reaching the end of the options list, the select loads the next page

The only things that's missing at this point is the callback we have to pass to the `onEndReached` prop.

The callback should do nothing when:

-   the page is already the last page
-   we're currently loading options
-   load the next page of the normal options list when there's no filter value
-   load the next page of the filtered options list when there is a filter value

```js
const loadNextPage = useCallback(() => {
    const pager = searchTerm ? filterPager : defaultPager

    if (pager.page === pager.pageCount || loadingOptions) {
        return
    }

    if (searchTerm) {
        loadFilteredDataElementsQuery.refetch({
            page: pager.page + 1,
            searchTerm,
        })
    } else {
        loadDataElementsQuery.refetch({ page: pager.page + 1 })
    }
}, [
    filterPager,
    defaultPager,
    searchTerm,
    loadingOptions,
    loadFilteredDataElementsQuery.refetch,
    loadDataElementsQuery.refetch,
])

// ...

return (
    <SimpleSingleSelect
        name="demo"
        disabled={!initializedSelectedLabel}
        loading={loadingOptions}
        options={loadedOptions}
        selected={selectedOption}
        filterable
        filterValue={searchTerm}
        filterPlaceholder="search for 'ART' or 'ANC'"
        onFilterChange={setSearchTerm}
        noMatchText="No options were found"
        onChange={setSelectedOption}
        onEndReached={loadNextPage} // <--
    />
)
```

The final code looks like this:

```js
import { useDataEngine, useDataQuery } from '@dhis2/app-runtime'
import { SimpleSingleSelect } from '@dhis2/ui'
import React, { useCallback, useEffect, useRef, useState } from 'react'

// Request result is: { displayName: string, id: string }
// but we need: { value: string, label: string }
function dataElementToOption({ id, displayName }) {
    return { value: id, label: displayName }
}

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

function useLoadFilteredDataElementsQuery(customOptions) {
    const engine = useDataEngine()
    const timeout = useRef(null)
    const abortController = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const refetch = useCallback(
        ({ searchTerm, page }) => {
            if (timeout.current) {
                clearTimeout(timeout.current)
                abortController.current?.abort()
            }

            return new Promise((resolve, reject) => {
                timeout.current = setTimeout(async () => {
                    try {
                        abortController.current = new AbortController()
                        setLoading(true)

                        const query = {
                            result: {
                                resource: 'dataElements',
                                params: {
                                    filter: [`displayName:ilike:${searchTerm}`],
                                    pageSize: 10,
                                    page,
                                },
                            },
                        }

                        const options = {
                            ...customOptions,
                            signal: abortController.current.signal,
                        }

                        try {
                            const result = await engine.query(query, options)
                            resolve(result)
                        } catch (e) {
                            setError(e)
                        }

                        abortController.current = null
                        timeout.current = null
                        setLoading(false)
                    } catch (e) {
                        reject(e)
                    }
                }, 200)
            })
        },
        [abortController, engine, customOptions]
    )

    return { loading, error, refetch }
}

function OurSelectComponent() {
    const [initializedSelectedLabel, setInitializedSelectedLabel] =
        useState(false)
    const [selectedOption, setSelectedOption] = useState({
        value: 'fbfJHSPpUQD', // This value should come from the props
        label: '',
    })
    const valueLabel = initializedSelectedLabel
        ? selectedOption?.label
        : 'Loading...'

    const [loadedOptions, setLoadedOptions] = useState([])
    // The name is "default" because we'll have another pager later for filtering
    const [defaultPager, setDefaultPager] = useState({
        page: 0,
        pageSize: -1,
        total: -1,
        pageCount: -1,
    })

    const [searchTerm, _setSearchTerm] = useState('')
    const [filteredOptions, setFilteredOptions] = useState([])
    const [filterPager, setFilterPager] = useState({
        page: 0,
        pageSize: -1,
        total: -1,
        pageCount: -1,
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

    const loadFilteredDataElementsQuery = useLoadFilteredDataElementsQuery({
        onComplete: ({ result }) => {
            setFilterPager(result.pager)
            setFilteredOptions((prevFilteredOptions) => {
                const newOptions = result.dataElements.map(dataElementToOption)

                return result.pager.page === 1
                    ? newOptions
                    : [...prevFilteredOptions, ...newOptions]
            })
        },
        onError: () => {
            setFilterPager((prevPager) => ({
                ...prevPager,
                pageCount: prevPager.page,
                total: filteredOptions.length,
            }))
        },
    })

    const loadingOptions =
        loadDataElementsQuery.loading || loadFilteredDataElementsQuery.loading
    const options = searchTerm ? filteredOptions : loadedOptions

    const selectOption = useCallback(
        (nextValue) => {
            const nextSelectedOption = options.find(
                ({ value }) => value === nextValue
            )

            setSelectedOption(nextSelectedOption)
        },
        [options]
    )

    const setSearchTerm = useCallback(
        (nextSearchTerm) => {
            _setSearchTerm(nextSearchTerm)

            if (nextSearchTerm.trim()) {
                loadFilteredDataElementsQuery.refetch({
                    page: 1,
                    searchTerm: nextSearchTerm,
                })
            }
        },
        [loadFilteredDataElementsQuery.refetch]
    )

    const loadNextPage = useCallback(() => {
        const pager = searchTerm ? filterPager : defaultPager

        if (pager.page === pager.pageCount || loadingOptions) {
            return
        }

        if (searchTerm) {
            loadFilteredDataElementsQuery.refetch({
                page: pager.page + 1,
                searchTerm,
            })
        } else {
            loadDataElementsQuery.refetch({ page: pager.page + 1 })
        }
    }, [
        filterPager,
        defaultPager,
        searchTerm,
        loadingOptions,
        loadFilteredDataElementsQuery.refetch,
        loadDataElementsQuery.refetch,
    ])

    useEffect(
        () => {
            if (selectedOption?.value) {
                loadDataElementQuery.refetch({ id: selectedOption.value })
            } else {
                setInitializedSelectedLabel(true)
            }
        },
        // Needs to run on initial render only!
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    return (
        <SimpleSingleSelect
            name="demo"
            disabled={!initializedSelectedLabel}
            loading={loadingOptions}
            options={options}
            value={selectedOption?.value}
            valueLabel={valueLabel}
            filterable
            filterValue={searchTerm}
            filterPlaceholder="search for 'ART' or 'ANC'"
            onFilterChange={setSearchTerm}
            noMatchText="No options were found"
            onChange={selectOption}
            onEndReached={loadNextPage}
        />
    )
}
```
