import React, { useEffect, useState } from 'react'

import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'
import { useDataQuery } from '@dhis2/app-runtime'
import { Button, Divider } from '@dhis2/ui-core'

import { ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT } from './sharingConstants'
import { Autocomplete } from './Autocomplete/Autocomplete'
import { AccessSelect } from './AccessSelect'
import { sharingCommonStyles, shareBlockStyles } from './SharingDialog.styles'

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
            console.error('onSearch error', error)
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
        <div>
            <style jsx>{sharingCommonStyles}</style>
            <style jsx>{shareBlockStyles}</style>
            <p className="sharing-subtitle">
                {i18n.t('Give access to a user, group or role')}
            </p>
            <Divider />
            <form onSubmit={onSubmit} className="share-block sharing-inputs">
                <Autocomplete
                    placeholder={i18n.t('Search')}
                    label={i18n.t('User, group or role')}
                    inputWidth="400px"
                    value={userOrGroup?.name}
                    searchResults={searchResults}
                    onClose={onClose}
                    onChange={onChange}
                    onSearch={onSearch}
                />
                <div className="select-wrap">
                    <AccessSelect
                        label={i18n.t('Access level')}
                        placeholder={i18n.t('Select a level')}
                        access={access}
                        accessOptions={[ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT]}
                        onChange={setAccess}
                    />
                </div>
                <Button
                    type="submit"
                    large
                    disabled={!userOrGroup?.id || !access}
                >
                    {i18n.t('Give access')}
                </Button>
            </form>
        </div>
    )
}

ShareBlock.propTypes = {
    onAdd: PropTypes.func,
}
