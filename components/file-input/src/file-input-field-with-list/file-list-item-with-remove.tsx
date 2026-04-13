import React, { Component } from 'react'
import { FileListItem } from '../file-list/index.ts'

interface FileListItemWithRemoveProps {
    label: string
    removeText: string
    onRemove: (payload: { file: File }, event: React.MouseEvent | React.KeyboardEvent) => void
    className?: string
    file?: File
}

class FileListItemWithRemove extends Component<FileListItemWithRemoveProps> {
    handleRemove = (_payload: Record<string, never>, event: React.MouseEvent | React.KeyboardEvent) => {
        const { onRemove, file } = this.props

        onRemove({ file: file! }, event)
    }

    render() {
        const { label, removeText, className } = this.props

        return (
            <FileListItem
                label={label}
                removeText={removeText}
                onRemove={this.handleRemove}
                className={className}
            />
        )
    }
}

export { FileListItemWithRemove }
export type { FileListItemWithRemoveProps }
