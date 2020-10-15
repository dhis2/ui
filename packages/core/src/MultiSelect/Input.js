import propTypes from '@dhis2/prop-types'
import { colors } from '@dhis2/ui-constants'
import cx from 'classnames'
import React from 'react'
import { InputClearButton } from '../Select/InputClearButton.js'
import { InputPlaceholder } from '../Select/InputPlaceholder.js'
import { InputPrefix } from '../Select/InputPrefix.js'
import { SelectionList } from './SelectionList.js'

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
    const hasSelection = selected.length > 0
    const onClear = (_, e) => {
        const data = { selected: [] }

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
                    <SelectionList
                        selected={selected}
                        onChange={onChange}
                        options={options}
                        disabled={disabled}
                    />
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
                    margin-left: auto;
                    margin-right: 10px;
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
    dataTest: propTypes.string.isRequired,
    className: propTypes.string,
    clearText: propTypes.requiredIf(props => props.clearable, propTypes.string),
    clearable: propTypes.bool,
    disabled: propTypes.bool,
    inputMaxHeight: propTypes.string,
    options: propTypes.node,
    placeholder: propTypes.string,
    prefix: propTypes.string,
    selected: propTypes.arrayOf(propTypes.string),
    onChange: propTypes.func,
}

export { Input }
