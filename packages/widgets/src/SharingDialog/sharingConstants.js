import i18n from "@dhis2/d2-i18n";

export const ACCESS_NONE = "ACCESS_NONE";
export const ACCESS_VIEW_ONLY = "ACCESS_VIEW_ONLY";
export const ACCESS_VIEW_AND_EDIT = "ACCESS_VIEW_AND_EDIT";

const noAccess = i18n.t('No access')
export const accessStrings = {
  [ACCESS_NONE]: {
    publicDescription: noAccess,
    description: noAccess,
    option: noAccess
  },
  [ACCESS_VIEW_ONLY]: {
    publicDescription: i18n.t('Anyone logged in can find and view'),
    description: i18n.t('Can find and view'),
    option: i18n.t('View only')
  },
  [ACCESS_VIEW_AND_EDIT]: {
    publicDescription: i18n.t('Anyone logged in can find, edit, and view'),
    description: i18n.t('Can find, edit, and view'),
    option: i18n.t('Edit and view')
  }
}

export const SHARE_TARGET_EXTERNAL = 'SHARE_TARGET_EXTERNAL'
export const SHARE_TARGET_PUBLIC = 'SHARE_TARGET_PUBLIC'
export const SHARE_TARGET_USER = 'SHARE_TARGET_USER'
export const SHARE_TARGET_GROUP = 'SHARE_TARGET_GROUP'

export const isPermanentTarget = target => [SHARE_TARGET_EXTERNAL, SHARE_TARGET_PUBLIC].includes(target)

export const defaultSharingSettings = {
    external: ACCESS_NONE,
    public: ACCESS_VIEW_ONLY,
    groups: [],
    users: []
}

export const sharingSettingsAreEqual = (a, b) => {
    const aGroups = Object.entries(a.groups).filter(([_, access]) => !!access)
    const aUsers = Object.entries(a.users).filter(([_, access]) => !!access)
    const bGroups = Object.entries(b.groups).filter(([_, access]) => !!access)
    const bUsers = Object.entries(b.users).filter(([_, access]) => !!access)

    return a.external === b.external &&
        a.public === b.public &&
        aGroups.length === bGroups.length &&
        aGroups.every(([id, access]) => b.groups[id] === access) &&
        aUsers.length === bUsers.length &&
        aUsers.every(([id, access]) => b.users[id] === access)
}
