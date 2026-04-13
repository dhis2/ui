import React from 'react'

interface FileListProps {
    children?: React.ReactNode
    className?: string
    dataTest?: string
}

const FileList = ({
    children,
    className,
    dataTest = 'dhis2-uicore-filelist',
}: FileListProps) => (
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

export { FileList }
export type { FileListProps }
