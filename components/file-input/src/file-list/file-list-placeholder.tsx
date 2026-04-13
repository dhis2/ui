import { colors, spacers } from '@dhis2/ui-constants'
import React from 'react'

interface FileListPlaceholderProps {
    children?: string
    dataTest?: string
}

const FileListPlaceholder = ({
    children,
    dataTest = 'dhis2-uicore-filelistplaceholder',
}: FileListPlaceholderProps) => (
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

export { FileListPlaceholder }
export type { FileListPlaceholderProps }
