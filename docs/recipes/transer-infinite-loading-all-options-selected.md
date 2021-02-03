# Transfer: Infinite loading - All loaded options are already selected

## Abstract

If you have a Transfer component with infinite loading capability (by using the
`onEndReached` callback to load more items), there's a potential edge case:
All options that are being loaded are also selected.

When no mechanism to handle this is in place, this will cause a bug:
The options are loaded and displayed as selected but the callback passed to
onEndReached won't be called again to load the next few options.

### Example

This can happen when loading options asynchronously and all options that will
be loaded during the initial fetch are already selected.

## Cause

To be able to find a solution for this problem, it's crucial to understand the
reason why this is happening:

The `IntersectionObserver` api is used to determine whether the end of the
scrollable list is inside the viewable area or not. The internal implementation
of this api uses resize events (of the elements participating in the
intersection detection) to trigger its checks whether an intersection has
happened or not.

When options have been loaded and they're all selected, they won't be added to
the available options list, which causes none of the participating elements
to resize, hence the internal checks of the `IntersectionObserver`'s api won't
be called.

## Work-around

Although this is an issue that many Transfer components will have, there's no
easy fix to this that could be implemented in the Transfer component as the
context around the `onEndReached` callback matters a lot.

Adding checks to the component would require the consumer to provide way more
information and checks than simply covering this manually on the app's side.

This can be done by checking whether all newly loaded options are selected
already, and - if true - run the logic for fetching the next page again.

### Example

Let's say we have the following options in the database:

```js
const optionsPool = [
    { value: '0', label: 'Option 0' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    { value: '10', label: 'Option 10' },
    { value: '11', label: 'Option 11' },
    { value: '12', label: 'Option 12' },
]
```

And the page size is 5

```js
const pageSize = 5
```

There are some states to manage loading, current page, selected items, etc:

```js
// state for whether the next page's options are being loaded
const [loading, setLoading] = useState(false)
// captures the current page
const [page, setPage] = useState(0)
// all options (incl. available AND selected options)
const [options, setOptions] = useState([])
// selected options
const [selected] = useState(
    // second page is already selected
    optionsPool.slice(pageSize, pageSize * 2).map(({ value }) => value)
)
```

In order to fake the fetching process, we'll add a simple function with a
timeout:

```js
// fake fetch request
const fetchOptions = nextPage =>
    new Promise(resolve =>
        setTimeout(() => {
            const nextOptions = optionsPool.slice(
                options.length,
                nextPage * pageSize
            )
            resolve(nextOptions)
        }, 2000)
    )
```

The process of loading the next items is quite simple:
When the end of the scrollable list has been reached, increase the page.
That should trigger loading the next options

```js
const onEndReached = () => {
    // do nothing when loading already
    if (loading) return
    setPage(page + 1)
}

useEffect(() => {
    // prevent when this function is called initially
    // as onEndReached will be called initially as well
    if (page > 0) {
        loadNextOptions()
    }
}, [page])
```

Loading the options and managing the state is quite trivial:

```js
const loadNextOptions = async () => {
    setLoading(true)

    const nextOptions = await fetchOptions(page)
    setOptions([...options, ...nextOptions])

    setLoading(false)
}
```

And rendering the Transfer can be done now as well:

```js
return (
    <Transfer
        loading={loading}
        options={options}
        selected={selected}
        // not relevant for this recipe
        onChange={() => null /* noop */}
        onEndReached={onEndReached}
    />
)
```

Let's put all the pieces together into a working Transfer component (without
the fix for the edge case):

```js
const optionsPool = [
    { value: '0', label: 'Option 0' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    { value: '10', label: 'Option 10' },
    { value: '11', label: 'Option 11' },
    { value: '12', label: 'Option 12' },
]

const pageSize = 5

/*
 * The page size is: 5
 * To keep the code as small as possible, handling selecting items is not
   included
 */
export const InfiniteLoading = () => {
    // state for whether the next page's options are being loaded
    const [loading, setLoading] = useState(false)
    // captures the current page
    const [page, setPage] = useState(0)
    // all options (incl. available AND selected options)
    const [options, setOptions] = useState([])
    // selected options
    const [selected] = useState(
        // second page is already selected
        optionsPool.slice(pageSize, pageSize * 2).map(({ value }) => value)
    )

    const onEndReached = () => {
        // do nothing when loading already
        if (loading) return
        setPage(page + 1)
    }

    // fake fetch request
    const fetchOptions = nextPage =>
        new Promise(resolve =>
            setTimeout(() => {
                const nextOptions = optionsPool.slice(
                    options.length,
                    nextPage * pageSize
                )
                resolve(nextOptions)
            }, 2000)
        )

    const loadNextOptions = async () => {
        setLoading(true)

        const nextOptions = await fetchOptions(page)
        setOptions([...options, ...nextOptions])

        setLoading(false)
    }

    useEffect(() => {
        // prevent initial call
        if (page > 0) {
            loadNextOptions()
        }
    }, [page])

    return (
        <Transfer
            loading={loading}
            options={options}
            selected={selected}
            onChange={() => null /* noop */}
            onEndReached={onEndReached}
        />
    )
}
```

All we have to do now is to check whether the newly loaded options ALL have
been selected already. If that is the case, just trigger the onEndReached
manually:

```js
const loadNextOptions = async () => {
    setLoading(true)

    const nextOptions = await fetchOptions(page)
    setOptions([...options, ...nextOptions])

    setLoading(false)

    const allAlreadySelected =
        nextOptions.length !== 0 &&
        nextOptions.every(nextOption => {
            const { value } = nextOption
            return selected.includes(value)
        })

    if (allAlreadySelected) {
        onEndReached()
    }
}
```

The final code with the workaround looks as follows:

```js
const optionsPool = [
    { value: '0', label: 'Option 0' },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
    { value: '6', label: 'Option 6' },
    { value: '7', label: 'Option 7' },
    { value: '8', label: 'Option 8' },
    { value: '9', label: 'Option 9' },
    { value: '10', label: 'Option 10' },
    { value: '11', label: 'Option 11' },
    { value: '12', label: 'Option 12' },
]

const pageSize = 5

/*
 * The page size is: 5
 * To keep the code as small as possible, handling selecting items is not
   included
 */
export const InfiniteLoading = () => {
    // state for whether the next page's options are being loaded
    const [loading, setLoading] = useState(false)
    // captures the current page
    const [page, setPage] = useState(0)
    // all options (incl. available AND selected options)
    const [options, setOptions] = useState([])
    // selected options
    const [selected] = useState(
        // second page is already selected
        optionsPool.slice(pageSize, pageSize * 2).map(({ value }) => value)
    )

    const onEndReached = () => {
        // do nothing when loading already
        if (loading) return
        setPage(page + 1)
    }

    // fake fetch request
    const fetchOptions = nextPage =>
        new Promise(resolve =>
            setTimeout(() => {
                const nextOptions = optionsPool.slice(
                    options.length,
                    nextPage * pageSize
                )
                resolve(nextOptions)
            }, 2000)
        )

    const loadNextOptions = async () => {
        setLoading(true)

        const nextOptions = await fetchOptions(page)
        setOptions([...options, ...nextOptions])

        setLoading(false)

        const allAlreadySelected =
            nextOptions.length !== 0 &&
            nextOptions.every(nextOption => {
                const { value } = nextOption
                return selected.includes(value)
            })

        if (allAlreadySelected) {
            onEndReached()
        }
    }

    useEffect(() => {
        // prevent initial call
        if (page > 0) {
            loadNextOptions()
        }
    }, [page])

    return (
        <Transfer
            loading={loading}
            options={options}
            selected={selected}
            onChange={() => null /* noop */}
            onEndReached={onEndReached}
        />
    )
}
```
