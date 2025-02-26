import { useState, useMemo, useCallback } from 'react'
import {
    DESKTOP_GRID_COLUMNS,
    MOBILE_GRID_COLUMNS,
} from '../utils/constants.js'
import { useIsMobile } from './use-is-mobile.js'

const constructGrid = (items, isMobile) => {
    const columns = isMobile ? MOBILE_GRID_COLUMNS : DESKTOP_GRID_COLUMNS

    return items.reduce((acc, item, index) => {
        const rowIndex = Math.floor(index / columns)

        if (!acc[rowIndex]) {
            acc[rowIndex] = []
        }

        acc[rowIndex].push(item)

        return acc
    }, [])
}

const useGridNavigation = (gridItems, listItems) => {
    const isMobile = useIsMobile(gridItems.length > 1)
    const [currentLocation, setCurrentLocation] = useState({ x: 0, y: 0 })

    const gridSection = constructGrid(gridItems.slice(0, 8), isMobile)

    const grid = useMemo(
        () => [...gridSection, ...listItems.map((item) => [item])],
        [gridSection, listItems]
    )

    const handleKeyDown = useCallback(
        (event) => {
            const updateLocation = (location) => {
                if (location.y < 0) {
                    location.y = grid.length - 1
                }
                if (location.y > grid.length - 1) {
                    location.y = 0
                }
                if (location.x < 0) {
                    location.x = grid[location.y].length - 1
                }
                if (location.x > grid[location.y].length - 1) {
                    location.x = 0
                }

                return location
            }

            switch (event.key) {
                case 'ArrowUp':
                    setCurrentLocation((prev) =>
                        updateLocation({ x: prev.x, y: prev.y - 1 })
                    )
                    break
                case 'ArrowDown':
                    setCurrentLocation((prev) =>
                        updateLocation({ x: prev.x, y: prev.y + 1 })
                    )
                    break
                case 'ArrowLeft':
                    setCurrentLocation((prev) =>
                        updateLocation({ x: prev.x - 1, y: prev.y })
                    )
                    break
                case 'ArrowRight':
                    setCurrentLocation((prev) =>
                        updateLocation({ x: prev.x + 1, y: prev.y })
                    )
                    break
            }
        },
        [grid, setCurrentLocation]
    )

    const currentItem = grid.length
        ? grid?.[currentLocation.y]?.[currentLocation.x]
        : {}

    const gridRowCount = gridSection.length
    const gridColumnCount = gridSection[0]?.length || 0

    return { handleKeyDown, grid, currentItem, gridRowCount, gridColumnCount }
}

export default useGridNavigation
