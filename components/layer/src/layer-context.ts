import { createContext } from 'react'

export interface LayerContextValue {
    node: HTMLElement
    level: number
}

export const LayerContext = createContext<LayerContextValue>({
    node: document.body,
    level: 0,
})
export const { Provider, Consumer } = LayerContext
