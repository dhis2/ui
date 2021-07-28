import propTypes from 'prop-types'
import React from 'react'
import { SingleSelectionLabel } from './single-selection-label.js'

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {Function} props.onToggleOpen
 * @param {bool} [props.loading]
 * @returns {React.Component}
 */
export const DisabledSelectionLabel = ({ label, loading, onToggleOpen }) => (
    <SingleSelectionLabel
        checked={false}
        loading={loading}
        label={label}
        onChange={onToggleOpen}
    />
)

DisabledSelectionLabel.propTypes = {
    label: propTypes.string.isRequired,
    onToggleOpen: propTypes.func.isRequired,
    loading: propTypes.bool,
}
