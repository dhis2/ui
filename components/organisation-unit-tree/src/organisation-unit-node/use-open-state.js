import { useEffect, useState } from 'react'

/**
 * @param {Object} args
 * @param {string} args.path
 * @param {string} [args.errorMessage]
 * @param {string} [args.autoExpandLoadingError]
 * @param {string[]} args.expanded
 * @param {Function} [args.onExpand]
 * @param {Function} [args.onCollapse]
 * @returns {Object}
 */
export const useOpenState = ({
    path,
    expanded,
    onExpand,
    onCollapse,
    errorMessage,
    autoExpandLoadingError,
}) => {
    const autoExpand = autoExpandLoadingError && !!errorMessage
    const [openedOnceDueToError, setOpenedOnce] = useState(!!errorMessage)

    useEffect(() => {
        if (autoExpand && !openedOnceDueToError) {
            onExpand({ path })(true)
            setOpenedOnce(true)
        }
    }, [autoExpand, openedOnceDueToError])

    const open = (autoExpand && !openedOnceDueToError) || !!expanded.includes(path)
    const onToggleOpen = () =>
        !open ? onExpand({ path }) : onCollapse({ path })

    return { open, onToggleOpen }
}
