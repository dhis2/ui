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
    fn({ rects, x, y, placement }) {
        const popperTop = y
        const popperBottom = y + rects.floating.height
        const popperLeft = x
        const popperRight = x + rects.floating.width
        const refTop = rects.reference.y
        const refBottom = rects.reference.y + rects.reference.height
        const refLeft = rects.reference.x
        const refRight = rects.reference.x + rects.reference.width

        const side = placement.split('-')[0]
        let hidden = false
        if (side === 'top') {
            hidden = popperBottom > refBottom
        } else if (side === 'bottom') {
            hidden = popperTop < refTop
        } else if (side === 'left') {
            hidden = popperRight > refRight
        } else if (side === 'right') {
            hidden = popperLeft < refLeft
        }
        return { data: { hidden } }
    },
}

export const combineMiddleware = (showArrow, arrowElement) => {
    const flipMiddleware = flip({
        boundary: document.body,
        fallbackStrategy: 'initialPlacement',
    })
    const shiftMiddleware = shift({
        boundary: document.body,
        crossAxis: true,
    })
    if (!showArrow) {
        return [flipMiddleware, shiftMiddleware]
    }
    return [
        offset(ARROW_SIZE),
        flipMiddleware,
        shiftMiddleware,
        floatingArrow({
            element: arrowElement,
            padding: computeArrowPadding(),
        }),
        hideArrowWhenDisplaced,
    ]
}
