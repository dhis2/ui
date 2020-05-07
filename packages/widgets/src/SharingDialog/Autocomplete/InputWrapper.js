import React from 'react'
import propTypes from '@dhis2/prop-types'
import cx from 'classnames'
import { ArrowDown } from './ArrowDown.js'
import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'

const InputWrapper = ({
    dataTest,
    onToggle,
    children,
    tabIndex,
    error,
    warning,
    valid,
    disabled,
    dense,
    className,
    inputRef,
}) => {
    const classNames = cx(className, 'root', {
        error,
        warning,
        valid,
        disabled,
        dense,
    })

    return (
        <div
            className={classNames}
            onClick={onToggle}
            tabIndex={tabIndex}
            ref={inputRef}
            data-test={dataTest}
        >
            <div className="root-children">{children}</div>
            <div className="root-right">
                <ArrowDown />
            </div>

            <style jsx>{`
                .root {
                    align-items: center;
                    background-color: white;
                    border-radius: 3px;
                    border: 1px solid ${colors.grey500};
                    box-sizing: border-box;
                    display: flex;
                    min-height: 40px;
                    padding: 6px 12px;
                    box-shadow: inset 0 1px 2px 0 rgba(48, 54, 60, 0.1);
                }

                .root:focus,
                .root:active {
                    border-color: ${colors.teal400};
                    outline: 0;
                }

                .root.valid {
                    border-color: ${theme.valid};
                }

                .root.warning {
                    border-color: ${theme.warning};
                }

                .root.error {
                    border-color: ${theme.error};
                }

                .root.disabled {
                    background-color: ${colors.grey100};
                    border-color: ${colors.grey500};
                    color: ${theme.disabled};
                    cursor: not-allowed;
                }

                .root.dense {
                    padding: 4px 8px;
                    min-height: 32px;
                }

                .root-children {
                    flex-grow: 1;
                }

                .root-right {
                    margin-left: auto;
                }
            `}</style>
        </div>
    )
}

InputWrapper.defaultProps = {
    tabIndex: '0',
}

InputWrapper.propTypes = {
    dataTest: propTypes.string.isRequired,
    inputRef: propTypes.object.isRequired,
    tabIndex: propTypes.string.isRequired,
    onToggle: propTypes.func.isRequired,
    children: propTypes.element,
    className: propTypes.string,
    dense: propTypes.bool,
    disabled: propTypes.bool,
    error: sharedPropTypes.statusPropType,
    valid: sharedPropTypes.statusPropType,
    warning: sharedPropTypes.statusPropType,
}

export { InputWrapper }
