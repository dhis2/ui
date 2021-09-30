import PropTypes from 'prop-types'
import React from 'react'
import { DashboardSharingContent } from './dashboard-sharing-content.js'
import { DefaultSharingContent } from './default-sharing-content.js'

export const SharingContent = ({
    type,
    sharingSettings,
    onAdd,
    onChange,
    onRemove,
}) => {
    if (type === 'dashboard') {
        return (
            <DashboardSharingContent
                sharingSettings={sharingSettings}
                onAdd={onAdd}
                onChange={onChange}
                onRemove={onRemove}
            />
        )
    }

    return (
        <DefaultSharingContent
            sharingSettings={sharingSettings}
            onAdd={onAdd}
            onChange={onChange}
            onRemove={onRemove}
        />
    )
}

SharingContent.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
    type: PropTypes.string.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
