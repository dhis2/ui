import { colors } from '@dhis2/ui-constants'
import { Required } from '@dhis2/ui-required'
import PropTypes from 'prop-types'
import React from 'react'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Legend.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { Legend } from '@dhis2/ui-core'
 *
 * @see Live demo: {@link /demo/?path=/story/legend--default|Storybook}
 */
const Legend = ({ className, children, required, dataTest }) => (
    <legend className={className} data-test={dataTest}>
        {children}

        {required && <Required dataTest={`${dataTest}-required`} />}

        <style jsx>{`
            legend {
                font-size: 14px;
                line-height: 16px;
                color: ${colors.grey900};
            }
        `}</style>
    </legend>
)

Legend.defaultProps = {
    dataTest: 'dhis2-uicore-legend',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {boolean} [required]
 * @prop {string} [dataTest]
 */
Legend.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    /** Indicates the associated field set is required */
    required: PropTypes.bool,
}

export { Legend }
