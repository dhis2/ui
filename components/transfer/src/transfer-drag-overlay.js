import { colors, elevations, spacers } from '@dhis2/ui-constants'
import { DragOverlay } from '@dnd-kit/core'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'

const flyBackDropAnimation = {
    duration: 250,
    easing: 'ease',
    keyframes: ({ transform }) => [
        {
            opacity: 1,
            transform: `translate3d(${transform.initial.x}px, ${transform.initial.y}px, 0)`,
        },
        {
            opacity: 0,
            transform: `translate3d(${transform.final.x}px, ${transform.final.y}px, 0)`,
        },
    ],
}

const fadeDropAnimation = {
    duration: 150,
    easing: 'ease',
    keyframes: ({ transform }) => [
        {
            opacity: 1,
            transform: `translate3d(${transform.initial.x}px, ${transform.initial.y}px, 0)`,
        },
        {
            opacity: 0,
            transform: `translate3d(${transform.initial.x}px, ${transform.initial.y}px, 0)`,
        },
    ],
}

export const TransferDragOverlay = ({ activeDrag, flyBackOnDrop = true }) => {
    const prefersReducedMotion = useMemo(
        () =>
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ??
            false,
        []
    )

    return (
        <DragOverlay
            dropAnimation={
                prefersReducedMotion
                    ? null
                    : flyBackOnDrop
                    ? flyBackDropAnimation
                    : fadeDropAnimation
            }
        >
            {activeDrag ? (
                <div className="card">
                    <span className="label">{activeDrag.label}</span>

                    {activeDrag.count > 1 && (
                        <span className="badge">{activeDrag.count}</span>
                    )}

                    <style jsx>{`
                        .card {
                            position: relative;
                            max-width: 320px;
                            font-size: 14px;
                            line-height: 16px;
                            padding: 4px 8px;
                            color: ${colors.white};
                            background: ${colors.teal700};
                            border-radius: 3px;
                            box-shadow: ${elevations.e300};
                            cursor: grabbing;
                            user-select: none;
                        }

                        .label {
                            display: block;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }

                        .badge {
                            position: absolute;
                            top: -${spacers.dp8};
                            inset-inline-end: -${spacers.dp8};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 13px;
                            line-height: 15px;
                            font-weight: 600;
                            min-width: 18px;
                            max-width: 80px;
                            height: 18px;
                            padding: 0 ${spacers.dp4};
                            color: ${colors.grey900};
                            background: ${colors.grey200};
                            border-radius: ${spacers.dp12};
                            box-shadow: ${elevations.e100};
                        }
                    `}</style>
                </div>
            ) : null}
        </DragOverlay>
    )
}

TransferDragOverlay.propTypes = {
    activeDrag: PropTypes.shape({
        count: PropTypes.number.isRequired,
        label: PropTypes.node,
    }),
    flyBackOnDrop: PropTypes.bool,
}
