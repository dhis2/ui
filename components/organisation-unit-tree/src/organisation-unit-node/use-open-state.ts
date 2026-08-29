import { useEffect, useState } from 'react'

interface UseOpenStateArgs {
    path: string
    expanded: string[]
    onExpand: (args: { path: string }) => void
    onCollapse: (args: { path: string }) => void
    errorMessage?: string
    autoExpandLoadingError?: boolean
}

interface UseOpenStateReturn {
    open: boolean
    onToggleOpen: () => void
    openedOnceDueToError: boolean
}

export const useOpenState = ({
    path,
    expanded,
    onExpand,
    onCollapse,
    errorMessage,
    autoExpandLoadingError,
}: UseOpenStateArgs): UseOpenStateReturn => {
    const autoExpand = autoExpandLoadingError && !!errorMessage
    const [openedOnceDueToError, setOpenedOnceDueToError] = useState(
        !!errorMessage
    )

    useEffect(() => {
        if (autoExpand && !openedOnceDueToError) {
            onExpand({ path })
            setOpenedOnceDueToError(true)
        }
    }, [autoExpand, openedOnceDueToError])

    const open =
        (autoExpand && !openedOnceDueToError) || !!expanded.includes(path)
    const onToggleOpen = () =>
        !open ? onExpand({ path }) : onCollapse({ path })

    return { open, onToggleOpen, openedOnceDueToError }
}
