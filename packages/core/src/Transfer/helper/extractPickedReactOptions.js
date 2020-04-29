import { Children } from 'react'
import { findOption, findOptionIndex } from '../common'

/**
 * @param {Object} args
 * @param {ReactElement} args.reactOptions
 * @param {Option[]} args.selectedPlainOptions
 * @returns {ReactElement} React elements
 */
export const extractPickedReactOptions = ({
    reactOptions,
    selectedPlainOptions,
}) => {
    const pickedOptions = Children.toArray(reactOptions)
        .map(child => {
            const { props } = child
            const isSelected = !!findOption(selectedPlainOptions, props)

            return isSelected ? child : null
        })
        // We can ONLY do this because the reactOptions have keys
        .filter(child => !!child)

    pickedOptions.sort((left, right) => {
        const leftIndex = findOptionIndex(selectedPlainOptions, left.props)
        const rightIndex = findOptionIndex(selectedPlainOptions, right.props)

        if (leftIndex < rightIndex) return -1
        return 1
    })

    return pickedOptions
}
