import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

const FileListPlaceholder = ({
    children,
    dataTest = 'dhis2-uicore-filelistplaceholder',
}) => (
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

FileListPlaceholder.propTypes = {
    children: PropTypes.string,
    dataTest: PropTypes.string,
}

export { FileListPlaceholder }
