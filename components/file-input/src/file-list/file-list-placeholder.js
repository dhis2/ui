import propTypes from '@dhis2/prop-types'
import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

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

FileListPlaceholder.propTypes = {
    children: propTypes.string,
    dataTest: propTypes.string,
}

export { FileListPlaceholder }
