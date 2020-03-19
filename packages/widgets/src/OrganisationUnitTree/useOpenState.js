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
    const [open, setOpen] = useState(autoExpand || expanded.includes(path))

    useEffect(() => {
        if (autoExpand && !openedOnceDueToError) {
            setOpen(true)
            setOpenedOnce(true)
        }
    }, [autoExpand, openedOnceDueToError])

    const onToggleOpen = () => {
        const newOpen = !open
        const payload = { path }

        setOpen(newOpen)

        if (onExpand && newOpen) {
            onExpand(payload)
        } else if (onCollapse && !newOpen) {
            onCollapse(payload)
        }
    }

    return { open, onToggleOpen }
}
