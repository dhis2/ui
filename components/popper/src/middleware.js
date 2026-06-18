import { flip, shift } from '@floating-ui/react-dom'

export const getBaseMiddleware = () => [flip(), shift({ crossAxis: true })]
