import { colors, spacers } from '@dhis2/ui-constants'
import { useDraggable, useDroppable } from '@dnd-kit/core'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useCallback } from 'react'

/**
 * Wraps a rendered option to make it draggable and a drop target,
 * without touching the option's own markup.
 *
 * dnd-kit's accessibility `attributes` are deliberately not spread:
 * they would put `role="button"` and `tabIndex={0}` on every row
 * without any keyboard drag behavior behind them — the action buttons
 * remain the keyboard path.
 */
export const DraggableOption = ({
    children,
    side,
    value,
    index,
    disabled,
    dragging,
    dropPos,
}) => {
    const data = { side, type: 'option', value, index }
    const { setNodeRef: setDraggableRef, listeners } = useDraggable({
        id: value,
        data,
        disabled,
    })
    const { setNodeRef: setDroppableRef } = useDroppable({ id: value, data })
    const setNodeRef = useCallback(
        (node) => {
            setDraggableRef(node)
            setDroppableRef(node)
        },
        [setDraggableRef, setDroppableRef]
    )

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            className={cx({
                draggable: !disabled,
                dragging,
                dropBefore: dropPos === 'before',
                dropAfter: dropPos === 'after',
            })}
        >
            {children}

            <style jsx>{`
                div {
                    position: relative;
                }

                div:first-child {
                    margin-block-start: ${spacers.dp4};
                }

                div:last-child {
                    margin-block-end: ${spacers.dp4};
                }

                div.draggable {
                    cursor: grab;
                }

                div.dragging {
                    opacity: 0.4;
                }

                div.dropBefore::before,
                div.dropAfter::after {
                    content: '';
                    position: absolute;
                    inset-inline: 0;
                    height: 3px;
                    background: ${colors.teal500};
                    z-index: 1;
                    pointer-events: none;
                }

                div.dropBefore::before {
                    top: -2px;
                }

                div.dropAfter::after {
                    bottom: -2px;
                }
            `}</style>
        </div>
    )
}

DraggableOption.propTypes = {
    children: PropTypes.node.isRequired,
    index: PropTypes.number.isRequired,
    side: PropTypes.oneOf(['source', 'picked']).isRequired,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    dragging: PropTypes.bool,
    dropPos: PropTypes.oneOf(['before', 'after']),
}
