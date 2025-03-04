const convertAccess = (access) => {
    if (access === 'View only') {
        return 'r-'
    }
    if (access === 'View and edit') {
        return 'rw'
    }
    return '--'
}

export const getUserWithDataAndMetadataAccess = (
    metadataaccess,
    dataaccess
) => ({
    meta: {
        allowExternalAccess: false,
        allowPublicAccess: false,
    },
    object: {
        id: 'id',
        name: '',
        displayName: '',
        externalAccess: false,
        publicAccess: '--------',
        userAccesses: [
            {
                id: 'user-1',
                name: 'A user',
                access: `${convertAccess(metadataaccess)}${convertAccess(
                    dataaccess
                )}----`,
            },
        ],
        userGroupAccesses: [],
    },
})

export const getGroupWithDataAndMetadataAccess = (
    metadataaccess,
    dataaccess
) => ({
    meta: {
        allowExternalAccess: false,
        allowPublicAccess: false,
    },
    object: {
        id: 'id',
        name: '',
        displayName: '',
        externalAccess: false,
        publicAccess: '--------',
        userAccesses: [],
        userGroupAccesses: [
            {
                id: 'group-1',
                name: 'A group',
                access: `${convertAccess(metadataaccess)}${convertAccess(
                    dataaccess
                )}----`,
            },
        ],
    },
})

export const getAllUsersWithDataAndMetadataAccess = (
    metadataaccess,
    dataaccess
) => ({
    meta: {
        allowExternalAccess: true,
        allowPublicAccess: true,
    },
    object: {
        id: 'id',
        name: '',
        displayName: '',
        externalAccess: false,
        publicAccess: `${convertAccess(metadataaccess)}${convertAccess(
            dataaccess
        )}----`,
        userAccesses: [],
        userGroupAccesses: [],
    },
})
