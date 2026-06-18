import { flip, shift } from '@floating-ui/react-dom'

export const getBaseMiddleware = () => [
    flip({ rootBoundary: 'document', boundary: document.body }),
    shift({
        rootBoundary: 'document',
        boundary: document.body,
        crossAxis: true,
    }),
]
