import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Field.PropTypes} props
 * @returns {React.Component}
 * @example import { Field } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/field--default|Storybook}
 */
const Field = ({ children, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            div {
                margin: 0 0 ${spacers.dp16};
            }
        `}</style>
    </div>
)

Field.defaultProps = {
    dataTest: 'dhis2-uicore-field',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
Field.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { Field }
