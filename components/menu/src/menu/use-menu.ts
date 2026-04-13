import React, { useRef, useState, useEffect, useCallback } from 'react'
import { getFocusableItemsIndices } from './helpers.ts'

export const useMenuNavigation = (children: React.ReactNode) => {
    const menuRef = useRef<HTMLUListElement>(null)
    const [focusableItemsIndices, setFocusableItemsIndices] = useState<
        number[] | null
    >(null)
    const [activeItemIndex, setActiveItemIndex] = useState(-1)

    // Initializes the indices for focusable items
    // focusable items have the role of menuitem || menuitemcheckbox || menuitemradio
    useEffect(() => {
        if (menuRef) {
            const menuItems = Array.from(menuRef.current!.children) as Element[]
            const itemsIndices = getFocusableItemsIndices(menuItems)
            setFocusableItemsIndices(itemsIndices)
        }
    }, [children])

    // Focus the active menu child
    useEffect(() => {
        if (menuRef) {
            if (focusableItemsIndices?.length && activeItemIndex > -1) {
                const currentIndex = focusableItemsIndices[activeItemIndex]
                ;(
                    menuRef.current!.children[currentIndex] as HTMLElement
                ).focus()
            }
        }
    }, [activeItemIndex, focusableItemsIndices])

    // Navigate through focusable children using arrow keys
    // Trigger actionable items
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            const totalFocusablePositions = focusableItemsIndices?.length
            if (totalFocusablePositions) {
                const lastIndex = totalFocusablePositions - 1

                switch (event.key) {
                    case 'ArrowUp':
                        event.preventDefault()
                        setActiveItemIndex(
                            activeItemIndex > 0
                                ? activeItemIndex - 1
                                : lastIndex
                        )
                        break
                    case 'ArrowDown':
                        event.preventDefault()
                        setActiveItemIndex(
                            activeItemIndex >= lastIndex
                                ? 0
                                : activeItemIndex + 1
                        )
                        break
                    case 'Enter':
                    case ' ':
                        if ((event.target as HTMLElement).nodeName === 'LI') {
                            event.preventDefault()
                            ;(
                                (event.target as HTMLElement)
                                    .children?.[0] as HTMLElement
                            )?.click()
                        }
                        break
                    default:
                        break
                }
            }
        },
        [activeItemIndex, focusableItemsIndices?.length]
    )

    // Event listeners for menu focus and key handling
    useEffect(() => {
        if (!menuRef) {
            return
        }

        const menu = menuRef.current!

        // Focus the first menu item when the menu receives focus
        const handleFocus = (event: FocusEvent) => {
            if (event.target === menuRef.current) {
                const firstItemIndex = focusableItemsIndices?.[0]
                firstItemIndex &&
                    (
                        menuRef.current!.children[firstItemIndex] as HTMLElement
                    ).focus()
                setActiveItemIndex(0)
            }
        }

        menu.addEventListener('focus', handleFocus)
        menu.addEventListener('keydown', handleKeyDown)

        return () => {
            menu.removeEventListener('focus', handleFocus)
            menu.removeEventListener('keydown', handleKeyDown)
        }
    }, [activeItemIndex, focusableItemsIndices, handleKeyDown])

    return {
        menuRef,
        focusedIndex: focusableItemsIndices?.[activeItemIndex],
    }
}
