import { Children } from 'react'
import { findOption } from '../common'

/**
 * @param {ReactElement} reactOptions
 * @param {Option[]} plainOptions
 * @returns {Object} React elements
 */
export const filterOutOptions = (reactOptions, plainOptions) => {
    return Children.map(reactOptions, child =>
        findOption(plainOptions, child.props) ? null : child
    )
}
