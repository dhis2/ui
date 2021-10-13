import { Button } from '@dhis2-ui/button'
import { useDataQuery, useOnlineStatus } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import { AccessSelect } from './access-select.js'
import { Autocomplete } from './autocomplete/autocomplete.js'
import { debounce } from './helpers.js'
import i18n from './locales/index.js'
import { ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT } from './sharing-constants.js'
import {
    sharingCommonStyles,
    shareBlockStyles,
} from './sharing-dialog.styles.js'

const query = {
    usersAndGroups: {
        resource: 'sharing/search',
        params: ({ search }) => ({
            key: search,
        }),
    },
}

const addType = (type) => (result) => ({ ...result, type })

export const ShareBlock = ({ onAdd }) => {
    const [userOrGroup, setUserOrGroup] = useState(undefined)
    const [access, setAccess] = useState(undefined)
    const [didInvalidate, setDidInvalidate] = useState(true)
    const { offline } = useOnlineStatus()
    const { data, refetch } = useDataQuery(query, {
        lazy: true,
        onComplete: () => {
            if (didInvalidate) {
                setDidInvalidate(false)
            }
        },
    })

    const searchResults = useMemo(() => {
        if (!data || didInvalidate) {
            return []
        }

        return data.usersAndGroups.users.concat(data.usersAndGroups.userGroups)
    }, [data, didInvalidate])

    const usersAndGroups = useMemo(() => {
        if (!data || didInvalidate) {
            return {}
        }

        return data.usersAndGroups.users
            .map(addType('user'))
            .concat(data.usersAndGroups.userGroups.map(addType('group')))
            .reduce((result, obj) => {
                result[obj.id] = obj

                return result
            }, {})
    }, [data, didInvalidate])

    const fetchData = debounce((text) => {
        refetch({ search: text })
    }, 500)

    const onSearch = (text) => {
        setUserOrGroup({ name: text })

        if (text.length) {
            fetchData(text)
        } else {
            setDidInvalidate(true)
        }
    }

    const onClose = () => {
        setDidInvalidate(true)
    }

    const onChange = (id) => {
        setUserOrGroup(usersAndGroups[id])
        setDidInvalidate(true)
    }

    const onSubmit = (e) => {
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
        <>
            <style jsx>{sharingCommonStyles}</style>
            <style jsx>{shareBlockStyles}</style>
            <p className="sharing-subtitle">
                {i18n.t('Give access to a user, group or role')}
            </p>
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
                <AccessSelect
                    label={i18n.t('Access level')}
                    placeholder={i18n.t('Select a level')}
                    access={access}
                    accessOptions={[ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT]}
                    onChange={setAccess}
                />
                <Button
                    type="submit"
                    disabled={offline || !userOrGroup?.id || !access}
                >
                    {i18n.t('Give access')}
                </Button>
            </form>
        </>
    )
}

ShareBlock.propTypes = {
    onAdd: PropTypes.func.isRequired,
}
