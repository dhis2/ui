import { useEffect, useState } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import {
    GRID_COLUMNS_DESKTOP,
    GRID_COLUMNS_MOBILE,
    GRID_ROWS_DESKTOP,
    GRID_ROWS_MOBILE,
} from '../utils/constants.js'

export const useGridLayout = (apps) => {
    const { setShowGrid, setMinAppsNumber } = useCommandPaletteContext()
    const isBigScreen = window.innerWidth > 768

    const [gridLayout, setGridLayout] = useState(
        isBigScreen ? 'desktop' : 'mobile'
    )

    const [gridColumns, setGridColumns] = useState(
        isBigScreen ? GRID_COLUMNS_DESKTOP : GRID_COLUMNS_MOBILE
    )
    const [gridRows, setGridRows] = useState(
        isBigScreen ? GRID_ROWS_DESKTOP : GRID_ROWS_MOBILE
    )

    useEffect(() => {
        setShowGrid(apps?.length > 0)
        setMinAppsNumber(gridColumns * gridRows)
    }, [apps, setShowGrid, setMinAppsNumber, gridColumns, gridRows])

    useEffect(() => {
        const handleResize = () => {
            setGridLayout(window.innerWidth > 768 ? 'desktop' : 'mobile')
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const availableApps = apps?.length || 0

        const columns =
            gridLayout === 'desktop'
                ? GRID_COLUMNS_DESKTOP
                : GRID_COLUMNS_MOBILE
        const rows =
            gridLayout === 'desktop' ? GRID_ROWS_DESKTOP : GRID_ROWS_MOBILE

        if (availableApps < rows * columns) {
            if (availableApps / columns < 1) {
                setGridColumns(availableApps)
                setGridRows(1)
            } else {
                if (availableApps % columns === 0) {
                    setGridColumns(columns)
                    setGridRows(availableApps / columns)
                } else {
                    setGridColumns(columns)
                    setGridRows(rows)
                }
            }
        } else {
            setGridColumns(columns)
            setGridRows(rows)
        }
    }, [apps, gridLayout])

    return {
        gridLayout,
        gridColumns,
        gridRows,
    }
}
