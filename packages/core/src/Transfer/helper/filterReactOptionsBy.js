import { Children } from 'react'
import { getPlainOptionFromReactOption } from './getPlainOptionFromReactOption'

export const filterReactOptionsBy = (callback, reactOptions) => {
    return Children.map(reactOptions, child => {
        const plainOption = getPlainOptionFromReactOption(child)
        const keep = callback(plainOption)

        if (!keep) return null
        return child
    })
}
