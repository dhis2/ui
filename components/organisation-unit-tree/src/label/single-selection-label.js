import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import propTypes from 'prop-types'
import React from 'react'

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {bool} [props.checked]
 * @param {bool} [props.loading]
 * @param {Function} [props.onChange]
 * @returns {React.Component}
 */
export const SingleSelectionLabel = ({ checked, label, onChange, loading }) => (
    <span
        onClick={event => {
            const payload = { checked: !checked }
            onChange(payload, event)
        }}
        className={cx({ checked, loading })}
    >
        {label}

        <style jsx>{`
            span {
                background: transparent;
                border-radius: 3px;
                color: ${colors.grey900};
                cursor: pointer;
                display: inline-block;
                font-size: 14px;
                line-height: 24px;
                padding: 0 5px;
                user-select: none;
                white-space: nowrap;
            }

            .checked {
                background: ${colors.teal700};
                color: white;
            }

            .loading {
                cursor: auto;
            }
        `}</style>
    </span>
)

SingleSelectionLabel.propTypes = {
    label: propTypes.string.isRequired,
    checked: propTypes.bool,
    loading: propTypes.bool,
    onChange: propTypes.func,
}
