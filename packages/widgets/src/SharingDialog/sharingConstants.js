import i18n from '@dhis2/d2-i18n'

export const ACCESS_NONE = 'ACCESS_NONE'
export const ACCESS_VIEW_ONLY = 'ACCESS_VIEW_ONLY'
export const ACCESS_VIEW_AND_EDIT = 'ACCESS_VIEW_AND_EDIT'

const noAccess = i18n.t('No access')

export const accessStrings = {
    [ACCESS_NONE]: {
        publicDescription: () => noAccess,
        description: () => noAccess,
        option: noAccess,
    },
    [ACCESS_VIEW_ONLY]: {
        publicDescription: () => i18n.t('Anyone logged in can view'),
        description: () => i18n.t('Can view'),
        option: i18n.t('View only'),
    },
    [ACCESS_VIEW_AND_EDIT]: {
        publicDescription: () => i18n.t('Anyone logged in can view and edit'),
        description: () => i18n.t('Can view and edit'),
        option: i18n.t('View and edit'),
    },
}

export const SHARE_TARGET_EXTERNAL = 'SHARE_TARGET_EXTERNAL'
export const SHARE_TARGET_PUBLIC = 'SHARE_TARGET_PUBLIC'
export const SHARE_TARGET_USER = 'SHARE_TARGET_USER'
export const SHARE_TARGET_GROUP = 'SHARE_TARGET_GROUP'

export const isPermanentTarget = target =>
    [SHARE_TARGET_EXTERNAL, SHARE_TARGET_PUBLIC].includes(target)

export const defaultSharingSettings = {
    name: '',
    allowExternal: true,
    allowPublic: true,
    external: ACCESS_NONE,
    public: ACCESS_NONE,
    groups: {},
    users: {},
}

export const convertAccessToConstant = access => {
    if (typeof access === 'boolean') {
        return access ? ACCESS_VIEW_ONLY : ACCESS_NONE
    }

    if (/^rw/.test(access)) {
        return ACCESS_VIEW_AND_EDIT
    } else if (/^r-/.test(access)) {
        return ACCESS_VIEW_ONLY
    } else if (/^--/.test(access)) {
        return ACCESS_NONE
    } else {
        return defaultSharingSettings.public
    }
}

export const convertConstantToAccess = (constant, useBoolean) => {
    switch (constant) {
        case ACCESS_NONE:
            return useBoolean ? false : '--------'
        case ACCESS_VIEW_ONLY:
            return useBoolean ? true : 'r-------'
        case ACCESS_VIEW_AND_EDIT:
            return useBoolean ? true : 'rw------'
        default:
            return useBoolean ? true : '--------'
    }
}
