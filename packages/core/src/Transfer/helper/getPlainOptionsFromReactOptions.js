import '../types.js'
import { Children } from 'react'
import { getPlainOptionFromReactOption } from './getPlainOptionFromReactOption'

/**
 * @param {ReactElement} reactOptions
 * @returns {Option[]} plainOption
 */
export const getPlainOptionsFromReactOptions = reactOptions =>
    Children.toArray(reactOptions).map(getPlainOptionFromReactOption)
