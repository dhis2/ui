import React from 'react'
import propTypes from '@dhis2/prop-types'

import { colors, spacers } from './theme.js'
;('') // TODO: https://github.com/jsdoc/jsdoc/issues/1718

/**
 * @module
 * @param {FileListPlaceholder.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileListPlaceholder } from '@dhis2/ui-core'
 */
const FileListPlaceholder = ({ children, dataTest }) => (
    <p data-test={dataTest}>
        {children}
        <style jsx>{`
            p {
                margin: 0;
                padding-top: ${spacers.dp4};
                font-size: 14px;
                color: ${colors.grey700};
            }
        `}</style>
    </p>
)

FileListPlaceholder.defaultProps = {
    dataTest: 'dhis2-uicore-filelistplaceholder',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [children]
 * @prop {string} [dataTest]
 */
FileListPlaceholder.propTypes = {
    children: propTypes.string,
    dataTest: propTypes.string,
}

export { FileListPlaceholder }
