import { useDataEngine, useDataQuery } from '@dhis2/app-runtime'
import { SingleSelectA11y } from '@dhis2/ui'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CustomDataProvider } from './single-select-a11y-server-side-filtering/index.js'

function dataElementToOption({ id, displayName }) {
    return { value: id, label: displayName }
}

function useLoadDataElementQuery(options) {
    return useDataQuery({
        result: {
            resource: 'dataElements',
            id: ({ id }) => id,
        },
    }, { ...options, lazy: true })
}

function useLoadDataElementsQuery(options) {
    return useDataQuery({
        result: {
            resource: 'dataElements',
            params: ({ page }) => ({ page, pageSize: 10 }),
        },
    }, options)
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
        [abortController, engine]
    )

    return { loading, error, refetch }
}

function ServerSideFilteringSelect() {
    const [initializedSelectedLabel, setInitializedSelectedLabel] =
        useState(false)
    const [selectedOption, setSelectedOption] = useState({
        value: 'fbfJHSPpUQD',
        label: '',
    })
    const valueLabel = initializedSelectedLabel ? selectedOption.label : 'Loading...'

    const [loadedOptions, setLoadedOptions] = useState([])
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

    const loadingOptions = loadDataElementsQuery.loading || loadFilteredDataElementsQuery.loading
    const options = searchTerm ? filteredOptions : loadedOptions

    const selectOption = useCallback((nextValue) => {
        const nextSelectedOption = options.find(
            ({ value }) => value === nextValue
        )

        setSelectedOption(nextSelectedOption)
    }, [options])

    const setSearchTerm = useCallback((nextSearchTerm) => {
        _setSearchTerm(nextSearchTerm)

        if (nextSearchTerm.trim()) {
            loadFilteredDataElementsQuery.refetch({
                page: 1,
                searchTerm: nextSearchTerm,
            })
        }
    }, [loadFilteredDataElementsQuery.refetch])

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
        <SingleSelectA11y
            idPrefix="demo"
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
            empty="Please use the search input to find data elements"
            onChange={selectOption}
            onEndReached={loadNextPage}
        />
    )
}

const Wrapper = () => (
    <CustomDataProvider>
        <ServerSideFilteringSelect />
    </CustomDataProvider>
)

export { Wrapper as ServerSideFilteringSelect }
