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

/** Focuses the control after (or before) one of a row's controls, cycling. */
const cycleControls = (row: Element, from: HTMLElement, backwards: boolean) => {
    const controls = focusablesOf(row)
    const at = controls.indexOf(from)
    const step = backwards ? -1 : 1
    controls[(at + step + controls.length) % controls.length]?.focus()
}

/**
 * A key pressed inside a row's control: Escape and Tab stay in the row,
 * a move key returns focus to the container and is then the tree's.
 * Returns true when the key is done with.
 */
const keyInsideControl = (event: React.KeyboardEvent<HTMLElement>) => {
    const container = event.currentTarget
    const target = event.target as HTMLElement
    if (event.key === 'Escape') {
        event.preventDefault()
        container.focus()
        return true
    }
    // A control in the tab order, such as the roots retry, was not
    // entered from the tree: Tab leaves it as usual.
    const row = target.closest('[role="treeitem"]')
    if (event.key === 'Tab' && row && target.tabIndex < 0) {
        event.preventDefault()
        cycleControls(row, target, event.shiftKey)
        return true
    }
    if (!MOVES.has(event.key)) {
        return true
    }
    container.focus()
    return false
}

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
            if (
                event.target !== event.currentTarget &&
                keyInsideControl(event)
            ) {
                return
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
            const node =
                row?.kind === 'node' ? store.getNode(row.id) : undefined
            // Right opens a closed node, else steps into it; Left closes an
            // open node, else steps out to the parent.
            const stepRight = () => {
                if (!node || node.leaf) {
                    return undefined
                }
                if (!isOpen(node.id)) {
                    open(node.id)
                    return undefined
                }
                return focusChild()
            }
            const stepLeft = () => {
                if (node && isOpen(node.id)) {
                    close(node.id)
                    return undefined
                }
                return focusParent()
            }
            // Enter toggles a node; on any other row its control, the retry,
            // is its action. Shift+Enter moves into the first control.
            const enter = () => {
                const element = activeDescendantId
                    ? document.getElementById(activeDescendantId)
                    : null
                const control = element && focusablesOf(element)[0]
                if (event.shiftKey) {
                    control?.focus()
                } else if (node) {
                    if (!node.leaf) {
                        toggle(node.id)
                    }
                } else {
                    control?.click()
                }
            }
            const moves: Record<string, () => number | undefined> = {
                ArrowDown: focusNext,
                ArrowUp: focusPrevious,
                Home: focusFirst,
                End: focusLast,
                ArrowRight: stepRight,
                ArrowLeft: stepLeft,
            }
            if (event.key in moves) {
                moved(moves[event.key]())
            } else if (event.key === 'Enter') {
                event.preventDefault()
                enter()
            } else if (event.key === ' ') {
                // Reserved for selection; the page must not scroll.
                event.preventDefault()
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
