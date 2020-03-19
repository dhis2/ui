import React from 'react'
import propTypes from '@dhis2/prop-types'

import { colors, spacers } from '@dhis2/ui-constants'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {Divider.PropTypes} props
 * @returns {React.Component}
 * @example import { Divider } from @dhis2/ui-core
 */
const Divider = ({ className, dataTest, dense, margin }) => (
    <div className={className} data-test={dataTest}>
        <style jsx>{`
            div {
                display: inline-block;
                width: 100%;
                height: 1px;
                background-color: ${colors.grey300};
            }
        `}</style>
        <style jsx>{`
            div {
                margin: ${dense ? `${spacers.dp4} 0` : margin};
            }
        `}</style>
    </div>
)

Divider.defaultProps = {
    dataTest: 'dhis2-uicore-divider',
    margin: `${spacers.dp8} 0`,
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {string} [className]
 * @prop {string} [dataTest]
 * @prop {bool} [dense]
 * @prop {string} [margin="${spacers.dp8} 0"] - DEPRECATED: A CSS shorthand declaration for margin. If margin and dense are used at the same time, dense has precedence.
 */
Divider.propTypes = {
    className: propTypes.string,
    dataTest: propTypes.string,
    dense: propTypes.bool,
    margin: propTypes.string,
}

export { Divider }
