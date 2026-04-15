import { useDataQuery } from '@dhis2/app-runtime'
import React, { useState, useEffect, useCallback } from 'react'
import { debounce } from '../helpers/index.ts'
import i18n from '../locales/index.js'
import { Autocomplete } from './autocomplete.tsx'

const query = {
    search: {
        resource: 'sharing/search',
        params: ({ search }: Record<string, string>) => ({
            key: search,
        }),
    },
}

interface SearchEntity {
    id: string
    displayName: string
    name: string
    type: string
}

export interface SharingAutocompleteProps {
    onSelection: (entity: SearchEntity | null) => void
    selected?: string
}

export const SharingAutocomplete = ({
    selected,
    onSelection,
}: SharingAutocompleteProps) => {
    const [search, setSearch] = useState('')
    const [showResults, setShowResults] = useState(false)
    const { data, refetch, fetching } = useDataQuery(query, {
        lazy: true,
        onComplete: () => setShowResults(true),
    })

    /**
     * Ensure that local state doesn't get out of sync with the parent. On selection
     * this syncs the displayName of the parent selection to the local input state.
     */

    useEffect(() => setSearch(selected ?? ''), [selected])

    /**
     * If the search string changes and is truthy, send out a request, otherwise
     * clear the selection.
     */

    const debouncedRefetch = useCallback(
        debounce(
            ((...args: unknown[]) => refetch(...(args as []))) as (
                ...args: unknown[]
            ) => void,
            250
        ),
        [refetch]
    )

    useEffect(() => {
        if (search && search === selected) {
            return
        }

        if (search) {
            debouncedRefetch({ search })
        } else {
            onSelection(null)
            setShowResults(false)
        }
    }, [search])

    // Concatenate all the results
    let results: SearchEntity[] = []

    const searchData = data?.search as
        | {
              users?: Array<{
                  id: string
                  displayName: string
                  name: string
              }>
              userGroups?: Array<{
                  id: string
                  displayName: string
                  name: string
              }>
          }
        | undefined

    if (searchData?.users) {
        const mapped = searchData.users.map((user) => ({
            ...user,
            type: 'user',
        }))
        results = results.concat(mapped)
    }

    if (searchData?.userGroups) {
        const mapped = searchData.userGroups.map((group) => ({
            ...group,
            type: 'group',
        }))
        results = results.concat(mapped)
    }

    return (
        <Autocomplete
            inputWidth="100%"
            label={i18n.t('User or group')}
            loading={fetching}
            placeholder={i18n.t('Search')}
            search={search}
            searchResults={showResults ? results : []}
            onClose={() => setShowResults(false)}
            onSearch={setSearch}
            onSelect={(id: string) => {
                onSelection(results.find((result) => result.id === id) ?? null)
                setShowResults(false)
            }}
        />
    )
}
