import PropTypes from 'prop-types'
import React from 'react'

const FileList = ({
    children,
    className,
    dataTest = 'dhis2-uicore-filelist',
}) => (
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

FileList.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataTest: PropTypes.string,
}

export { FileList }
