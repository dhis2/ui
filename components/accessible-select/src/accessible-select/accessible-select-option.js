import { colors, elevations, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export default function AccessibleSelectOption({
    value,
    label,
    checked,
    name,
    onFocus,
    onBlur,
    onChange,
}) {
    return (
        <label className={checked && 'active'} key={value}>
            <input
                checked={checked}
                type="radio"
                name={name}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
            />
            <span className="labelValue">{label}</span>

            <style jsx>{`
                .inputContainer {
                    display: flex;
                    gap: 8px;
                }

                label {
                    cursor: pointer;
                }

                input {
                    box-sizing: border-box;

                    font-size: 14px;
                    line-height: 16px;
                    user-select: text;

                    color: ${colors.grey900};
                    background-color: white;

                    padding: 11px 12px;
                    max-height: 40px;

                    outline: 0;
                    border: 1px solid ${colors.grey500};
                    border-radius: 3px;
                    box-shadow: inset 0 0 1px 0 rgba(48, 54, 60, 0.1);
                    text-overflow: ellipsis;
                }

                .optionsContainer {
                    border: 1px solid ${colors.grey200};
                    border-top: 0;
                    background: white;
                    border-radius: 0 0 3px 3px;
                    box-shadow: ${elevations.e300};
                }

                label {
                    display: flex;
                    gap: 4px;
                    font-size: 14px;
                    text-decoration: none;
                    color: ${colors.grey900};
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp12};
                }

                label:hover {
                    background-color: ${colors.grey200};
                }

                label:active,
                label.active {
                    background-color: ${colors.teal700};
                    color: ${colors.white};
                    cursor: auto;
                }

                label.disabled {
                    color: ${colors.grey500};
                    cursor: not-allowed;
                    user-select: none;
                }

                label.disabled:hover {
                    background-color: initial;
                }
            `}</style>
        </label>
    )
}

AccessibleSelectOption.defaultProps = {
    checked: undefined,
}

AccessibleSelectOption.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}
