import { flip, shift } from '@floating-ui/react-dom'

export const getBaseMiddleware = () => [
    shift({ rootBoundary: 'document' }),
    flip({ rootBoundary: 'document' }),
]
