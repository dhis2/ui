import i18n from './locales/index.js'

/**
 * Access
 */

export const ACCESS_NONE = 'ACCESS_NONE'
export const ACCESS_VIEW_ONLY = 'ACCESS_VIEW_ONLY'
export const ACCESS_VIEW_AND_EDIT = 'ACCESS_VIEW_AND_EDIT'

export const accessStrings = {
    [ACCESS_NONE]: {
        publicDescription: () => i18n.t('No access'),
        description: () => i18n.t('No access'),
        option: i18n.t('No access'),
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

/**
 * Sharing
 */

export const SHARE_TARGET_EXTERNAL = 'SHARE_TARGET_EXTERNAL'
export const SHARE_TARGET_PUBLIC = 'SHARE_TARGET_PUBLIC'
export const SHARE_TARGET_USER = 'SHARE_TARGET_USER'
export const SHARE_TARGET_GROUP = 'SHARE_TARGET_GROUP'

export const defaultSharingSettings = {
    name: '',
    allowExternal: true,
    allowPublic: true,
    external: ACCESS_NONE,
    public: ACCESS_NONE,
    groups: {},
    users: {},
}
