import PropTypes from 'prop-types'
import React from 'react'
import { IconEmpty } from './icon-empty.js'
import { IconFolderClosed } from './icon-folder-closed.js'
import { IconFolderOpen } from './icon-folder-open.js'
import { IconSingle } from './icon-single.js'

/**
 * @param {Object} props
 * @param {bool} props.hasChildren
 * @param {bool} props.open
 * @returns {React.Component}
 */
export const Icon = ({ loading, hasChildren, open, dataTest }) => {
    if (loading) {
        return <IconEmpty dataTest={dataTest} />
    }

    if (!hasChildren) {
        return <IconSingle dataTest={dataTest} />
    }

    if (open) {
        return <IconFolderOpen dataTest={dataTest} />
    }

    return <IconFolderClosed dataTest={dataTest} />
}

Icon.propTypes = {
    dataTest: PropTypes.string.isRequired,
    hasChildren: PropTypes.bool,
    loading: PropTypes.bool,
    open: PropTypes.bool,
}
