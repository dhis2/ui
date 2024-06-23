import { useCallback, useRef, useState, useEffect } from 'react'
import { filterValidMenuItemsIndices } from './helpers.js'

export const useMenuNavigation = (children) => {
    const menuRef = useRef(null)
    const menuItemsRef = useRef(null)
    const [focusableItemsIndices, setFocusableItemsIndices] = useState(null)
    const [activeItemIndex, setActiveItemIndex] = useState(-1)

    // Focus the first menu item when the menu receives focus
    const handleFocus = useCallback(
        (event) => {
            if (event.target === menuRef?.current) {
                const i = focusableItemsIndices?.[0]
                menuRef.current.children[i].focus()
                setActiveItemIndex(0)
            }
        },
        [focusableItemsIndices]
    )

    // Trigger actionable menu item
    const handleAction = (event) => {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault()
                // UI library MenuItem
                if (event.target.nodeName === 'LI') {
                    event.target.children[0].click()
                } else {
                    event.target.click()
                }
                break
            default:
                break
        }
    }

    // Navigate through focusable children using arrow keys
    const handleNavigation = useCallback(
        (event) => {
            const totalFocusablePositions = focusableItemsIndices?.length
            switch (event.key) {
                case 'ArrowUp':
                    event.preventDefault()
                    if (activeItemIndex > 0) {
                        setActiveItemIndex(activeItemIndex - 1)
                    } else {
                        setActiveItemIndex(totalFocusablePositions - 1)
                    }
                    break
                case 'ArrowDown':
                    event.preventDefault()
                    if (activeItemIndex >= totalFocusablePositions - 1) {
                        setActiveItemIndex(0)
                    } else {
                        setActiveItemIndex(activeItemIndex + 1)
                    }
                    break
                default:
                    break
            }
        },
        [activeItemIndex, focusableItemsIndices]
    )

    // Keydown: handleNavigation and handleAction
    const handleKeyDown = useCallback(
        (event) => {
            handleAction(event)
            if (menuRef?.current?.children.length > 1) {
                handleNavigation(event)
            }
        },
        [handleNavigation]
    )

    // Initializes the indices for focusable items
    useEffect(() => {
        if (!menuRef) {
            return
        }

        const menu = menuRef.current
        menuItemsRef.current = Array.from(menu.children)
        const itemsIndices = filterValidMenuItemsIndices(
            Array.from(menu.children)
        )
        setFocusableItemsIndices(itemsIndices)
    }, [children])

    // Focus the active menu child
    useEffect(() => {
        if (
            focusableItemsIndices &&
            menuItemsRef?.current &&
            activeItemIndex > -1
        ) {
            const currentIndex = focusableItemsIndices[activeItemIndex]
            menuItemsRef.current[currentIndex].focus()
        }
    }, [activeItemIndex, focusableItemsIndices])

    // Event listeners for menu focus and key handling
    useEffect(() => {
        if (!menuRef) {
            return
        }

        const menu = menuRef.current
        menu.addEventListener('focus', handleFocus)
        menu.addEventListener('keydown', handleKeyDown)

        return () => {
            menu.removeEventListener('focus', handleFocus)
            menu.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleFocus, handleKeyDown])

    return {
        menuRef,
        focusedIndex: focusableItemsIndices?.[activeItemIndex],
    }
}
