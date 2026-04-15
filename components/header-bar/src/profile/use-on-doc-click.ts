import { useEffect, useMemo } from 'react'

export const useOnDocClick = (
    containerRef: React.RefObject<HTMLElement | null>,
    hide: () => void
) => {
    const onDocClick = useMemo(() => {
        return (evt: MouseEvent) => {
            if (!containerRef.current) {
                return null
            }

            if (!containerRef.current.contains(evt.target as Node)) {
                hide()
            }
        }
    }, [containerRef, hide])

    useEffect(() => {
        document.addEventListener('click', onDocClick)

        return () => {
            document.removeEventListener('click', onDocClick)
        }
    }, [onDocClick])
}
