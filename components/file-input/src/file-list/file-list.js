import propTypes from '@dhis2/prop-types'
import React from 'react'

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

FileList.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
}

export { FileList }
