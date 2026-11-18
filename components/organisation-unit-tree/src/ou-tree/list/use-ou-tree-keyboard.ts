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
    activeDescendantId: string | undefined
    onKeyDown: React.KeyboardEventHandler<HTMLElement>
    onFocus: React.FocusEventHandler<HTMLElement>
    onBlur: React.FocusEventHandler<HTMLElement>
}

const FOCUSABLE = 'button, a[href], input, select, textarea, [tabindex]'

const focusablesOf = (row: Element): HTMLElement[] =>
    Array.from(row.querySelectorAll<HTMLElement>(FOCUSABLE))

const MOVES = new Set([
    'ArrowDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End',
])

/**
 * The treeview keys for the container: the arrows, Home and End move the
 * focused row, Right and Left open, close and step between levels, Enter
 * toggles a node and clicks the first control of any other row,
 * Shift+Enter moves DOM focus into the focused row's first control.
 * Inside a row reached that way, Tab cycles its controls and Escape
 * returns to the tree; a move key returns to the tree and moves. Without
 * a focused row, a move key starts at the first visible one.
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
                // A control in the tab order, such as the roots retry,
                // was not entered from the tree: Tab leaves it as usual.
                const entered = (event.target as HTMLElement).tabIndex < 0
                if (event.key === 'Tab' && row && entered) {
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
            if (focusedIndex === undefined) {
                if (MOVES.has(event.key)) {
                    moved(focusRow(firstVisibleIndex ?? 0))
                }
                return
            }
            const row = getRow(focusedIndex)
            const element = activeDescendantId
                ? document.getElementById(activeDescendantId)
                : null
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
                        if (element) {
                            focusablesOf(element)[0]?.focus()
                        }
                        return
                    }
                    if (node) {
                        if (!node.leaf) {
                            toggle(node.id)
                        }
                        return
                    }
                    // Any other row: its control, the retry, is its action.
                    if (element) {
                        focusablesOf(element)[0]?.click()
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
            firstVisibleIndex,
            focusRow,
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

    return { activeDescendantId, onKeyDown, onFocus, onBlur }
}
