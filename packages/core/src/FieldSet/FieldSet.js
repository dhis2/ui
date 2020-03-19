import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {FieldSet.PropTypes} props
 * @returns {React.Component}
 * @example import { FieldSet } from @dhis2/ui-core
 * @see Live demo: {@link /demo/?path=/story/fieldset--default}
 */
const FieldSet = ({ className, children, dataTest }) => (
    <fieldset className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            fieldset {
                border: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </fieldset>
)

FieldSet.defaultProps = {
    dataTest: 'dhis2-uicore-fieldset',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
FieldSet.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { FieldSet }
