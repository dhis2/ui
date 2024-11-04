import React, { useCallback, useState } from 'react'
import { SingleSelectA11y } from '../single-select-a11y.js'
import { options } from './options.js'

// The select displays exactly 9 options per page,
// using 10 so the user has to scroll to see the effect
const CHUNK_SIZE = 10

const optionChunks = options.reduce((chunks, option, index) => {
    if (index === 0) {
        return [[option]]
    }

    const prevChunkIndex = chunks.length - 1
    const prevChunk = chunks[prevChunkIndex]
    const prevChunkLength = prevChunk.length

    if (prevChunkLength < CHUNK_SIZE) {
        return [...chunks.slice(0, prevChunkIndex), [...prevChunk, option]]
    }

    return [...chunks, [option]]
}, [])

export const InfiniteLoading = () => {
    const [loading, setLoading] = useState(false)
    const [curLoadedPage, setCurLoadedPage] = useState(0)
    const [value, setValue] = useState('')
    const [loadedOptions, setLoadedOptions] = useState(optionChunks[0])
    const valueLabel = value
        ? loadedOptions.find((option) => option.value === value).label
        : ''

    const loadNextOptions = useCallback(() => {
        const nextPage = curLoadedPage + 1
        console.log('>', { nextPage, loading })

        if (
            // We're already loading a page
            loading ||
            // No need to load anything when already loaded everything
            nextPage >= optionChunks.length
        ) {
            console.log('> do nothing')
            return
        }

        setLoading(true)
        setCurLoadedPage(nextPage)

        // Fake network request to show loader a reasonable amount of time
        setTimeout(() => {
            const nextChunk = optionChunks[nextPage]
            setLoadedOptions((prevOptions) => [...prevOptions, ...nextChunk])
            setLoading(false)
        }, 1500)
    }, [curLoadedPage, loading])

    return (
        <SingleSelectA11y
            idPrefix="a11y"
            value={value}
            valueLabel={valueLabel}
            loading={loading}
            menuLoadingText="Foo bar baz"
            onChange={(nextValue) => setValue(nextValue)}
            options={loadedOptions}
            onEndReached={loadNextOptions}
        />
    )
}
