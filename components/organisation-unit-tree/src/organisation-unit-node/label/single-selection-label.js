import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * @param {Object} props
 * @param {string} props.label
 * @param {bool} [props.checked]
 * @param {bool} [props.loading]
 * @param {Function} [props.onChange]
 * @returns {React.Component}
 */
export const SingleSelectionLabel = ({
    checked,
    children,
    onChange,
    loading,
}) => (
    <span
        onClick={(event) => {
            const payload = { checked: !checked }
            onChange(payload, event)
        }}
        className={cx({ checked, loading })}
    >
        {children}

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
    children: PropTypes.any.isRequired,
    checked: PropTypes.bool,
    loading: PropTypes.bool,
    onChange: PropTypes.func,
}
