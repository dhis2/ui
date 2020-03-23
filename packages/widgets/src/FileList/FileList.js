import React from 'react'
import propTypes from '@dhis2/prop-types'

/**
 * @module
 * @param {FileList.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { FileList } from '@dhis2/ui-core'
 */
const FileList = ({ children, className, dataTest }) => (
    <div className={className} data-test={dataTest}>
        {children}
        <style jsx>{`
            div {
                padding-top: 4px;
            }
            :global(.file-input) + div {
                padding-top: 0;
            }
        `}</style>
    </div>
)

FileList.defaultProps = {
    dataTest: 'dhis2-uicore-filelist',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} [className]
 * @prop {FileListPlaceholder|FileListItem|Array.<FileListItem>} [children]
 * @prop {string} [dataTest]
 */
FileList.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { FileList }
