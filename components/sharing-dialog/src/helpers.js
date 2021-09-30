import i18n from './locales/index.js'

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

export const nameToTitle = name => {
    name
        ? i18n.t('Sharing and access: {{- objectName}}', {
                objectName: name,
                nsSeparator: '|',
            })
        : i18n.t('Sharing and access')
}
