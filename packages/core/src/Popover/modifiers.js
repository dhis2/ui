import { ARROW_SIZE } from './Arrow.js'

const BORDER_RADIUS = 4

const computeArrowPadding = () => {
    // pythagoras
    const diagonal = Math.sqrt(2 * Math.pow(ARROW_SIZE, 2))
    const overflowInPx = (diagonal - ARROW_SIZE) / 2
    const padding = BORDER_RADIUS + overflowInPx

    return Math.ceil(padding)
}

export const offset = {
    name: 'offset',
    options: {
        offset: [0, ARROW_SIZE],
    },
}

export const arrow = {
    name: 'arrow',
    options: {
        padding: computeArrowPadding(),
    },
}

export const hideArrowWhenDisplaced = {
    name: 'hideArrowWhenDisplaced',
    enabled: true,
    phase: 'main',
    fn: ({ state }) => {
        const halfArrow = ARROW_SIZE / 2
        const displacement = state.modifiersData.preventOverflow
        const referenceRect = state.rects.reference
        const shouldHideArrow =
            Math.abs(displacement.x) >= referenceRect.width + halfArrow ||
            Math.abs(displacement.y) >= referenceRect.height + halfArrow

        state.attributes.popper['data-popper-arrow-displaced'] = shouldHideArrow

        return state
    },
    requires: ['preventOverflow'],
}
