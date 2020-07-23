import { createContext } from 'react'

export const TableContext = createContext({
    suppressZebraStriping: false,
})

export const { Consumer, Provider } = TableContext
