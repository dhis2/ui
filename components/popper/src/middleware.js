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
export const getAutoPlacementMiddleware = (placement) => {
    const alignment =
        placement === 'auto-start'
            ? 'start'
            : placement === 'auto-end'
            ? 'end'
            : undefined
    return [
        autoPlacement({ ...sharedDetectOverflowOptions, alignment }),
        getBaseShift(),
    ]
}
