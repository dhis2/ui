import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {ModalContent.PropTypes} props
 * @returns {React.Component}
 */
export const ModalContent = ({ children, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 1;
                margin: ${spacers.dp24} 0;
                padding: 0 ${spacers.dp24};
                overflow-y: auto;
            }
        `}</style>
    </div>
)

ModalContent.defaultProps = {
    dataTest: 'dhis2-uicore-modalcontent',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 */
ModalContent.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}
