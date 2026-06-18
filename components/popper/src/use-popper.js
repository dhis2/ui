/* global globalThis */
import { createPopper as defaultCreatePopper } from '@popperjs/core'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { flushSync } from 'react-dom'

const EMPTY_MODIFIERS = []

const useIsomorphicLayoutEffect =
    typeof globalThis.window === 'undefined' ? useEffect : useLayoutEffect

const applyStylesOff = { name: 'applyStyles', enabled: false }

export const usePopper = (referenceElement, popperElement, options = {}) => {
    const {
        onFirstUpdate,
        placement = 'bottom',
        strategy = 'absolute',
        modifiers = EMPTY_MODIFIERS,
        createPopper = defaultCreatePopper,
    } = options

    const [state, setState] = useState({
        styles: {
            popper: { position: strategy, left: '0', top: '0' },
            arrow: { position: 'absolute' },
        },
        attributes: {},
    })

    const updateStateModifier = useMemo(
        () => ({
            name: 'updateState',
            enabled: true,
            phase: 'write',
            fn: ({ state: popperState }) => {
                const elementKeys = Object.keys(popperState.elements)
                const styles = Object.fromEntries(
                    elementKeys.map((k) => [k, popperState.styles[k] || {}])
                )
                const attributes = Object.fromEntries(
                    elementKeys.map((k) => [k, popperState.attributes[k]])
                )
                flushSync(() => {
                    setState({ styles, attributes })
                })
            },
            requires: ['computeStyles'],
        }),
        []
    )

    const popperOptions = useMemo(
        () => ({
            onFirstUpdate,
            placement,
            strategy,
            modifiers: [...modifiers, updateStateModifier, applyStylesOff],
        }),
        [onFirstUpdate, placement, strategy, modifiers, updateStateModifier]
    )

    const popperInstanceRef = useRef(null)

    useIsomorphicLayoutEffect(() => {
        if (popperInstanceRef.current) {
            popperInstanceRef.current.setOptions(popperOptions)
        }
    }, [popperOptions])

    useIsomorphicLayoutEffect(() => {
        if (referenceElement == null || popperElement == null) {
            return
        }
        const instance = createPopper(
            referenceElement,
            popperElement,
            popperOptions
        )
        popperInstanceRef.current = instance
        return () => {
            instance.destroy()
            popperInstanceRef.current = null
        }
    }, [referenceElement, popperElement, createPopper])

    return {
        state: popperInstanceRef.current?.state ?? null,
        styles: state.styles,
        attributes: state.attributes,
        update: popperInstanceRef.current?.update ?? null,
        forceUpdate: popperInstanceRef.current?.forceUpdate ?? null,
    }
}
