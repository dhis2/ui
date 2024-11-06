import { useDataEngine, useDataQuery } from '@dhis2/app-runtime'
import { SingleSelectA11y } from '@dhis2/ui'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CustomDataProvider } from './single-select-a11y-server-side-filtering/index.js'

function useDebouncedFunction({ callback, onAbort, delay = 200 }) {
    const timeout = useRef(null)

    return useCallback(
        (...args) => {
            if (timeout.current) {
                clearTimeout(timeout.current)
                onAbort()
            }

            return new Promise((resolve, reject) => {
                timeout.current = setTimeout(async () => {
                    try {
                        const result = await callback(...args)
                        timeout.current = null
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                }, delay)
            })
        },
        [callback, delay, onAbort]
    )
}

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
    const abortController = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const refetch = useDebouncedFunction({
        onAbort: () => {
            abortController.current?.abort()
        },
        callback: ({ searchTerm, page }) => {
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
        },
    })

    return { loading, error, refetch }
}

function ServerSideFilteringSelect() {
    const [initializedSelectedLabel, setInitializedSelectedLabel] =
        useState(false)
    const [selectedOption, setSelectedOption] = useState({
        value: 'fbfJHSPpUQD',
        label: '',
    })

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

    const { loading: loadingDataElements, refetch: refetchDataElements } =
        useLoadDataElementsQuery({
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

    const {
        loading: loadingFilteredDataElements,
        refetch: refetchFilteredDataElements,
    } = useLoadFilteredDataElementsQuery({
        onComplete: ({ result }) => {
            setFilterPager(result.pager)
            setFilteredOptions((prevFilteredOptions) => {
                const newOptions = result.dataElements.map(dataElementToOption)

                return result.pager.page === 1
                    ? newOptions
                    : [...prevFilteredOptions, ...newOptions]
            })
        },
    })

    const loading =
        loadDataElementQuery.loading ||
        loadingDataElements ||
        loadingFilteredDataElements

    const loadNextPage = useCallback(() => {
        const pager = searchTerm ? filterPager : defaultPager

        if (pager.page === pager.pageCount || loading) {
            return
        }

        if (searchTerm) {
            refetchFilteredDataElements({
                page: pager.page + 1,
                searchTerm,
            })
        } else {
            refetchDataElements({ page: pager.page + 1 })
        }
    }, [
        filterPager,
        defaultPager,
        searchTerm,
        loading,
        refetchFilteredDataElements,
        refetchDataElements,
    ])

    const setSearchTerm = useCallback(
        (nextSearchTerm) => {
            _setSearchTerm(nextSearchTerm)

            if (nextSearchTerm.trim()) {
                refetchFilteredDataElements({
                    page: 1,
                    searchTerm: nextSearchTerm,
                })
            }
        },
        [refetchFilteredDataElements]
    )

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

    const options = searchTerm ? filteredOptions : loadedOptions

    return (
        <SingleSelectA11y
            disabled={
                !initializedSelectedLabel || defaultPager.pageCount === -1
            }
            idPrefix="serversidefiltering"
            options={options}
            value={selectedOption?.value}
            valueLabel={
                !initializedSelectedLabel ? 'Loading...' : selectedOption?.label
            }
            onChange={(nextValue) => {
                const nextSelectedOption = options.find(
                    ({ value }) => value === nextValue
                )
                setSelectedOption(nextSelectedOption)
            }}
            loading={loading}
            filterable
            filterValue={searchTerm}
            filterPlaceholder="search for 'ART' or 'ANC'"
            onFilterChange={setSearchTerm}
            noMatchText="No options were found"
            empty="Please use the search input to find data elements"
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
