import { createContext } from 'react'

export interface TableContextValue {
    suppressZebraStriping?: boolean
}

export const TableContext = createContext<TableContextValue>({
    suppressZebraStriping: false,
})

export const { Consumer, Provider } = TableContext
