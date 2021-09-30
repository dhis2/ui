import i18n from './locales/index.js'
import {
    ACCESS_VIEW_ONLY,
    ACCESS_NONE,
    ACCESS_VIEW_AND_EDIT,
    SHARE_TARGET_EXTERNAL,
    SHARE_TARGET_PUBLIC,
    defaultSharingSettings,
} from './sharing-constants'

export const debounce = function (f, ms) {
    let timeout

    return function (...args) {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(function () {
            timeout = undefined
            f(...args)
        }, ms)
    }
}

/**
 * Name conversion
 */

export const nameToTitle = name => {
    const title = name
        ? i18n.t('Sharing and access: {{- objectName}}', {
              objectName: name,
              nsSeparator: '|',
          })
        : i18n.t('Sharing and access')

    return title
}

export const nameToInitials = name => {
    const parts = name.split(' ')
    const firstNameInitial = parts.length > 0 ? parts.shift().charAt(0) : ''
    const lastNameInitial = parts.length > 0 ? parts.pop().charAt(0) : ''

    return `${firstNameInitial}${lastNameInitial}`
}

/**
 * Access and constant conversion
 */

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
            return useBoolean ? false : '--------'
    }
}

/**
 * Helper to check whether to allow removing for the selected target,
 * i.e. if permanent, do not allow removal.
 */

export const isPermanentTarget = target =>
    [SHARE_TARGET_EXTERNAL, SHARE_TARGET_PUBLIC].includes(target)
