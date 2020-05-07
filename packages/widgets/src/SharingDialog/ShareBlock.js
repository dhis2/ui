import React, { useEffect, useState } from 'react'

import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'
import { useDataQuery } from '@dhis2/app-runtime'

import { Button } from '@dhis2/ui-core'
import { Autocomplete } from './Autocomplete/Autocomplete'
import { AccessSelect } from './AccessSelect'
import { shareBlockStyles } from './SharingDialog.styles'

import { debounce } from './helpers'

const query = {
    usersAndGroups: {
        resource: 'sharing/search',
        params: ({ search }) => ({
            key: search,
        }),
    },
}

export const ShareBlock = ({ onAdd }) => {
    const [userOrGroup, setUserOrGroup] = useState(undefined)
    const [access, setAccess] = useState(undefined)
    const [usersAndGroups, setUsersAndGroups] = useState({})
    const [searchResults, setSearchResults] = useState([])

    const { data, error, refetch } = useDataQuery(query, {
        lazy: true,
    })

    const addType = type => result => ({ ...result, type })

    useEffect(() => {
        if (data) {
            setSearchResults(
                data.usersAndGroups.users.concat(data.usersAndGroups.userGroups)
            )

            setUsersAndGroups(
                data.usersAndGroups.users
                    .map(addType('user'))
                    .concat(
                        data.usersAndGroups.userGroups.map(addType('group'))
                    )
                    .reduce((result, obj) => {
                        result[obj.id] = obj

                        return result
                    }, {})
            )
        }
    }, [data])

    const fetchData = debounce(text => {
        console.log('text', text)
        refetch({ search: text })
    }, 500)

    const onSearch = text => {
        setUserOrGroup({ name: text })

        if (text.length) {
            fetchData(text)
        } else {
            setSearchResults([])
        }

        if (error) {
            console.log('onSearch error', error)
        }
    }

    const onClose = () => {
        setSearchResults([])
        setUsersAndGroups({})
    }

    const onChange = id => {
        setUserOrGroup(usersAndGroups[id])

        onClose()
    }

    const onSubmit = e => {
        e.preventDefault()
        onAdd({
            type: userOrGroup.type,
            id: userOrGroup.id,
            name: userOrGroup.displayName || userOrGroup.name,
            access,
        })
        setUserOrGroup(undefined)
        setAccess(undefined)
    }

    return (
        <div className="share-block">
            <style jsx>{shareBlockStyles}</style>
            <p>{i18n.t('Share with users and groups')}</p>
            <form onSubmit={onSubmit} className="sharing-inputs">
                <Autocomplete
                    placeholder={i18n.t('Search for user, group or role')}
                    inputWidth="400px"
                    value={userOrGroup?.name}
                    searchResults={searchResults}
                    onClose={onClose}
                    onChange={onChange}
                    onSearch={onSearch}
                />
                <div className="select-wrap">
                    <AccessSelect access={access} onChange={setAccess} />
                </div>
                <Button
                    type="submit"
                    large
                    disabled={!userOrGroup?.id || !access}
                >
                    {i18n.t('Share')}
                </Button>
            </form>
        </div>
    )
}

ShareBlock.propTypes = {
    onAdd: PropTypes.func,
}
