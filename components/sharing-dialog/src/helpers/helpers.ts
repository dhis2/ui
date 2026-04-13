import {
    ACCESS_VIEW_ONLY,
    ACCESS_NONE,
    ACCESS_VIEW_AND_EDIT,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
} from '../constants.ts'
import type { AccessType } from '../constants.ts'

export interface AccessObject {
    data: AccessType
    metadata: AccessType
}

export interface SharingObject {
    publicAccess: string
    userAccesses: Array<{
        id: string
        name: string
        access: string
    }>
    userGroupAccesses: Array<{
        id: string
        name: string
        access: string
    }>
    [key: string]: unknown
}

interface CurrentUser {
    id: string
    userGroups?: Array<{ id: string }>
    authorities?: string[]
}

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds. If `immediate` is
 * passed, trigger the function on the leading edge, instead of the trailing.
 */

export const debounce = <T extends (...args: unknown[]) => void>(
    func: T,
    wait: number,
    immediate?: boolean
): ((...args: Parameters<T>) => void) => {
    let timeout: ReturnType<typeof setTimeout> | null

    return (...args: Parameters<T>) => {
        const later = () => {
            timeout = null

            if (!immediate) {
                func(...args)
            }
        }

        const callNow = immediate && !timeout

        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(later, wait)

        if (callNow) {
            func(...args)
        }
    }
}

/**
 * Access and constant conversion
 */

const convertAccessStringToConstant = (
    access: string | boolean | undefined
): AccessType => {
    if (access === undefined) {
        return ACCESS_NONE
    }

    if (typeof access === 'boolean') {
        return access ? ACCESS_VIEW_ONLY : ACCESS_NONE
    }

    if (access.startsWith('rw')) {
        return ACCESS_VIEW_AND_EDIT
    } else if (access.startsWith('r-')) {
        return ACCESS_VIEW_ONLY
    } else {
        return ACCESS_NONE
    }
}

export const convertAccessToConstantObject = (
    accessString?: string | boolean
): AccessObject => {
    if (typeof accessString === 'boolean') {
        return {
            data: ACCESS_NONE,
            metadata: convertAccessStringToConstant(accessString),
        }
    }
    const metadataAccessString = accessString?.substring(0, 2)
    const dataAccessString = accessString?.substring(2, 4)

    return {
        data: convertAccessStringToConstant(dataAccessString),
        metadata: convertAccessStringToConstant(metadataAccessString),
    }
}

export const convertConstantToAccessString = (constant: string): string => {
    switch (constant) {
        case ACCESS_NONE:
            return '--'
        case ACCESS_VIEW_ONLY:
            return 'r-'
        case ACCESS_VIEW_AND_EDIT:
            return 'rw'
        default:
            return '--'
    }
}

export const convertConstantObjectToAccess = (
    accessObject: AccessObject
): string => {
    return `${convertConstantToAccessString(
        accessObject.metadata
    )}${convertConstantToAccessString(accessObject.data)}----`
}

/**
 * Replaces access property with constants used internally
 */

export const replaceAccessWithConstant = ({
    access,
    ...rest
}: {
    access: string | boolean
    [key: string]: unknown
}): { access: AccessObject; [key: string]: unknown } => ({
    ...rest,
    access: convertAccessToConstantObject(access),
})

/**
 * Helper to check whether to allow removing for the selected target
 */

const permanentTargets: string[] = [SHARE_TARGET_EXTERNAL, SHARE_TARGET_PUBLIC]

export const isRemovableTarget = (target: string): boolean => {
    // Do not allow removal of permanent targets
    return !permanentTargets.includes(target)
}

/**
 * Check that metadata write access is not removed for user
 */

const willHaveUserMetadataWriteAccess = ({
    currentUser,
    users,
    type,
    id,
}: {
    currentUser: CurrentUser | undefined
    users: Array<{ id: string; access: AccessObject }>
    type: string
    id?: string
}): boolean => {
    // if type is user, and user is editing their own user access, return false
    if (type === 'user' && currentUser?.id === id) {
        return false
    }

    // else check if user has metadata write access
    const userAccess = users.find((user) => user.id === currentUser?.id)
    if (!userAccess) {
        return false
    }
    return userAccess?.access?.metadata === ACCESS_VIEW_AND_EDIT
}

const willHaveUserGroupMetadataWriteAccess = ({
    currentUser,
    groups,
    type: _type,
    id,
}: {
    currentUser: CurrentUser | undefined
    groups: Array<{ id: string; access: AccessObject }>
    type: string
    id?: string
}): boolean => {
    // check if the groups that the user belongs to (excluding edited group) have metadata write access
    const userGroupsForUser =
        currentUser?.userGroups
            ?.map((group) => group?.id)
            ?.filter((groupId): groupId is string => !!groupId) ?? []
    const groupsWithSharing = groups
        .filter((group) => userGroupsForUser.includes(group?.id))
        .filter((group) => group?.id !== id)

    return groupsWithSharing
        .map((group) => group.access.metadata === ACCESS_VIEW_AND_EDIT)
        .some((shared) => shared)
}

const willHavePublicMetadataWriteAccess = ({
    type,
    publicAccess,
}: {
    type: string
    publicAccess: AccessObject
}): boolean => {
    // if type is public, return false (they are removing public access)
    if (type === 'public') {
        return false
    }
    // else check if public has metadata write access
    return publicAccess?.metadata === ACCESS_VIEW_AND_EDIT
}

export const isMetadataWriteAccessRemoved = ({
    currentUser,
    type,
    access,
    id,
    publicAccess,
    users,
    groups,
}: {
    currentUser: CurrentUser | undefined
    type: string
    access: AccessObject
    id?: string
    publicAccess: AccessObject
    users: Array<{ id: string; access: AccessObject }>
    groups: Array<{ id: string; access: AccessObject }>
}): boolean => {
    // if updated access includes metadata write, return false
    if (access.metadata === ACCESS_VIEW_AND_EDIT) {
        return false
    }
    // if user has ALL authority, return false
    if (currentUser?.authorities?.includes('ALL')) {
        return false
    }
    const userMetadataWriteAccess = willHaveUserMetadataWriteAccess({
        currentUser,
        users,
        type,
        id,
    })
    const userGroupMetadataWriteAccess = willHaveUserGroupMetadataWriteAccess({
        currentUser,
        groups,
        type,
        id,
    })
    const publicMetadataWriteAccess = willHavePublicMetadataWriteAccess({
        type,
        publicAccess,
    })

    // if user has metadata write access, after operation, metadata write is not being removed
    return !(
        userMetadataWriteAccess ||
        userGroupMetadataWriteAccess ||
        publicMetadataWriteAccess
    )
}

/**
 * Mutation payload creators
 */

export const createOnChangePayload = ({
    object,
    type,
    access,
    id,
}: {
    object: SharingObject
    type: string
    access: AccessObject
    id?: string
}): { object: SharingObject } => {
    switch (type) {
        case 'public': {
            const data = {
                object: {
                    ...object,
                    publicAccess: convertConstantObjectToAccess(access),
                },
            }
            return data
        }
        case 'group': {
            const userGroupAccesses = object.userGroupAccesses.map((group) => {
                if (group.id !== id) {
                    return group
                }

                return {
                    ...group,
                    access: convertConstantObjectToAccess(access),
                }
            })
            const data = {
                object: {
                    ...object,
                    userGroupAccesses,
                },
            }
            return data
        }
        case 'user': {
            const userAccesses = object.userAccesses.map((user) => {
                if (user.id !== id) {
                    return user
                }

                return {
                    ...user,
                    access: convertConstantObjectToAccess(access),
                }
            })
            const data = {
                object: {
                    ...object,
                    userAccesses,
                },
            }
            return data
        }
        default:
            return { object }
    }
}

export const createOnAddPayload = ({
    object,
    type,
    id,
    access,
    name,
}: {
    object: SharingObject
    type: string
    id: string
    access: AccessObject
    name: string
}): { object: SharingObject } | undefined => {
    switch (type) {
        case 'group': {
            const data = {
                object: {
                    ...object,
                    userGroupAccesses: [
                        ...object.userGroupAccesses,
                        {
                            id,
                            name,
                            access: convertConstantObjectToAccess(access),
                        },
                    ],
                },
            }
            return data
        }
        case 'user': {
            const data = {
                object: {
                    ...object,
                    userAccesses: [
                        ...object.userAccesses,
                        {
                            id,
                            name,
                            access: convertConstantObjectToAccess(access),
                        },
                    ],
                },
            }
            return data
        }
    }
}

export const createOnRemovePayload = ({
    object,
    type,
    id,
}: {
    object: SharingObject
    type: string
    id: string
}): { object: SharingObject } | undefined => {
    switch (type) {
        case 'group': {
            const userGroupAccesses = object.userGroupAccesses.filter(
                (group) => group.id !== id
            )
            const data = {
                object: {
                    ...object,
                    userGroupAccesses,
                },
            }
            return data
        }
        case 'user': {
            const userAccesses = object.userAccesses.filter(
                (user) => user.id !== id
            )
            const data = {
                object: {
                    ...object,
                    userAccesses,
                },
            }
            return data
        }
    }
}
