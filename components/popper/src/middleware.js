import { flip, shift } from '@floating-ui/react-dom'

export const getBaseMiddleware = () => [
    flip({ boundary: document.body, fallbackStrategy: 'initialPlacement' }),
    shift({ boundary: document.body, crossAxis: true }),
]
