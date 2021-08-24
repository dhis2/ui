import PropTypes from '@dhis2/prop-types'
import React from 'react'
import { ShareBlock } from './share-block.js'
import { SharingList } from './sharing-list.js'

export const DefaultSharingContent = ({
    sharingSettings,
    onAdd,
    onChange,
    onRemove,
}) => (
    <>
        <ShareBlock onAdd={onAdd} />
        <SharingList
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
