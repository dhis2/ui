import { useEffect, useMemo, useState } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    GRID_COLUMNS_DESKTOP,
    GRID_COLUMNS_MOBILE,
    GRID_ROWS_DESKTOP,
    GRID_ROWS_MOBILE,
} from '../utils/constants.js'

function getGridLayout(apps, isMobile) {
    let columns = isMobile ? GRID_COLUMNS_MOBILE : GRID_COLUMNS_DESKTOP
    let rows = isMobile ? GRID_ROWS_MOBILE : GRID_ROWS_DESKTOP

    const expectedGridSize = rows * columns
    const availableApps =
        apps?.length >= expectedGridSize ? expectedGridSize : apps.length

    if (availableApps && availableApps < expectedGridSize) {
        if (availableApps / columns < 1) {
            columns = availableApps
            rows = 1
        } else if (availableApps % columns === 0) {
            rows = availableApps / columns
        } else {
            rows = Math.trunc(availableApps / columns + 1)
        }
    }

    return { rows, columns, size: availableApps }
}

export const useGridLayout = (apps) => {
    const { setShowGrid } = useCommandPaletteContext()

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480)

    useEffect(() => {
        setShowGrid(apps?.length > 0)
    }, [apps, setShowGrid])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const gridLayout = useMemo(
        () => getGridLayout(apps, isMobile),
        [apps, isMobile]
    )

    return {
        gridLayout,
        isMobile,
    }
}
