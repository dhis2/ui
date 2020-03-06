import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 *
 * @param {ModalActions.PropTypes} props
 * @returns {React.Component}
 */
export const ModalActions = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                padding: 0 ${spacers.dp24} ${spacers.dp24} ${spacers.dp24};
                display: flex;
                justify-content: flex-end;
            }
        `}</style>
    </div>
)

ModalActions.defaultProps = {
    dataTest: 'dhis2-uicore-modalactions',
}

/**
 * @typedef {Object} PropTypes
 * @static
 * @prop {Object} [children] - Accepts one or more `Element`s
 * @prop {string} [dataTest]
 */
ModalActions.propTypes = {
    children: propTypes.node,
    dataTest: propTypes.string,
}
