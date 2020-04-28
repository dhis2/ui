import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {ToggleGroup.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { ToggleGroup } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/togglegroup--default|Storybook}
 */
const ToggleGroup = ({ children, className, dataTest }) => (
    <div data-test={dataTest} className={className}>
        {children}
    </div>
)

ToggleGroup.defaultProps = {
    dataTest: 'dhis2-uicore-togglegroup',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @private
 *
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {boolean} [dense]
 * @prop {string} [dataTest]
 */
ToggleGroup.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { ToggleGroup }
