import React, { useCallback, useEffect } from 'react'
import {
    useOuTree,
    useOuTreeActions,
    useOuTreeRegisterFocusTarget,
    useOuTreeRowElementId,
} from '../tree'

export interface OuTreeKeyboardOptions {
    /** The container: holds DOM focus and receives the keys. */
    scrollRef: React.RefObject<HTMLElement>
    scrollToIndex: (index: number) => void
    /** Where focus lands when the tree is entered without a focused row. */
    firstVisibleIndex: number | undefined
}

export interface OuTreeKeyboard {
    tabIndex: 0
    activeDescendantId: string | undefined
    onKeyDown: React.KeyboardEventHandler<HTMLElement>
    onFocus: React.FocusEventHandler<HTMLElement>
    onBlur: React.FocusEventHandler<HTMLElement>
}

const FOCUSABLE = 'button, a[href], input, select, textarea, [tabindex]'

const focusablesOf = (row: Element): HTMLElement[] =>
    Array.from(row.querySelectorAll<HTMLElement>(FOCUSABLE))

const MOVES = new Set(['ArrowDown', 'ArrowUp', 'Home', 'End'])

/**
 * The treeview keys for the container: the arrows, Home and End move the
 * focused row, Right and Left open, close and step between levels, Enter
 * toggles, Shift+Enter moves DOM focus into the focused row's first
 * control. Inside a row, Tab cycles its controls and Escape returns to
 * the tree; a move key returns to the tree and moves.
 */
export const useOuTreeKeyboard = ({
    scrollRef,
    scrollToIndex,
    firstVisibleIndex,
}: OuTreeKeyboardOptions): OuTreeKeyboard => {
    const { focusedKey, focusedIndex, getRow, isOpen } = useOuTree()
    const {
        focusRow,
        focusFirst,
        focusLast,
        focusNext,
        focusPrevious,
        focusParent,
        focusChild,
        open,
        close,
        toggle,
        setHasFocus,
        store,
    } = useOuTreeActions()
    const registerFocusTarget = useOuTreeRegisterFocusTarget()
    const elementId = useOuTreeRowElementId(focusedKey ?? '')
    const activeDescendantId = focusedKey === undefined ? undefined : elementId

    useEffect(() => {
        registerFocusTarget(scrollRef.current)
        return () => registerFocusTarget(null)
    }, [registerFocusTarget, scrollRef])

    const onFocus = useCallback<React.FocusEventHandler<HTMLElement>>(
        (event) => {
            setHasFocus(true)
            if (
                event.target === event.currentTarget &&
                focusedKey === undefined
            ) {
                focusRow(firstVisibleIndex ?? 0)
            }
        },
        [setHasFocus, focusedKey, focusRow, firstVisibleIndex]
    )

    const onBlur = useCallback<React.FocusEventHandler<HTMLElement>>(
        (event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
                setHasFocus(false)
            }
        },
        [setHasFocus]
    )

    const onKeyDown = useCallback<React.KeyboardEventHandler<HTMLElement>>(
        (event) => {
            const container = event.currentTarget
            if (event.target !== container) {
                // Inside a row's control.
                if (event.key === 'Escape') {
                    event.preventDefault()
                    container.focus()
                    return
                }
                const row = (event.target as Element).closest(
                    '[role="treeitem"]'
                )
                if (event.key === 'Tab' && row) {
                    event.preventDefault()
                    const controls = focusablesOf(row)
                    const at = controls.indexOf(event.target as HTMLElement)
                    const step = event.shiftKey ? -1 : 1
                    controls[
                        (at + step + controls.length) % controls.length
                    ]?.focus()
                    return
                }
                if (!MOVES.has(event.key)) {
                    return
                }
                container.focus()
            }

            const moved = (index: number | undefined) => {
                event.preventDefault()
                if (index !== undefined) {
                    scrollToIndex(index)
                }
            }
            const row =
                focusedIndex === undefined ? undefined : getRow(focusedIndex)
            const node =
                row?.kind === 'node' ? store.getNode(row.id) : undefined
            switch (event.key) {
                case 'ArrowDown':
                    return moved(focusNext())
                case 'ArrowUp':
                    return moved(focusPrevious())
                case 'Home':
                    return moved(focusFirst())
                case 'End':
                    return moved(focusLast())
                case 'ArrowRight':
                    if (node && !node.leaf && !isOpen(node.id)) {
                        event.preventDefault()
                        open(node.id)
                        return
                    }
                    return moved(node && !node.leaf ? focusChild() : undefined)
                case 'ArrowLeft':
                    if (node && isOpen(node.id)) {
                        event.preventDefault()
                        close(node.id)
                        return
                    }
                    return moved(focusParent())
                case 'Enter':
                    event.preventDefault()
                    if (event.shiftKey) {
                        const element = activeDescendantId
                            ? document.getElementById(activeDescendantId)
                            : null
                        if (element) {
                            focusablesOf(element)[0]?.focus()
                        }
                        return
                    }
                    if (node && !node.leaf) {
                        toggle(node.id)
                    }
                    return
                case ' ':
                    // Reserved for selection; the page must not scroll.
                    event.preventDefault()
                    return
                default:
                    return
            }
        },
        [
            focusedIndex,
            getRow,
            store,
            isOpen,
            open,
            close,
            toggle,
            focusFirst,
            focusLast,
            focusNext,
            focusPrevious,
            focusParent,
            focusChild,
            scrollToIndex,
            activeDescendantId,
        ]
    )

    return { tabIndex: 0, activeDescendantId, onKeyDown, onFocus, onBlur }
}
