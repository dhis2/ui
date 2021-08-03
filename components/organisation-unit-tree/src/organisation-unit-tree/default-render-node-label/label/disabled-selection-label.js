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
    children: propTypes.any.isRequired,
    onToggleOpen: propTypes.func.isRequired,
    loading: propTypes.bool,
}
