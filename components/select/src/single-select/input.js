import { requiredIf } from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import {
    InputClearButton,
    InputPlaceholder,
    InputPrefix,
} from '../select/index.js'
import { Selection } from './selection.js'

const Input = ({
    selected,
    onChange,
    clearable,
    clearText,
    placeholder,
    dataTest,
    prefix,
    options,
    className,
    disabled,
    inputMaxHeight,
}) => {
    const hasSelection = selected && typeof selected === 'string'
    const onClear = (e) => {
        const data = { selected: '' }

        e.stopPropagation()
        onChange(data, e)
    }

    return (
        <div className={cx('root', className)}>
            <InputPrefix prefix={prefix} dataTest={`${dataTest}-prefix`} />
            {!hasSelection && !prefix && (
                <InputPlaceholder
                    placeholder={placeholder}
                    dataTest={`${dataTest}-placeholder`}
                />
            )}
            {hasSelection && (
                <div className="root-input">
                    {/* the wrapper div above is necessary to enforce wrapping on overflow */}
                    <Selection selected={selected} options={options} />
                </div>
            )}
            {hasSelection && clearable && !disabled && (
                <div className="root-right">
                    <InputClearButton
                        onClear={onClear}
                        clearText={clearText}
                        dataTest={`${dataTest}-clear`}
                    />
                </div>
            )}

            <style jsx>{`
                .root {
                    display: flex;
                    align-items: center;
                    color: ${colors.grey900};
                    font-size: 14px;
                    line-height: 16px;
                }

                .root-input {
                    overflow-y: auto;
                    flex: 1;
                }

                .root-right {
                    margin-inline-start: auto;
                }
            `}</style>

            <style jsx>{`
                .root-input {
                    max-height: ${inputMaxHeight};
                }
            `}</style>
        </div>
    )
}

Input.defaultProps = {
    inputMaxHeight: '100px',
}

Input.propTypes = {
    dataTest: PropTypes.string.isRequired,
    className: PropTypes.string,
    clearText: requiredIf((props) => props.clearable, PropTypes.string),
    clearable: PropTypes.bool,
    disabled: PropTypes.bool,
    inputMaxHeight: PropTypes.string,
    options: PropTypes.node,
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    selected: PropTypes.string,
    onChange: PropTypes.func,
}

export { Input }
