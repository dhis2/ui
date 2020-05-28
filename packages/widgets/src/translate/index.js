/*
 * This allows us to delay calling i18n.t until after the
 * language has been set. Otherwise the translations could
 * potentially use the wrong language.
 *
 * It checks if the passed prop is a function. If so,
 * it'll execute it. Since this should only be called during
 * render, we can be certain that i18n will have initialized.
 */

const translate = prop => {
    if (typeof prop === 'function') {
        return prop()
    }

    return prop
}

export default translate
