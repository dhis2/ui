import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'

const DOUBLE_CLICK_MAX_DELAY = 500

export const TransferOption = ({
    className,
    disabled,
    dataTest = 'dhis2-uicore-transferoption',
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
            onClick={(event) => {
                if (disabled) {
                    return
                }

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

TransferOption.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    highlighted: PropTypes.bool,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
}
