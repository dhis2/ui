import {
    arrow as floatingArrow,
    flip,
    offset,
    shift,
} from '@floating-ui/react-dom'
import { ARROW_SIZE } from './arrow.js'

const BORDER_RADIUS = 4

const computeArrowPadding = () => {
    const diagonal = Math.sqrt(2 * Math.pow(ARROW_SIZE, 2))
    const overflowInPx = (diagonal - ARROW_SIZE) / 2
    return Math.ceil(BORDER_RADIUS + overflowInPx)
}

export const hideArrowWhenDisplaced = {
    name: 'hideArrowWhenDisplaced',
    fn({ middlewareData, rects }) {
        const halfArrow = ARROW_SIZE / 2
        const shiftData = middlewareData.shift
        if (!shiftData) {
            return { data: { hidden: false } }
        }
        const hidden =
            Math.abs(shiftData.x) >= rects.reference.width + halfArrow ||
            Math.abs(shiftData.y) >= rects.reference.height + halfArrow
        return { data: { hidden } }
    },
}

export const combineMiddleware = (showArrow, arrowElement) => {
    if (!showArrow) {
        return [
            flip({ rootBoundary: 'document' }),
            shift({ rootBoundary: 'document' }),
        ]
    }
    return [
        offset(ARROW_SIZE),
        flip({ rootBoundary: 'document' }),
        shift({ rootBoundary: 'document' }),
        floatingArrow({
            element: arrowElement,
            padding: computeArrowPadding(),
        }),
        hideArrowWhenDisplaced,
    ]
}
