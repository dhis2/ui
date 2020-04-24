import { Children, cloneElement } from 'react'

export const addColNumToChildren = children => {
    let curCol = 0

    return Children.map(children, child => {
        const column = child.props.column || curCol
        const colSpan = child.props.colSpan
            ? parseInt(child.props.colSpan, 10)
            : 1

        curCol += colSpan

        return cloneElement(child, { column })
    })
}
