import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import { useCommandPaletteContext } from '../context/command-palette-context.js'
import { isSameArray } from '../utils/compareArrays.js'
import {
    DESKTOP_GRID_COLUMNS,
    HOME_VIEW,
    MIN_APPS_NUM,
    MOBILE_GRID_COLUMNS,
} from '../utils/constants.js'
import { useIsMobile } from './use-is-mobile.js'

const constructGrid = (items, columns) => {
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
    const gridItemsRef = useRef(gridItems)
    const listItemsRef = useRef(listItems)
    const { currentView, filter } = useCommandPaletteContext()

    const isMobile = useIsMobile(gridItems.length > 0)
    const [currentLocation, setCurrentLocation] = useState({ x: 0, y: 0 })
    const gridColumnCount = isMobile
        ? MOBILE_GRID_COLUMNS
        : DESKTOP_GRID_COLUMNS

    const gridSection = useMemo(
        () => constructGrid(gridItems.slice(0, MIN_APPS_NUM), gridColumnCount),
        [gridItems, gridColumnCount]
    )

    const grid = useMemo(
        () => [...gridSection, ...listItems.map((item) => [item])],
        [gridSection, listItems]
    )

    const handleKeyDown = useCallback(
        (event) => {
            const updateLocation = (location) => {
                if (grid?.length) {
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
                }

                return location
            }

            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault()
                    setCurrentLocation((prev) =>
                        updateLocation({ x: prev.x, y: prev.y - 1 })
                    )
                    break
                case 'ArrowDown':
                    event.preventDefault()
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

    useEffect(() => {
        if (gridItemsRef.current && listItemsRef.current) {
            const isSameGrid =
                isSameArray(gridItemsRef.current, gridItems) &&
                isSameArray(listItemsRef.current, listItems)

            if (isSameGrid) {
                return
            } else if (currentView === HOME_VIEW || filter) {
                setCurrentLocation({ x: 0, y: 0 })
            } else {
                setCurrentLocation({ x: 0, y: 1 })
            }
        }

        gridItemsRef.current = gridItems
        listItemsRef.current = listItems
    }, [currentView, filter, gridItems, listItems])

    const currentItem = grid?.[currentLocation.y]?.[currentLocation.x] || null

    const gridRowCount = gridSection.length

    return {
        currentItem,
        grid,
        gridRowCount,
        gridColumnCount,
        handleKeyDown,
    }
}

export default useGridNavigation
