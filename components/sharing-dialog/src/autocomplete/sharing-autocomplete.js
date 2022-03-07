import { useDataQuery } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useState, useEffect, useCallback } from 'react'
import { debounce } from '../helpers/index.js'
import i18n from '../locales/index.js'
import { Autocomplete } from './autocomplete.js'

const query = {
    search: {
        resource: 'sharing/search',
        params: ({ search }) => ({
            key: search,
        }),
    },
}

export const SharingAutocomplete = ({ selected, onSelection }) => {
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

    useEffect(() => setSearch(selected), [selected])

    /**
     * If the search string changes and is truthy, send out a request, otherwise
     * clear the selection.
     */

    const debouncedRefetch = useCallback(debounce(refetch, 250), [refetch])

    useEffect(() => {
        if (search) {
            debouncedRefetch({ search })
        } else {
            onSelection(null)
            setShowResults(false)
        }
    }, [search])

    // Concatenate all the results
    let results = []

    if (data?.search?.users) {
        const mapped = data.search.users.map((user) => ({
            ...user,
            type: 'user',
        }))
        results = results.concat(mapped)
    }

    if (data?.search?.userGroups) {
        const mapped = data.search.userGroups.map((group) => ({
            ...group,
            type: 'group',
        }))
        results = results.concat(mapped)
    }

    return (
        <Autocomplete
            inputWidth="400px"
            label={i18n.t('User or group')}
            loading={fetching}
            placeholder={i18n.t('Search')}
            search={search}
            searchResults={showResults ? results : []}
            onClose={() => setShowResults(false)}
            onSearch={setSearch}
            onSelect={(id) => {
                onSelection(results.find((result) => result.id === id))
                setShowResults(false)
            }}
        />
    )
}

SharingAutocomplete.propTypes = {
    onSelection: PropTypes.func.isRequired,
    selected: PropTypes.string,
}
