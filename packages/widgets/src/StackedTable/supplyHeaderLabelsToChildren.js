import { Children, cloneElement } from 'react'

export const supplyHeaderLabelsToChildren = (headerLabels, children) => {
    return Children.map(children, child => {
        return cloneElement(child, { headerLabels })
    })
}
