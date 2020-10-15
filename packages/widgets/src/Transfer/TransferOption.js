import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React, { useRef } from 'react'

const DOUBLE_CLICK_MAX_DELAY = 500

/**
 * @module
 * @param {TransferOption.PropTypes} props
 * @returns {React.Component}
 *
 * @example import { TransferOption } from '@dhis2/ui-core'
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/transfer.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/transfer--basic|Storybook}
 */
export const TransferOption = ({
    className,
    disabled,
    dataTest,
    highlighted,
    onClick,
    onDoubleClick,
    label,
    value,
}) => {
    const doubleClickTimeout = useRef(null)

    return (
        <div
            data-test={dataTest}
            onClick={event => {
                if (disabled) return

                if (doubleClickTimeout.current) {
                    clearTimeout(doubleClickTimeout.current)
                    doubleClickTimeout.current = null

                    onDoubleClick({ value }, event)
                } else {
                    doubleClickTimeout.current = setTimeout(() => {
                        clearTimeout(doubleClickTimeout.current)
                        doubleClickTimeout.current = null
                    }, DOUBLE_CLICK_MAX_DELAY)

                    onClick({ value }, event)
                }
            }}
            data-value={value}
            className={cx(className, { highlighted, disabled })}
        >
            {label}

            <style jsx>{`
                div {
                    font-size: 14px;
                    line-height: 16px;
                    padding: 4px 8px;
                    color: ${colors.grey900};
                    user-select: none;
                }

                div:hover {
                    background: ${colors.grey200};
                }

                div.highlighted {
                    background: ${colors.teal700};
                    color: ${colors.white};
                }

                div.disabled {
                    color: ${colors.grey600};
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    )
}

TransferOption.defaultProps = {
    dataTest: 'dhis2-uicore-transferoption',
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {string} label
 * @prop {string} value
 * @prop {Object} [additionalData]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 * @prop {bool} [disabled]
 * @prop {bool} [highlighted]
 * @prop {Function} [onClick]
 * @prop {Function} [onDoubleClick]
 */
TransferOption.propTypes = {
    label: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    highlighted: propTypes.bool,
    onClick: propTypes.func,
    onDoubleClick: propTypes.func,
}
