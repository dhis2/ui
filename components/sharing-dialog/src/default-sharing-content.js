import PropTypes from 'prop-types'
import React from 'react'
import { AccessList } from './access-list/index.js'
import { AllowAccess } from './allow-access/index.js'

export const DefaultSharingContent = ({
    sharingSettings,
    onAdd,
    onChange,
    onRemove,
}) => (
    <>
        <AllowAccess onAdd={onAdd} />
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
