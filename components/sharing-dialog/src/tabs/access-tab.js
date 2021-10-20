import PropTypes from 'prop-types'
import React from 'react'
import { AccessAdd } from '../access-add/index.js'
import { AccessList } from '../access-list/index.js'

export const AccessTab = ({ sharingSettings, onAdd, onChange, onRemove }) => (
    <>
        <AccessAdd onAdd={onAdd} />
        <AccessList
            sharingSettings={sharingSettings}
            onChange={onChange}
            onRemove={onRemove}
        />
    </>
)

AccessTab.propTypes = {
    sharingSettings: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
}
