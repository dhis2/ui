import react, { useState, useEffect } from 'react'
import { Transfer } from '@dhis2/ui'

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
    const fetchOptions = (nextPage) =>
        new Promise((resolve) =>
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
            nextOptions.every((nextOption) => {
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

