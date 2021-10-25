import PropTypes from 'prop-types'
import React from 'react'
import { AccessAdd } from '../access-add/index.js'
import { AccessList } from '../access-list/index.js'

export const AccessTab = ({
    onAdd,
    onChange,
    onRemove,
    users,
    groups,
    publicAccess,
    allowPublicAccess,
}) => (
    <>
        <AccessAdd onAdd={onAdd} />
        <AccessList
            users={users}
            groups={groups}
            publicAccess={publicAccess}
            allowPublicAccess={allowPublicAccess}
            onChange={onChange}
            onRemove={onRemove}
        />
    </>
)

AccessTab.propTypes = {
    allowPublicAccess: PropTypes.bool.isRequired,
    groups: PropTypes.array.isRequired,
    publicAccess: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
