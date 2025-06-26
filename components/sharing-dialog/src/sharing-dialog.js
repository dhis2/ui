import { useAlert, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import {
    ACCESS_NONE,
    ACCESS_VIEW_ONLY,
    ACCESS_VIEW_AND_EDIT,
    DIALOG_TYPES_LIST,
} from './constants.js'
import { FetchingContext } from './fetching-context/index.js'
import {
    convertAccessToConstantObject,
    replaceAccessWithConstant,
    createOnChangePayload,
    createOnAddPayload,
    createOnRemovePayload,
    isMetadataWriteAccessRemoved,
} from './helpers/index.js'
import i18n from './locales/index.js'
import { Modal } from './modal/index.js'
import { TabbedContent } from './tabs/index.js'

const userQuery = {
    me: {
        resource: 'me',
        params: {
            fields: ['id', 'userGroups[id]', 'authorities'],
        },
    },
}

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
    data: ({ data }) => data,
}

const emptyFunction = () => {}

const defaultInitialSharingSettings = {
    name: '',
    allowPublic: true,
    public: { data: ACCESS_NONE, metadata: ACCESS_NONE },
    groups: [],
    users: [],
}

const mapInitialSharingSettings = (originalSharingSettings) => {
    const mappedSharingSettings = { ...originalSharingSettings }
    if (
        originalSharingSettings.public &&
        typeof originalSharingSettings.public === 'string'
    ) {
        mappedSharingSettings.public = {
            data: ACCESS_NONE,
            metadata: originalSharingSettings.public,
        }
    }
    mappedSharingSettings.groups = originalSharingSettings.groups.map(
        (group) => {
            if (group.access && typeof group.access === 'string') {
                return {
                    ...group,
                    access: { data: ACCESS_NONE, metadata: group.access },
                }
            }
            return group
        }
    )
    mappedSharingSettings.users = originalSharingSettings.users.map((user) => {
        if (user.access && typeof user.access === 'string') {
            return {
                ...user,
                access: { data: ACCESS_NONE, metadata: user.access },
            }
        }
        return user
    })
    return mappedSharingSettings
}

export const SharingDialog = ({
    id,
    type,
    onClose = emptyFunction,
    onError = emptyFunction,
    onSave = emptyFunction,
    initialSharingSettings = defaultInitialSharingSettings,
    dataTest = 'dhis2-uicore-sharingdialog',
    dataSharing = false,
    cascadeDashboardSharing = true,
    preventUsersFromRemovingMetadataWriteAccess = false,
}) => {
    const { show: showError } = useAlert((error) => error, { critical: true })
    const mappedInitialSharingSettings = mapInitialSharingSettings(
        initialSharingSettings
    )

    /**
     * Data fetching
     */

    const { data, refetch, loading, fetching } = useDataQuery(query, {
        variables: { id, type },
        onError: (error) => {
            showError(error)
            onError(error)
        },
    })

    const { data: userData, loading: userLoading } = useDataQuery(userQuery)

    const [mutate, { loading: mutating }] = useDataMutation(mutation, {
        variables: {
            type,
            id,
        },
        onError: (error) => {
            showError(error)
            onError(error)
            refetch()
        },
        onComplete: () => {
            refetch()
            onSave()
        },
    })

    /**
     * Refresh data when type or id props change
     */

    useEffect(() => {
        refetch({ type, id })
    }, [type, id])

    /**
     * Block interaction during the initial load
     */

    if (loading || userLoading) {
        const users = Object.keys(initialSharingSettings.users).map(
            replaceAccessWithConstant
        )
        const groups = Object.keys(initialSharingSettings.groups).map(
            replaceAccessWithConstant
        )

        return (
            <FetchingContext.Provider value={true}>
                <Modal onClose={onClose}>
                    <TabbedContent
                        id={id}
                        users={users}
                        groups={groups}
                        publicAccess={mappedInitialSharingSettings.public}
                        allowPublicAccess={
                            mappedInitialSharingSettings.allowPublic
                        }
                        type={type}
                        onAdd={() => {}}
                        onChange={() => {}}
                        onRemove={() => {}}
                        dataSharing={dataSharing}
                        cascadeDashboardSharing={cascadeDashboardSharing}
                    />
                </Modal>
            </FetchingContext.Provider>
        )
    }

    const { object, meta } = data.sharing
    const publicAccess = convertAccessToConstantObject(object.publicAccess)
    const users = object.userAccesses.map(replaceAccessWithConstant)
    const groups = object.userGroupAccesses.map(replaceAccessWithConstant)

    /**
     * Handlers
     */

    const onAdd = ({ type: newType, id: newId, access, name }) => {
        const data = createOnAddPayload({
            object,
            type: newType,
            access,
            id: newId,
            name,
        })
        mutate({ data, type, id })
    }

    const onChange = ({ type: changedType, id: changedId, access }) => {
        if (
            preventUsersFromRemovingMetadataWriteAccess &&
            isMetadataWriteAccessRemoved({
                currentUser: userData?.me,
                type: changedType,
                access,
                id: changedId,
                publicAccess,
                users,
                groups,
            })
        ) {
            showError(
                i18n.t(
                    'This action would remove your metadata write access, which is not allowed'
                )
            )
            return
        }
        const data = createOnChangePayload({
            object,
            type: changedType,
            access,
            id: changedId,
        })
        mutate({ data, type, id })
    }

    const onRemove = ({ type: removedType, id: removedId }) => {
        if (
            preventUsersFromRemovingMetadataWriteAccess &&
            isMetadataWriteAccessRemoved({
                currentUser: userData?.me,
                type: removedType,
                access: { data: ACCESS_NONE, metadata: ACCESS_NONE },
                id: removedId,
                publicAccess,
                users,
                groups,
            })
        ) {
            showError(
                i18n.t(
                    'This action would remove your metadata write access, which is not allowed'
                )
            )
            return
        }
        const data = createOnRemovePayload({
            object,
            type: removedType,
            id: removedId,
        })
        mutate({ data, type, id })
    }

    return (
        <FetchingContext.Provider value={mutating || fetching}>
            <Modal
                onClose={onClose}
                name={object.displayName || object.name}
                dataTest={dataTest}
            >
                <TabbedContent
                    id={id}
                    users={users}
                    groups={groups}
                    publicAccess={publicAccess}
                    allowPublicAccess={meta.allowPublicAccess}
                    type={type}
                    onAdd={onAdd}
                    onChange={onChange}
                    onRemove={onRemove}
                    dataSharing={dataSharing}
                    cascadeDashboardSharing={cascadeDashboardSharing}
                />
            </Modal>
        </FetchingContext.Provider>
    )
}

SharingDialog.propTypes = {
    /** The id of the object to share */
    id: PropTypes.string.isRequired,
    /** The type of object to share */
    type: PropTypes.oneOf(DIALOG_TYPES_LIST).isRequired,
    /** Whether to show the tabbed sharing interface for applying cascade sharing of dashboard items */
    cascadeDashboardSharing: PropTypes.bool,
    /** Whether to expose the ability to set data sharing (in addition to metadata sharing) */
    dataSharing: PropTypes.bool,
    dataTest: PropTypes.string,
    /** Used to seed the component with data to show whilst loading */
    initialSharingSettings: PropTypes.shape({
        allowPublic: PropTypes.bool.isRequired,
        groups: PropTypes.objectOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                access: PropTypes.oneOfType([
                    PropTypes.shape({
                        data: PropTypes.oneOf([
                            ACCESS_NONE,
                            ACCESS_VIEW_ONLY,
                            ACCESS_VIEW_AND_EDIT,
                        ]),
                        metadata: PropTypes.oneOf([
                            ACCESS_NONE,
                            ACCESS_VIEW_ONLY,
                            ACCESS_VIEW_AND_EDIT,
                        ]),
                    }),
                    PropTypes.oneOf([
                        ACCESS_NONE,
                        ACCESS_VIEW_ONLY,
                        ACCESS_VIEW_AND_EDIT,
                    ]),
                ]),
            })
        ),
        name: PropTypes.string,
        public: PropTypes.oneOfType([
            PropTypes.shape({
                data: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
                metadata: PropTypes.oneOf([
                    ACCESS_NONE,
                    ACCESS_VIEW_ONLY,
                    ACCESS_VIEW_AND_EDIT,
                ]),
            }),
            PropTypes.oneOf([
                ACCESS_NONE,
                ACCESS_VIEW_ONLY,
                ACCESS_VIEW_AND_EDIT,
            ]),
        ]),
        users: PropTypes.objectOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                access: PropTypes.oneOfType([
                    PropTypes.shape({
                        data: PropTypes.oneOf([
                            ACCESS_NONE,
                            ACCESS_VIEW_ONLY,
                            ACCESS_VIEW_AND_EDIT,
                        ]),
                        metadata: PropTypes.oneOf([
                            ACCESS_NONE,
                            ACCESS_VIEW_ONLY,
                            ACCESS_VIEW_AND_EDIT,
                        ]),
                    }),
                    PropTypes.oneOf([
                        ACCESS_NONE,
                        ACCESS_VIEW_ONLY,
                        ACCESS_VIEW_AND_EDIT,
                    ]),
                ]),
            })
        ),
    }),
    /** Whether to disallow users from removing their metadata write access */
    preventUsersFromRemovingMetadataWriteAccess: PropTypes.bool,
    onClose: PropTypes.func,
    onError: PropTypes.func,
    onSave: PropTypes.func,
}
