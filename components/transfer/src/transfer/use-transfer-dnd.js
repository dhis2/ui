import {
    PointerSensor,
    pointerWithin,
    rectIntersection,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import { useCallback, useRef, useState } from 'react'
import { addSourceOptionsOnDrop } from './add-source-options-on-drop.js'
import { getDraggedValues } from './get-dragged-values.js'
import { removeIndividualPickedOptions } from './remove-individual-picked-options.js'
import { reorderPickedOptionsOnDrop } from './reorder-picked-options-on-drop.js'
import { resolveDropTarget } from './resolve-drop-target.js'
import { resolvePositionalIndex } from './resolve-positional-index.js'

const isOptionCollision = (collision) =>
    collision.data?.droppableContainer?.data?.current?.type === 'option'

/* When the pointer is over an option it is necessarily also over that
 * option's list container — prefer the option so before/after
 * positions win over "append to container" */
const preferOptions = (collisions) => {
    const optionCollisions = collisions.filter(isOptionCollision)
    return optionCollisions.length ? optionCollisions : collisions
}

/*
 * List mutations only commit on drop, via `onChange`.
 *
 * The `PointerSensor`'s 6px activation distance keeps plain clicks
 * (highlighting, modifier-key modes, double-click detection) working
 * unchanged. The synthetic click after a completed drag is suppressed
 * by dnd-kit itself, not this file.
 */
export const useTransferDnd = ({
    selected,
    sourceOptions,
    pickedOptions,
    highlightedSourceOptions,
    highlightedPickedOptions,
    setHighlightedSourceOptions,
    setHighlightedPickedOptions,
    enableOrderChange,
    filterActivePicked,
    maxSelections,
    onChange,
    reorderScrollTargetRef,
}) => {
    const [activeDrag, setActiveDrag] = useState(null)
    const [dropTarget, setDropTarget] = useState(null)
    /* The fly-back drop animation returns the overlay to the origin
     * node, so it only makes sense when the option stays put (cancel or
     * no-op drop). On a committed move the origin no longer represents
     * where the option went, so the overlay fades in place instead. */
    const [flyBackOnDrop, setFlyBackOnDrop] = useState(true)
    /* Refs mirror the state for the dnd-kit callbacks: a drag can
     * start and move before the state-triggered re-render happens */
    const activeDragRef = useRef(null)
    const dropTargetRef = useRef(null)

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 6 } })
    )

    const collisionDetection = useCallback((args) => {
        const within = pointerWithin(args)
        return preferOptions(within.length ? within : rectIntersection(args))
    }, [])

    const updateDropTarget = (nextDropTarget) => {
        dropTargetRef.current = nextDropTarget
        setDropTarget(nextDropTarget)
    }

    const onDragStart = ({ active }) => {
        const { side, value } = active.data.current
        const [visibleOptions, highlightedOptions, setHighlightedOptions] =
            side === 'source'
                ? [
                      sourceOptions,
                      highlightedSourceOptions,
                      setHighlightedSourceOptions,
                  ]
                : [
                      pickedOptions,
                      highlightedPickedOptions,
                      setHighlightedPickedOptions,
                  ]

        const draggedValues = getDraggedValues({
            draggedValue: value,
            highlightedOptions,
            visibleOptions,
        })

        if (!highlightedOptions.includes(value)) {
            // Grabbing a non-highlighted option highlights it,
            // like a plain click would
            setHighlightedOptions([value])
        }

        const primaryOption = visibleOptions.find(
            (option) => option.value === draggedValues[0]
        )
        const nextActiveDrag = {
            side,
            values: draggedValues,
            label: primaryOption?.label,
            count: draggedValues.length,
        }
        activeDragRef.current = nextActiveDrag
        setActiveDrag(nextActiveDrag)
        setFlyBackOnDrop(true)
    }

    const onDragMove = ({ active, over, delta, activatorEvent }) => {
        const currentDrag = activeDragRef.current
        if (!currentDrag) {
            return
        }

        /* The translated rect is what dnd-kit's collision detection
         * uses, so unlike the raw pointer position it stays consistent
         * with `over.rect` while the lists auto-scroll during a drag */
        const translated = active.rect.current?.translated
        const dragY = translated
            ? translated.top + translated.height / 2
            : activatorEvent.clientY + delta.y

        const overData = over?.data.current
        updateDropTarget(
            resolveDropTarget({
                activeSide: currentDrag.side,
                overSide: overData?.side,
                overType: overData?.type,
                overValue: overData?.value,
                overIndex: overData?.index,
                overRect: over?.rect,
                dragY,
                draggedValues: currentDrag.values,
                enableOrderChange,
                filterActivePicked,
            })
        )
    }

    const finishDrag = () => {
        activeDragRef.current = null
        updateDropTarget(null)
        setActiveDrag(null)
    }

    const onDragEnd = () => {
        const currentDrag = activeDragRef.current
        const currentDropTarget = dropTargetRef.current

        if (currentDrag && currentDropTarget) {
            setFlyBackOnDrop(false)
            const { side, values: draggedValues } = currentDrag

            const positionalIndex = resolvePositionalIndex(
                currentDropTarget,
                selected
            )

            if (currentDropTarget.side === 'source') {
                // `draggedValues` is the picked highlight set to remove
                removeIndividualPickedOptions({
                    selected,
                    highlightedPickedOptions: draggedValues,
                    onChange,
                    setHighlightedPickedOptions,
                })
            } else if (side === 'source') {
                const changed = addSourceOptionsOnDrop({
                    selected,
                    draggedValues,
                    dropIndex: positionalIndex ?? undefined,
                    maxSelections,
                    onChange,
                    setHighlightedSourceOptions,
                })
                if (changed) {
                    reorderScrollTargetRef.current = draggedValues[0] ?? null
                }
            } else {
                const changed = reorderPickedOptionsOnDrop({
                    selected,
                    draggedValues,
                    dropIndex: positionalIndex ?? selected.length,
                    onChange,
                })
                if (changed) {
                    reorderScrollTargetRef.current = draggedValues[0] ?? null
                }
            }
        }

        finishDrag()
    }

    const onDragCancel = () => {
        finishDrag()
    }

    return {
        sensors,
        collisionDetection,
        activeDrag,
        flyBackOnDrop,
        dropTarget,
        onDragStart,
        onDragMove,
        onDragEnd,
        onDragCancel,
    }
}
