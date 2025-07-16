import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export const SimpleTransferOption = ({
    className,
    disabled,
    dataTest = 'dhis2-uicore-transferoption',
    onDoubleClick,
    label,
    value,
    lastOptionReference,
}) => {
    return (
        <>
            <option
                className={cx(className, { disabled })}
                data-test={dataTest}
                data-value={value}
                value={value}
                onDoubleClick={(e) => onDoubleClick({ value }, e)}
                ref={lastOptionReference}
                disabled={disabled}
            >
                {label}
            </option>

            <style jsx>{`
                option {
                    font-size: 14px;
                    line-height: 16px;
                    padding: 4px 8px;
                    color: ${colors.grey900};
                    user-select: none;
                }

                option:hover {
                    background: ${colors.grey200};
                }

                option.disabled {
                    color: ${colors.grey600};
                    cursor: not-allowed;
                }
            `}</style>
        </>
    )
}

SimpleTransferOption.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    lastOptionReference: PropTypes.object,
    onDoubleClick: PropTypes.func,
}
