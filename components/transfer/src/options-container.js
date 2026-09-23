import { colors } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import { useDroppable } from '@dnd-kit/core'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback, useRef } from 'react'
import { DraggableOption } from './draggable-option.js'
import { EndIntersectionDetector } from './end-intersection-detector.js'
import { useOptionsKeyMonitor } from './transfer/use-options-key-monitor.js'

export const OptionsContainer = ({
    allOptionsKey,
    dataTest,
    emptyComponent,
    onEndReached,
    getOptionClickHandlers,
    highlightedOptions,
    loading,
    renderOption,
    options,
    selected = false,
    selectionHandler,
    toggleHighlightedOption,
    activeDragSide,
    activeDragValues,
    draggingDisabled,
    dropTarget,
}) => {
    const side = selected ? 'picked' : 'source'
    const scrollBoxRef = useRef(null)
    const listRef = useRef(null)
    useOptionsKeyMonitor({
        scrollBoxRef,
        listRef,
        allOptionsKey,
        onEndReached,
    })

    const { setNodeRef: setContainerDroppableRef } = useDroppable({
        id: `${side}:container`,
        data: { side, type: 'container' },
    })
    const setContainerRef = useCallback(
        (node) => {
            scrollBoxRef.current = node
            setContainerDroppableRef(node)
        },
        [setContainerDroppableRef]
    )

    /* Only highlight the whole list for cross-list transfers. When
     * reordering within the same list, the insertion line is the
     * drop indicator. */
    const isReorder = activeDragSide === side
    const dropActive = dropTarget?.side === side && !isReorder

    /* Matched by index rather than by `dropTarget.value`: at the exact
     * pixel boundary between two adjacent options, dnd-kit's collision
     * detection can flip `over` between them, resolving to "after the
     * previous option" or "before the next option" interchangeably.
     * Both resolve to the same insertion index, so keying off the index
     * keeps the rendered indicator stable instead of jumping between
     * the two options' edges. */
    let positionalDropIndex = null
    if (side === 'picked' && dropTarget?.side === 'picked') {
        if (dropTarget.pos === 'before' || dropTarget.pos === 'after') {
            positionalDropIndex = dropTarget.index
        } else if (dropTarget.pos === 'end' && isReorder) {
            // No container highlight while reordering, so show the
            // line after the last option when hovering empty space
            positionalDropIndex = options.length
        }
    }

    return (
        <div
            className={cx('optionsContainer', {
                dropTarget: dropActive,
            })}
        >
            {loading && (
                <div className="loading">
                    <CircularLoader />
                </div>
            )}

            <div
                className={cx('container', {
                    dropTarget: dropActive,
                })}
                data-test={dataTest}
                ref={setContainerRef}
            >
                <div className="content-container" ref={listRef}>
                    {!options.length && emptyComponent}
                    {options.map((option, index) => {
                        const highlighted = !!highlightedOptions.find(
                            (highlightedSourceOption) =>
                                highlightedSourceOption === option.value
                        )

                        let dropPos = null
                        if (positionalDropIndex === index) {
                            dropPos = 'before'
                        } else if (
                            positionalDropIndex === options.length &&
                            index === options.length - 1
                        ) {
                            dropPos = 'after'
                        }

                        return (
                            <DraggableOption
                                key={option.value}
                                side={side}
                                value={option.value}
                                index={index}
                                disabled={option.disabled || draggingDisabled}
                                dragging={
                                    !!activeDragValues &&
                                    activeDragValues.includes(option.value)
                                }
                                dropPos={dropPos}
                            >
                                {renderOption({
                                    ...option,
                                    ...getOptionClickHandlers(
                                        option,
                                        selectionHandler,
                                        toggleHighlightedOption
                                    ),
                                    highlighted,
                                    selected,
                                })}
                            </DraggableOption>
                        )
                    })}

                    {onEndReached && (
                        <EndIntersectionDetector
                            dataTest={`${dataTest}-endintersectiondetector`}
                            rootRef={scrollBoxRef}
                            onEndReached={onEndReached}
                        />
                    )}
                </div>
            </div>

            <style jsx>{`
                /* min-height instead of overflow: hidden lets the list
                 * shrink and scroll without clipping the drop outline,
                 * which sits 1px outside this box */
                .optionsContainer {
                    flex-grow: 1;
                    position: relative;
                    min-height: 0;
                }

                .container {
                    overflow-y: auto;
                    height: 100%;
                }

                /* Pushed out 1px so the outline covers the grey line on
                 * every side (the panel border, or the header/footer
                 * divider) instead of doubling up next to it. Corners
                 * only round where they meet the panel's rounded
                 * corners, i.e. when there's no header/footer. */
                .optionsContainer.dropTarget::after {
                    content: '';
                    position: absolute;
                    inset: -1px;
                    border-radius: 0;
                    box-shadow: inset 0 0 0 1px ${colors.grey600};
                    pointer-events: none;
                    z-index: 3;
                }

                .optionsContainer.dropTarget:first-child::after {
                    border-start-start-radius: 3px;
                    border-start-end-radius: 3px;
                }

                .optionsContainer.dropTarget:last-child::after {
                    border-end-start-radius: 3px;
                    border-end-end-radius: 3px;
                }

                .loading {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    inset-inline-start: 0;
                }

                .content-container {
                    z-index: 1;
                    position: relative;
                }

                .loading + .container .content-container {
                    filter: blur(2px);
                }
            `}</style>
        </div>
    )
}

OptionsContainer.propTypes = {
    allOptionsKey: PropTypes.string.isRequired,
    dataTest: PropTypes.string.isRequired,
    getOptionClickHandlers: PropTypes.func.isRequired,
    activeDragSide: PropTypes.oneOf(['source', 'picked']),
    activeDragValues: PropTypes.arrayOf(PropTypes.string),
    draggingDisabled: PropTypes.bool,
    dropTarget: PropTypes.shape({
        pos: PropTypes.oneOf(['before', 'after', 'end', 'container'])
            .isRequired,
        side: PropTypes.oneOf(['source', 'picked']).isRequired,
        index: PropTypes.number,
        value: PropTypes.string,
    }),
    emptyComponent: PropTypes.node,
    highlightedOptions: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
    renderOption: PropTypes.func,
    selected: PropTypes.bool,
    selectionHandler: PropTypes.func,
    toggleHighlightedOption: PropTypes.func,
    onEndReached: PropTypes.func,
}
