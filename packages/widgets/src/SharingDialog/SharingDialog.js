import React, { useEffect, useState } from 'react'
import PropTypes from '@dhis2/prop-types'

import i18n from '@dhis2/d2-i18n'
import { useAlert, useDataQuery, useDataMutation } from '@dhis2/app-runtime'

import {
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ButtonStrip,
    Button,
} from '@dhis2/ui-core'
import { SharingList } from './SharingList.js'
import { ShareBlock } from './ShareBlock.js'
import {
    defaultSharingSettings,
    convertAccessToConstant,
    convertConstantToAccess,
} from './sharingConstants.js'

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
    initialSharingSettings = defaultSharingSettings,
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
                {i18n.t('Sharing & Access') +
                    (sharingSettings.name ? `: ${sharingSettings.name}` : '')}
            </ModalTitle>
            <ModalContent>
                <ShareBlock onAdd={onAdd} />
                <SharingList
                    sharingSettings={sharingSettings}
                    onChange={onChange}
                    onRemove={onRemove}
                />
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
    onError: Function.prototype,
    onSave: Function.prototype,
}

SharingDialog.propTypes = {
    id: PropTypes.string,
    initialSharingSettings: PropTypes.object,
    type: PropTypes.string,
    onClose: PropTypes.func,
    onError: PropTypes.func,
    onSave: PropTypes.func,
}
