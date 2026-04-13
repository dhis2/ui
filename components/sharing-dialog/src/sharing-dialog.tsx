import { useAlert, useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import React, { useEffect } from 'react'
import {
    ACCESS_NONE,
} from './constants.ts'
import type { AccessType, DialogType } from './constants.ts'
import { FetchingContext } from './fetching-context/index.ts'
import {
    convertAccessToConstantObject,
    replaceAccessWithConstant,
    createOnChangePayload,
    createOnAddPayload,
    createOnRemovePayload,
    isMetadataWriteAccessRemoved,
} from './helpers/index.ts'
import type { AccessObject, SharingObject } from './helpers/index.ts'
import i18n from './locales/index.js'
import { Modal } from './modal/index.ts'
import { TabbedContent } from './tabs/index.ts'

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
        params: ({ type, id }: Record<string, string>) => ({
            type,
            id,
        }),
    },
}

const mutation = {
    resource: 'sharing',
    params: ({ type, id }: Record<string, string>) => ({
        type,
        id,
    }),
    type: 'update' as const,
    data: ({ data }: Record<string, unknown>) => data,
} as unknown as Parameters<typeof useDataMutation>[0]

const emptyFunction = () => {}

interface InitialSharingAccess {
    data?: AccessType
    metadata?: AccessType
}

interface InitialSharingEntity {
    id: string
    name: string
    access?: InitialSharingAccess | AccessType
    [key: string]: unknown
}

interface InitialSharingSettings {
    name?: string
    allowPublic: boolean
    public?: InitialSharingAccess | AccessType
    groups: Record<string, InitialSharingEntity>
    users: Record<string, InitialSharingEntity>
}

const defaultInitialSharingSettings: InitialSharingSettings = {
    name: '',
    allowPublic: true,
    public: { data: ACCESS_NONE, metadata: ACCESS_NONE },
    groups: {},
    users: {},
}

const mapInitialSharingSettings = (
    originalSharingSettings: InitialSharingSettings
) => {
    const mappedSharingSettings = { ...originalSharingSettings }
    if (
        originalSharingSettings.public &&
        typeof originalSharingSettings.public === 'string'
    ) {
        mappedSharingSettings.public = {
            data: ACCESS_NONE,
            metadata: originalSharingSettings.public as AccessType,
        }
    }
    const mappedGroups: Record<string, InitialSharingEntity> = {}
    for (const [key, group] of Object.entries(
        originalSharingSettings.groups
    )) {
        if (group.access && typeof group.access === 'string') {
            mappedGroups[key] = {
                ...group,
                access: {
                    data: ACCESS_NONE,
                    metadata: group.access as AccessType,
                },
            }
        } else {
            mappedGroups[key] = group
        }
    }
    mappedSharingSettings.groups = mappedGroups
    const mappedUsers: Record<string, InitialSharingEntity> = {}
    for (const [key, user] of Object.entries(originalSharingSettings.users)) {
        if (user.access && typeof user.access === 'string') {
            mappedUsers[key] = {
                ...user,
                access: {
                    data: ACCESS_NONE,
                    metadata: user.access as AccessType,
                },
            }
        } else {
            mappedUsers[key] = user
        }
    }
    mappedSharingSettings.users = mappedUsers
    return mappedSharingSettings
}

export interface SharingDialogProps {
    /** The id of the object to share */
    id: string
    /** The type of object to share */
    type: DialogType
    /** Whether to show the tabbed sharing interface for applying cascade sharing of dashboard items */
    cascadeDashboardSharing?: boolean
    /** Whether to expose the ability to set data sharing (in addition to metadata sharing) */
    dataSharing?: boolean
    dataTest?: string
    /** Used to seed the component with data to show whilst loading */
    initialSharingSettings?: InitialSharingSettings
    metadataSharing?: boolean
    /** Whether to disallow users from removing their metadata write access */
    preventUsersFromRemovingMetadataWriteAccess?: boolean
    onClose?: () => void
    onError?: (error: unknown) => void
    onSave?: () => void
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
    metadataSharing = true,
    cascadeDashboardSharing = true,
    preventUsersFromRemovingMetadataWriteAccess = false,
}: SharingDialogProps) => {
    const { show: showError } = useAlert((error: string) => error, {
        critical: true,
    })
    const mappedInitialSharingSettings = mapInitialSharingSettings(
        initialSharingSettings
    )

    /**
     * Data fetching
     */

    const { data, refetch, loading, fetching } = useDataQuery(query, {
        variables: { id, type },
        onError: (error: unknown) => {
            showError(error as string)
            onError(error)
        },
    })

    const { data: userData, loading: userLoading } = useDataQuery(userQuery)

    const [mutate, { loading: mutating }] = useDataMutation(mutation, {
        variables: {
            type,
            id,
        },
        onError: (error: unknown) => {
            showError(error as string)
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
            (key) =>
                replaceAccessWithConstant(
                    initialSharingSettings.users[key] as {
                        access: string | boolean
                        [key: string]: unknown
                    }
                ) as unknown as {
                    id: string
                    name: string
                    access: AccessObject
                }
        )
        const groups = Object.keys(initialSharingSettings.groups).map(
            (key) =>
                replaceAccessWithConstant(
                    initialSharingSettings.groups[key] as {
                        access: string | boolean
                        [key: string]: unknown
                    }
                ) as unknown as {
                    id: string
                    name: string
                    access: AccessObject
                }
        )

        return (
            <FetchingContext.Provider value={true}>
                <Modal onClose={onClose}>
                    <TabbedContent
                        id={id}
                        users={users}
                        groups={groups}
                        publicAccess={
                            (mappedInitialSharingSettings.public as AccessObject) ?? {
                                data: ACCESS_NONE,
                                metadata: ACCESS_NONE,
                            }
                        }
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

    const sharingData = data as {
        sharing: {
            object: SharingObject & {
                displayName?: string
                name?: string
            }
            meta: { allowPublicAccess: boolean }
        }
    }
    const { object, meta } = sharingData.sharing
    const publicAccess = convertAccessToConstantObject(object.publicAccess)
    const users = object.userAccesses.map(
        (u) =>
            replaceAccessWithConstant(u as { access: string | boolean; [key: string]: unknown }) as unknown as {
                id: string
                name: string
                access: AccessObject
            }
    )
    const groups = object.userGroupAccesses.map(
        (g) =>
            replaceAccessWithConstant(g as { access: string | boolean; [key: string]: unknown }) as unknown as {
                id: string
                name: string
                access: AccessObject
            }
    )

    const currentUser = (userData as { me: { id: string; userGroups: Array<{ id: string }>; authorities: string[] } } | undefined)?.me

    /**
     * Handlers
     */

    const onAdd = ({
        type: newType,
        id: newId,
        access,
        name,
    }: {
        type: string
        id: string
        access: AccessObject
        name: string
    }) => {
        const data = createOnAddPayload({
            object,
            type: newType,
            access,
            id: newId,
            name,
        })
        mutate({ data, type, id })
    }

    const onChange = ({
        type: changedType,
        id: changedId,
        access,
    }: {
        type: string
        id?: string
        access: AccessObject
    }) => {
        if (
            preventUsersFromRemovingMetadataWriteAccess &&
            isMetadataWriteAccessRemoved({
                currentUser,
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

    const onRemove = ({
        type: removedType,
        id: removedId,
    }: {
        type: string
        id: string
    }) => {
        if (
            preventUsersFromRemovingMetadataWriteAccess &&
            isMetadataWriteAccessRemoved({
                currentUser,
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
                    metadataSharing={metadataSharing}
                    cascadeDashboardSharing={cascadeDashboardSharing}
                />
            </Modal>
        </FetchingContext.Provider>
    )
}
