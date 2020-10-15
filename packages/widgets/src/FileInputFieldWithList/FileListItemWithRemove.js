import propTypes from '@dhis2/prop-types'
import { FileListItem } from '@dhis2/ui-core'
import React, { Component } from 'react'

class FileListItemWithRemove extends Component {
    handleRemove = event => {
        const { onRemove, file } = this.props

        onRemove({ file }, event)
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

FileListItemWithRemove.propTypes = {
    label: propTypes.string.isRequired,
    removeText: propTypes.string.isRequired,
    onRemove: propTypes.func.isRequired,
    className: propTypes.string,
    file: propTypes.instanceOf(File),
}

export { FileListItemWithRemove }
