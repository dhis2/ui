import { getBaseModifiers, PopperModifier } from '@dhis2-ui/popper'
import { ARROW_SIZE } from './arrow.tsx'

const BORDER_RADIUS = 4

interface PopperState {
    modifiersData: {
        preventOverflow: {
            x: number
            y: number
        }
    }
    rects: {
        reference: {
            width: number
            height: number
        }
    }
    attributes: {
        arrow?: Record<string, unknown>
    }
}

interface ResizeObserverOptions {
    observePopperResize?: boolean
    observeReferenceResize?: boolean
}

const computeArrowPadding = (): number => {
    // pythagoras
    const diagonal = Math.sqrt(2 * Math.pow(ARROW_SIZE, 2))
    const overflowInPx = (diagonal - ARROW_SIZE) / 2
    const padding = BORDER_RADIUS + overflowInPx

    return Math.ceil(padding)
}

const hideArrowWhenDisplaced = ({
    state,
}: {
    state: PopperState
}): PopperState => {
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

export const combineModifiers = (
    arrow: boolean,
    arrowElement: HTMLDivElement | null,
    resizeObservers: ResizeObserverOptions
): PopperModifier[] => {
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
            fn: hideArrowWhenDisplaced as unknown as PopperModifier['fn'],
            requires: ['preventOverflow'],
        },
    ] as PopperModifier[]
}
