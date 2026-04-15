import { Children, cloneElement, ReactElement } from 'react'

export const addColNumToChildren = (children: React.ReactNode) => {
    let curCol = 0

    return Children.map(children, (child) => {
        const element = child as ReactElement<{
            column?: number
            colSpan?: string
        }>
        const column = element.props.column || curCol
        const colSpan = element.props.colSpan
            ? parseInt(element.props.colSpan, 10)
            : 1

        curCol += colSpan

        return cloneElement(element, { column })
    })
}
