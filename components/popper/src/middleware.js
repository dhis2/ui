import { flip, shift } from '@floating-ui/react-dom'

export const getBaseMiddleware = () => [
    flip({ rootBoundary: 'document' }),
    shift({ rootBoundary: 'document', crossAxis: true }),
]
