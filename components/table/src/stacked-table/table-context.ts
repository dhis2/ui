import { createContext } from 'react'

export interface TableContextValue {
    headerLabels: string[]
}

export const TableContext = createContext<TableContextValue>({
    headerLabels: [],
})
export const { Provider, Consumer } = TableContext
