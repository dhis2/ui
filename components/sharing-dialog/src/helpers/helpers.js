import {
    ACCESS_VIEW_ONLY,
    ACCESS_NONE,
    ACCESS_VIEW_AND_EDIT,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
} from '../constants.js'

/**
 * Returns a function, that, as long as it continues to be invoked, will not be triggered. The
 * function will be called after it stops being called for N milliseconds. If `immediate` is
 * passed, trigger the function on the leading edge, instead of the trailing.
 */

export const debounce = (func, wait, immediate) => {
    let timeout

    return (...args) => {
        const context = this

        const later = () => {
            timeout = null

            if (!immediate) {
                func.apply(context, args)
            }
        }

        const callNow = immediate && !timeout

        clearTimeout(timeout)
        timeout = setTimeout(later, wait)

        if (callNow) {
            func.apply(context, args)
        }
    }
}

/**
 * Access and constant conversion
 */

const convertAccessStringToConstant = (access) => {
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

export const convertAccessToConstantObject = (accessString) => {
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

export const convertConstantToAccessString = (constant) => {
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

export const convertConstantObjectToAccess = (accessObject) => {
    return `${convertConstantToAccessString(
        accessObject.metadata
    )}${convertConstantToAccessString(accessObject.data)}----`
}

/**
 * Replaces access property with constants used internally
 */

export const replaceAccessWithConstant = ({ access, ...rest }) => ({
    ...rest,
    access: convertAccessToConstantObject(access),
})

/**
 * Helper to check whether to allow removing for the selected target
 */

const permanentTargets = [SHARE_TARGET_EXTERNAL, SHARE_TARGET_PUBLIC]

export const isRemovableTarget = (target) => {
    // Do not allow removal of permanent targets
    return !permanentTargets.includes(target)
}

/**
 * Check that metadata write access is not removed for user
 */

const willHaveUserMetadataWriteAccess = ({ currentUser, users, type, id }) => {
    // if type is user, and user is editing their own user access, return false
    if (type === 'user' && currentUser.id === id) {
        return false
    }

    // else check if user has metadata write access
    const userAccess = users.find((user) => user.id === currentUser.id)
    if (!userAccess) {
        return false
    }
    return userAccess?.access?.metadata === ACCESS_VIEW_AND_EDIT
}

const willHaveUserGroupMetadataWriteAccess = ({ currentUser, groups, id }) => {
    // check if the groups that the user belongs to (excluding edited group) have metadata write access
    const userGroupsForUser =
        currentUser?.userGroups
            ?.map((group) => group?.id)
            ?.filter((id) => id) ?? []
    const groupsWithSharing = groups
        .filter((group) => userGroupsForUser.includes(group?.id))
        .filter((group) => group?.id !== id)
    if (
        groupsWithSharing
            .map((group) => group.access.metadata === ACCESS_VIEW_AND_EDIT)
            .some((shared) => shared)
    ) {
        return true
    }
    return false
}

const willHavePublicMetadataWriteAccess = ({ type, publicAccess }) => {
    // if type is public, return false (they are removing public access)
    if (type === 'public') {
        return false
    }
    // else check if public has metadata write access
    if (publicAccess?.metadata === ACCESS_VIEW_AND_EDIT) {
        return true
    }
    return false
}

export const isMetadataWriteAccessRemoved = ({
    currentUser,
    type,
    access,
    id,
    publicAccess,
    users,
    groups,
}) => {
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
    if (
        userMetadataWriteAccess ||
        userGroupMetadataWriteAccess ||
        publicMetadataWriteAccess
    ) {
        return false
    }

    return true
}

/**
 * Mutation payload creators
 */

export const createOnChangePayload = ({ object, type, access, id }) => {
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
    }
}

export const createOnAddPayload = ({ object, type, id, access, name }) => {
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

export const createOnRemovePayload = ({ object, type, id }) => {
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
