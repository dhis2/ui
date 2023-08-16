import { Input } from '@dhis2-ui/input'
import { CircularLoader } from '@dhis2-ui/loader'
import { CustomDataProvider, useDataQuery } from '@dhis2/app-runtime'
import React, { useEffect, useRef, useState } from 'react'
import { SingleSelectOption } from '../../single-select-option/index.js'
import { SingleSelect } from '../single-select.js'

const PAGE_SIZE = 10
const OPTIONS_COUNT = 40

const allOptions = new Array(OPTIONS_COUNT).fill(null).map((_, index) => {
    const oddEven = index % 2 === 0 ? 'even' : 'odd'
    return {
        value: index.toString(),
        label: `Option ${index} (${oddEven})`,
    }
})

const optionsData = {
    options: (_, { params }) => {
        const { page, filter } = params
        const filteredOptions = allOptions.filter((option) =>
            filter ? option.label.includes(filter) : true
        )
        const pagedOptions = filteredOptions.slice(
            (page - 1) * PAGE_SIZE,
            page * PAGE_SIZE
        )

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    pager: {
                        pages: filteredOptions.length / PAGE_SIZE,
                        currentPage: page,
                    },
                    options: pagedOptions,
                })
            }, 200)
        })
    },
}

const query = {
    options: {
        resource: 'options',
        params: ({ page, filter }) => ({ page, filter }),
    },
}

export const WithCustomFiltering = () => {
    const [currentlyIntersecting, setCurrentlyIntersecting] = useState(false)
    const [loadingSpinnerRef, setLoadingSpinnerRef] = useState(null)
    const [loadedOptions, setLoadedOptions] = useState([])

    // We want to defer the actual filter value so we don't send a request with
    // every key stroke
    const [filterValue, setFilterValue] = useState('')
    const [params, setParams] = useState({ page: 1, filter: '' })
    const calledOnce = useRef(false)
    useEffect(() => {
        if (calledOnce.current) {
            const timeout = setTimeout(() => {
                pages.current = 1
                setLoadedOptions([])
                setParams({ page: 1, filter: filterValue })
            }, 200)

            return () => clearTimeout(timeout)
        } else {
            calledOnce.current = true
        }
    }, [filterValue])

    const { page: currentPage } = params
    // Using a ref because we don't want to react to a change of this value
    // It's guaranteed that we have the correct value because we reset the
    // value before fetching a new set of options when filtering / resetting
    // the filter as well as setting the value after the fetch has completed
    // but before we call a state setter. The state setter will cause a
    // rerender during which the new pages value can be accessed already
    const pages = useRef(0)

    const queryResult = useDataQuery(query, {
        lazy: true,
        onComplete: (data) => {
            pages.current = data.options.pager.pages
            // We want to add new options to existing ones so we don't have to
            // refetch existing options
            setLoadedOptions((prevLoadedOptions) => [
                ...prevLoadedOptions,
                ...data.options.options,
            ])
        },
    })

    const { refetch, loading } = queryResult

    useEffect(() => {
        refetch(params)
    }, [params, refetch])

    useEffect(() => {
        // We don't want to wait for intersections when loading as that can
        // cause buggy behavior
        if (loadingSpinnerRef && !loading) {
            const observer = new IntersectionObserver(
                (entries) => {
                    const [{ isIntersecting }] = entries

                    if (
                        isIntersecting !== currentlyIntersecting &&
                        ((isIntersecting && !loading) || !isIntersecting)
                    ) {
                        setCurrentlyIntersecting(isIntersecting)
                    }
                },
                { threshold: 0.8 }
            )

            observer.observe(loadingSpinnerRef)
            return () => observer.disconnect()
        }
    }, [loadingSpinnerRef, currentlyIntersecting, loading])

    // Setting the same value won't cause a rerender
    useEffect(() => {
        if (pages.current && currentlyIntersecting) {
            setParams((prevParams) => {
                const prevPage = prevParams.page
                const nextPage =
                    prevPage < pages.current ? prevPage + 1 : prevPage
                return { ...prevParams, page: nextPage }
            })
        }
    }, [currentlyIntersecting])

    const onChange = () => console.log('> onChange')

    return (
        <>
            <p>
                {`Current page: ${currentPage}`}
                <br />
                {`Pages: ${pages.current}`}
            </p>

            <SingleSelect onChange={onChange}>
                <div
                    style={{
                        position: 'sticky',
                        top: '0',
                        padding: 16,
                        boxShadow: '0 0 4px rgba(0,0,0,0.4)',
                        background: 'white',
                    }}
                >
                    <Input
                        dense
                        value={filterValue}
                        onChange={({ value }) => setFilterValue(value)}
                    />
                </div>

                {loadedOptions.map(({ value, label }) => (
                    <SingleSelectOption
                        key={value}
                        value={value}
                        label={label}
                    />
                ))}

                {currentPage !== pages.current && !!loadedOptions.length && (
                    <div
                        ref={(ref) =>
                            ref !== loadingSpinnerRef &&
                            setLoadingSpinnerRef(ref)
                        }
                        style={{
                            height: 80,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 20,
                            overflow: 'hidden',
                        }}
                    >
                        <CircularLoader />
                    </div>
                )}
            </SingleSelect>
        </>
    )
}

WithCustomFiltering.decorators = [
    (Story) => (
        <CustomDataProvider data={optionsData}>
            <Story />
        </CustomDataProvider>
    ),
]
