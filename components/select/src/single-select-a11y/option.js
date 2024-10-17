import { colors, spacers } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

function DefaultStyle({ label, disabled, highlighted }) {
    return (
        <span
            className={cx('option', {
                disabled,
                active: highlighted,
            })}
        >
            {label}

            <style jsx>{`
                span {
                    display: block;
                    cursor: pointer;
                    font-size: 14px;
                    text-decoration: none;
                    color: ${colors.grey900};
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp12};
                }

                span:hover {
                    background-color: ${colors.grey200};
                }

                span:active,
                span.active {
                    background-color: ${colors.teal700};
                    color: ${colors.white};
                    cursor: auto;
                }

                span.disabled {
                    color: ${colors.grey500};
                    cursor: not-allowed;
                    user-select: none;
                }

                span.disabled:hover {
                    background-color: initial;
                }
            `}</style>
        </span>
    )
}

DefaultStyle.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    highlighted: PropTypes.bool,
}

export function Option({
    comboBoxId,
    index,
    label,
    value,
    onClick,
    component: StyleComponent = DefaultStyle,
    dataTest,
    disabled,
    highlighted,
    ...rest
}) {
    return (
        <button
            id={`${comboBoxId}-${index}`}
            data-test={dataTest}
            disabled={disabled}
            role="option"
            aria-selected={highlighted || ''}
            aria-disabled={disabled}
            aria-label={label}
            onClick={() => {
                if (!disabled) {
                    onClick(value)
                }
            }}
        >
            <StyleComponent
                value={value}
                label={label}
                index={index}
                disabled={disabled}
                highlighted={highlighted}
                {...rest}
            >
                {label}
            </StyleComponent>

            <style jsx>{`
                button {
                    display: block;
                    width: 100%;
                    padding: 0;
                    border: 0;
                    background: 0;
                    outline: 0;
                    text-align: start;
                }
            `}</style>
        </button>
    )
}

Option.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    component: PropTypes.elementType,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    highlighted: PropTypes.bool,
}
