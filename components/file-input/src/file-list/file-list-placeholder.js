import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
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
    children: PropTypes.string,
    dataTest: PropTypes.string,
}

export { FileListPlaceholder }
