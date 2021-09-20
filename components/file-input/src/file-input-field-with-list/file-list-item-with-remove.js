import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { FileListItem } from '../index.js'

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
    label: PropTypes.string.isRequired,
    removeText: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired,
    className: PropTypes.string,
    file: PropTypes.instanceOf(File),
}

export { FileListItemWithRemove }
