import { Button } from '@dhis2-ui/button'
import { SingleSelectField, SingleSelectOption } from '@dhis2-ui/select'
import { useDataQuery, useOnlineStatus } from '@dhis2/app-runtime'
import { colors } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import { Autocomplete } from '../autocomplete/index.js'
import { debounce } from '../helpers/index.js'
import i18n from '../locales/index.js'
import { ACCESS_VIEW_ONLY, ACCESS_VIEW_AND_EDIT } from '../sharing-constants.js'

const query = {
    usersAndGroups: {
        resource: 'sharing/search',
        params: ({ search }) => ({
            key: search,
        }),
    },
}

const addType = (type) => (result) => ({ ...result, type })

export const AccessAdd = ({ onAdd }) => {
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

    const accessOptions = [
        {
            value: ACCESS_VIEW_ONLY,
            label: i18n.t('View only'),
        },
        {
            value: ACCESS_VIEW_AND_EDIT,
            label: i18n.t('View and edit'),
        },
    ]

    return (
        <>
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
                <div className="select-wrapper">
                    <SingleSelectField
                        label={i18n.t('Access level')}
                        placeholder={i18n.t('Select a level')}
                        disabled={offline}
                        selected={access}
                        helpText={
                            offline ? i18n.t('Not available offline') : ''
                        }
                        onChange={({ selected }) => setAccess(selected)}
                    >
                        {accessOptions.map(({ value, label }) => (
                            <SingleSelectOption
                                key={value}
                                label={label}
                                value={value}
                                active={value === access}
                            />
                        ))}
                    </SingleSelectField>
                </div>
                <Button
                    type="submit"
                    disabled={offline || !userOrGroup?.id || !access}
                >
                    {i18n.t('Give access')}
                </Button>
            </form>
            <style jsx>{`
                .sharing-subtitle {
                    color: ${colors.grey700};
                    font-size: 15px;
                    font-weight: 500;
                    margin: 0 0 8px 0;
                }

                .share-block {
                    background-color: ${colors.grey100};
                    color: ${colors.grey900};
                    margin-bottom: 21px;
                    padding: 8px 12px;
                    border-radius: 5px;
                }

                .sharing-inputs {
                    display: flex;
                    align-items: flex-end;
                    width: 100%;
                }

                .select-wrapper {
                    flex: 1;
                }
            `}</style>
        </>
    )
}

AccessAdd.propTypes = {
    onAdd: PropTypes.func.isRequired,
}
