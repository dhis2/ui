import { Children, cloneElement, ReactElement } from 'react'

export const supplyHeaderLabelsToChildren = (
    headerLabels: string[],
    children: React.ReactNode
) => {
    return Children.map(children, (child) => {
        return cloneElement(
            child as ReactElement<{ headerLabels?: string[] }>,
            {
                headerLabels,
            }
        )
    })
}
