import { autoPlacement, flip, shift } from '@floating-ui/react-dom'

const sharedDetectOverflowOptions = {
    boundary: document.body,
    rootBoundary: 'document',
}

const getBaseShift = () =>
    shift({ ...sharedDetectOverflowOptions, crossAxis: true })

export const getBaseMiddleware = () => [
    flip({
        ...sharedDetectOverflowOptions,
        fallbackStrategy: 'initialPlacement',
    }),
    getBaseShift(),
]

/**
 * Used when the requested placement is "auto" / "auto-start" / "auto-end".
 * Floating UI's autoPlacement() picks the placement with most available
 * space — equivalent to popper.js v2's auto* placement values. It
 * conflicts with flip(), so this composition replaces flip with
 * autoPlacement rather than adding it on top.
 */
const AUTO_PLACEMENT_ALIGNMENT = {
    'auto-start': 'start',
    'auto-end': 'end',
}

export const getAutoPlacementMiddleware = (placement) => [
    autoPlacement({
        ...sharedDetectOverflowOptions,
        alignment: AUTO_PLACEMENT_ALIGNMENT[placement],
    }),
    getBaseShift(),
]
