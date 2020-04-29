import { createElement } from 'react'

export const createChildren = (...childElements) => {
    const div = createElement('div', {}, childElements)
    const { props } = div
    const { children } = props

    return children
}
