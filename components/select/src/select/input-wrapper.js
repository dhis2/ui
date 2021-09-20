import { colors, theme, sharedPropTypes } from '@dhis2/ui-constants'
import { IconChevronDown16 } from '@dhis2/ui-icons'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

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
                <IconChevronDown16 />
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
                    outline: none;
                    box-shadow: 0 0 0 3px ${theme.focus};
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
                    margin: 4px 0px 0px 8px;
                }
            `}</style>
        </div>
    )
}

InputWrapper.defaultProps = {
    tabIndex: '0',
}

InputWrapper.propTypes = {
    dataTest: PropTypes.string.isRequired,
    inputRef: PropTypes.object.isRequired,
    tabIndex: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    children: PropTypes.element,
    className: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    error: sharedPropTypes.statusPropType,
    valid: sharedPropTypes.statusPropType,
    warning: sharedPropTypes.statusPropType,
}

export { InputWrapper }
