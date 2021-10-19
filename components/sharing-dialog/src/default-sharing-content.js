import PropTypes from 'prop-types'
import React from 'react'
import { AccessList } from './access-list/index.js'
import { ShareBlock } from './share-block.js'

export const DefaultSharingContent = ({
    sharingSettings,
    onAdd,
    onChange,
    onRemove,
}) => (
    <>
        <ShareBlock onAdd={onAdd} />
        <AccessList
            sharingSettings={sharingSettings}
            onChange={onChange}
            onRemove={onRemove}
        />
    </>
)

DefaultSharingContent.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
