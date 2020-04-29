import { Children } from 'react'
import { getPlainOptionsFromReactOptions } from './getPlainOptionsFromReactOptions'
import { isOption } from '../common'

/**
 * @param {Object} args
 * @param {ReactElement} args.reactOptions
 * @param {string} args.filter
 * @param {bool} args.filterable
 * @param {Function} args.filterCallback
 * @returns {Object} React elements
 */
export const getSubsetByFilter = ({
    reactOptions,
    filter,
    filterable,
    filterCallback,
}) => {
    const options = getPlainOptionsFromReactOptions(reactOptions)

    const filtered = filterable ? filterCallback(options, filter) : options

    return Children.map(reactOptions, child => {
        if (!filterable) return child
        if (!filtered.find(option => isOption(option, child.props))) return null

        return child
    })
}
