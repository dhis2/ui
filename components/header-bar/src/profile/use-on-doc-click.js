import { useEffect, useMemo } from 'react'

export const useOnDocClick = (containerRef, hide) => {
    const onDocClick = useMemo(() => {
        return (evt) => {
            if (!containerRef.current) {
                return null
            }

            if (!containerRef.current.contains(evt.target)) {
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
