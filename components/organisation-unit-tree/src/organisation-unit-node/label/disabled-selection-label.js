import PropTypes from 'prop-types'
import React from 'react'
import { SingleSelectionLabel } from './single-selection-label.js'

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {Function} props.onToggleOpen
 * @param {bool} [props.loading]
 * @returns {React.Component}
 */
export const DisabledSelectionLabel = ({ children, loading, onToggleOpen }) => (
    <SingleSelectionLabel
        checked={false}
        loading={loading}
        onChange={onToggleOpen}
    >
        {children}
    </SingleSelectionLabel>
)

DisabledSelectionLabel.propTypes = {
    children: PropTypes.any.isRequired,
    onToggleOpen: PropTypes.func.isRequired,
    loading: PropTypes.bool,
}
