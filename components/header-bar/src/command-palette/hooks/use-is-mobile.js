import { useState, useEffect } from 'react'

export const useIsMobile = (hasGrid) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

    useEffect(() => {
        if (!hasGrid) {
            return
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [hasGrid, setIsMobile])

    return isMobile
}
