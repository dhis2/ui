import { getBaseModifiers } from '../Popper/modifiers.js'
import { ARROW_SIZE } from './Arrow.js'

const BORDER_RADIUS = 4

const computeArrowPadding = () => {
    // pythagoras
    const diagonal = Math.sqrt(2 * Math.pow(ARROW_SIZE, 2))
    const overflowInPx = (diagonal - ARROW_SIZE) / 2
    const padding = BORDER_RADIUS + overflowInPx

    return Math.ceil(padding)
}

const hideArrowWhenDisplaced = ({ state }) => {
    const halfArrow = ARROW_SIZE / 2
    const displacement = state.modifiersData.preventOverflow
    const referenceRect = state.rects.reference
    const shouldHideArrow =
        Math.abs(displacement.x) >= referenceRect.width + halfArrow ||
        Math.abs(displacement.y) >= referenceRect.height + halfArrow

    if (typeof state.attributes.arrow !== 'object') {
        state.attributes.arrow = {}
    }

    state.attributes.arrow['data-arrow-hidden'] = shouldHideArrow

    return state
}

export const combineModifiers = (arrow, arrowElement, resizeObservers) => {
    const baseModifiers = getBaseModifiers(resizeObservers)

    if (!arrow) {
        return baseModifiers
    }

    return [
        ...baseModifiers,
        {
            name: 'offset',
            options: {
                offset: [0, ARROW_SIZE],
            },
        },
        {
            name: 'arrow',
            options: {
                padding: computeArrowPadding(),
                element: arrowElement,
            },
        },
        {
            name: 'hideArrowWhenDisplaced',
            enabled: true,
            phase: 'main',
            fn: hideArrowWhenDisplaced,
            requires: ['preventOverflow'],
        },
    ]
}
