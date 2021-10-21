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
    allUsersAccessLevel,
    disableAllUsers,
}) => (
    <>
        <AccessAdd onAdd={onAdd} />
        <AccessList
            users={users}
            groups={groups}
            allUsersAccessLevel={allUsersAccessLevel}
            disableAllUsers={disableAllUsers}
            onChange={onChange}
            onRemove={onRemove}
        />
    </>
)

AccessTab.propTypes = {
    allUsersAccessLevel: PropTypes.string.isRequired,
    disableAllUsers: PropTypes.bool.isRequired,
    groups: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
