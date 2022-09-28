import PropTypes from 'prop-types'
import React from 'react'
import { IconFolderClosed } from '../../../organisation-unit-node/label/icon-folder-closed.js'
import { IconFolderOpen } from '../../../organisation-unit-node/label/icon-folder-open.js'
import { IconSingle } from '../../../organisation-unit-node/label/icon-single.js'

const Icon = ({ isLeafNode, isOpen }) => {
    if (isLeafNode) {
        return <IconSingle dataTest={'organisationunittree-nodeicon-leaf'} />
    }
    if (isOpen) {
        return (
            <IconFolderOpen dataTest={'organisationunittree-nodeicon-open'} />
        )
    }

    return (
        <IconFolderClosed dataTest={'organisationunittree-nodeicon-closed'} />
    )
}

Icon.propTypes = {
    isLeafNode: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

const OrganisationUnitNodeIcon = ({ isLeafNode, isOpen }) => (
    <div>
        <Icon isLeafNode={isLeafNode} isOpen={isOpen} />
        <style jsx>{`
            display: flex;
            align-items: center;
            justify-content: flex-start;
            height: 24px;
            width: 22px;
        `}</style>
    </div>
)

OrganisationUnitNodeIcon.propTypes = {
    isLeafNode: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export { OrganisationUnitNodeIcon }
