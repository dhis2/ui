import { flip, shift } from '@floating-ui/react-dom'

const sharedDetectOverflowOptions = {
    boundary: document.body,
    rootBoundary: 'document',
}

export const getBaseMiddleware = () => [
    flip({
        ...sharedDetectOverflowOptions,
        fallbackStrategy: 'initialPlacement',
    }),
    shift({ ...sharedDetectOverflowOptions, crossAxis: true }),
]
