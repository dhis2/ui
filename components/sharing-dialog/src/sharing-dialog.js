import { ButtonStrip, Button } from '@dhis2-ui/button'
import { Modal, ModalTitle, ModalContent, ModalActions } from '@dhis2-ui/modal'
import { useAlert, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { DashboardSharingContent } from './dashboard-sharing-content.js'
import { DefaultSharingContent } from './default-sharing-content.js'
import {
    defaultSharingSettings,
    convertAccessToConstant,
    convertConstantToAccess,
} from './sharing-constants.js'

const query = {
    sharing: {
        resource: 'sharing',
        params: ({ type, id }) => ({
            type,
            id,
        }),
    },
}

const mutation = {
    resource: 'sharing',
    params: ({ type, id }) => ({
        type,
        id,
    }),
    type: 'update',
    data: ({ sharing }) => ({
        object: sharing.object,
    }),
}

export const SharingDialog = ({
    initialSharingSettings,
    id,
    type,
    onClose,
    onError,
    onSave,
}) => {
    const [sharingSettings, updateSharingSettings] = useState(
        initialSharingSettings
    )
    const [isDirty, setIsDirty] = useState(false)
    const { show } = useAlert(error => error, { critical: true })

    const onDataEngineError = error => {
        show(error)

        onError(error)
    }

    const onMutateError = error => {
        onDataEngineError(error)
        // after a mutate error the state won't reflect the stored sharing settings
        // a refetch is needed
        fetchSharingSettings(type, id)
    }

    const { data, refetch } = useDataQuery(query, {
        lazy: true,
        onError: onDataEngineError,
    })
    const fetchSharingSettings = (type, id) => refetch({ type, id })

    const [mutate] = useDataMutation(mutation, {
        onError: onMutateError,
        onComplete: onSave,
    })
    const mutateSharingSettings = sharing => {
        mutate({
            type,
            id,
            sharing,
        })
    }

    // refresh sharing settings if type/id changes
    useEffect(() => {
        fetchSharingSettings(type, id)
    }, [type, id])

    // update state after fetch
    useEffect(() => {
        if (data?.sharing) {
            if (data.sharing.object.userAccesses.length) {
                data.sharing.object.userAccesses.forEach(userAccess =>
                    addUserOrGroupAccess({
                        type: 'user',
                        id: userAccess.id,
                        name: userAccess.name,
                        access: convertAccessToConstant(userAccess.access),
                    })
                )
            }

            if (data.sharing.object.userGroupAccesses.length) {
                data.sharing.object.userGroupAccesses.forEach(groupAccess =>
                    addUserOrGroupAccess({
                        type: 'group',
                        id: groupAccess.id,
                        name: groupAccess.name,
                        access: convertAccessToConstant(groupAccess.access),
                    })
                )
            }

            setIsDirty(false)

            updateSharingSettings(prevState => ({
                ...prevState,
                allowExternal: data.sharing.meta.allowExternalAccess,
                allowPublic: data.sharing.meta.allowPublicAccess,
                external: convertAccessToConstant(
                    data.sharing.object.externalAccess
                ),
                public: convertAccessToConstant(
                    data.sharing.object.publicAccess
                ),
                name:
                    data.sharing.object.displayName || data.sharing.object.name,
                id: data.sharing.object.id,
            }))
        }
    }, [data])

    // PUT when state change (but not when setting state after fetch)
    useEffect(() => {
        if (isDirty) {
            saveSharingSettings(sharingSettings)
        }
    }, [sharingSettings, isDirty])

    const addUserOrGroupAccess = ({ type, id, name, access }) =>
        updateSharingSettings(prevState => ({
            ...prevState,
            [`${type}s`]: {
                ...prevState[`${type}s`],
                [id]: {
                    id,
                    name,
                    access,
                },
            },
        }))

    const removeUserOrGroupAccess = ({ type, id }) =>
        updateSharingSettings(prevState => {
            const usersOrGroups = prevState[`${type}s`]

            delete usersOrGroups[id]

            return {
                ...prevState,
                [`${type}s`]: {
                    ...usersOrGroups,
                },
            }
        })

    const changeAccess = ({ type, id, access }) => {
        const updatedAccess = {}

        switch (type) {
            case 'external':
                updatedAccess.external = access
                break
            case 'public':
                updatedAccess.public = access
                break
            case 'group':
            case 'user': {
                const pluralType = `${type}s`

                updatedAccess[pluralType] = {
                    ...sharingSettings[pluralType],
                    [id]: {
                        ...sharingSettings[pluralType][id],
                        access,
                    },
                }
                break
            }
        }

        updateSharingSettings(prevState => ({
            ...prevState,
            ...updatedAccess,
        }))
    }

    const saveSharingSettings = sharingSettings => {
        // prepare payload
        const payload = {
            object: {
                publicAccess: convertConstantToAccess(sharingSettings.public),
                externalAccess: convertConstantToAccess(
                    sharingSettings.external,
                    true
                ),
                userAccesses: Object.values(sharingSettings.users).map(
                    userSharingSettings => ({
                        ...userSharingSettings,
                        access: convertConstantToAccess(
                            userSharingSettings.access
                        ),
                    })
                ),
                userGroupAccesses: Object.values(sharingSettings.groups).map(
                    groupSharingSettings => ({
                        ...groupSharingSettings,
                        access: convertConstantToAccess(
                            groupSharingSettings.access
                        ),
                    })
                ),
            },
        }

        mutateSharingSettings(payload)
    }

    const onAdd = data => {
        setIsDirty(true)

        addUserOrGroupAccess(data)
    }

    const onChange = data => {
        setIsDirty(true)

        changeAccess(data)
    }

    const onRemove = data => {
        setIsDirty(true)

        removeUserOrGroupAccess(data)
    }

    return (
        <Modal large position="top" onClose={onClose}>
            <ModalTitle>
                {sharingSettings.name
                    ? i18n.t('Sharing and access: {{- objectName}}', {
                          objectName: sharingSettings.name,
                          nsSeparator: '|',
                      })
                    : i18n.t('Sharing and access')}
            </ModalTitle>
            <ModalContent>
                {type === 'dashboard' ? (
                    <DashboardSharingContent
                        sharingSettings={sharingSettings}
                        onAdd={onAdd}
                        onChange={onChange}
                        onRemove={onRemove}
                    />
                ) : (
                    <DefaultSharingContent
                        sharingSettings={sharingSettings}
                        onAdd={onAdd}
                        onChange={onChange}
                        onRemove={onRemove}
                    />
                )}
            </ModalContent>
            <ModalActions>
                <ButtonStrip end>
                    <Button type="button" secondary onClick={onClose}>
                        {i18n.t('Close')}
                    </Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

SharingDialog.defaultProps = {
    initialSharingSettings: defaultSharingSettings,
    onError: Function.prototype,
    onSave: Function.prototype,
}

SharingDialog.propTypes = {
    /** The id of the object to share */
    id: PropTypes.string.isRequired,
    /** The type of object to share */
    type: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    initialSharingSettings: PropTypes.shape({
        allowExternal: PropTypes.bool,
        allowPublic: PropTypes.bool,
        external: PropTypes.string,
        groups: PropTypes.object,
        name: PropTypes.string,
        public: PropTypes.string,
        users: PropTypes.object,
    }),
    onError: PropTypes.func,
    onSave: PropTypes.func,
}
