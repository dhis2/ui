import { requiredIf } from '@dhis2/prop-types'
import { theme, spacers, sharedPropTypes } from '@dhis2/ui-constants'
import {
    IconErrorFilled24,
    IconWarningFilled24,
    IconCheckmark24,
} from '@dhis2/ui-icons'
import PropTypes from 'prop-types'
import React from 'react'
import { Loading as CommonLoading, Select } from '../select/index.js'
import { FilterableMenu } from './filterable-menu.js'
import { Input } from './input.js'
import { Menu } from './menu.js'

const StatusIcon = ({ error, warning, valid, defaultTo }) => {
    if (error) {
        return <IconErrorFilled24 color={theme.error} />
    }
    if (warning) {
        return <IconWarningFilled24 color={theme.warning} />
    }
    if (valid) {
        return <IconCheckmark24 color={theme.valid} />
    }

    return defaultTo
}

StatusIcon.defaultProps = {
    defaultTo: null,
}

StatusIcon.propTypes = {
    className: PropTypes.string,
    defaultTo: PropTypes.element,
    error: PropTypes.bool,
    info: PropTypes.bool,
    loading: PropTypes.bool,
    valid: PropTypes.bool,
    warning: PropTypes.bool,
}

const MultiSelect = ({
    className,
    selected,
    tabIndex,
    maxHeight,
    inputMaxHeight,
    onChange,
    onFocus,
    onBlur,
    loading,
    error,
    warning,
    valid,
    disabled,
    children,
    clearable,
    clearText,
    filterable,
    filterPlaceholder,
    placeholder,
    prefix,
    empty,
    loadingText,
    noMatchText,
    initialFocus,
    dense,
    dataTest,
}) => {
    // If the select is filterable, use a filterable menu
    const menu = filterable ? (
        <FilterableMenu
            dataTest={dataTest}
            empty={empty}
            noMatchText={noMatchText}
            placeholder={filterPlaceholder}
        />
    ) : (
        <Menu empty={empty} dataTest={dataTest} />
    )

    return (
        <div className="root" data-test={dataTest}>
            <div className="root-input">
                <Select
                    className={className}
                    selected={selected}
                    input={
                        <Input
                            clearable={clearable}
                            clearText={clearText}
                            dataTest={dataTest}
                            placeholder={placeholder}
                            prefix={prefix}
                            inputMaxHeight={inputMaxHeight}
                        />
                    }
                    menu={menu}
                    tabIndex={tabIndex}
                    maxHeight={maxHeight}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    error={error}
                    warning={warning}
                    valid={valid}
                    disabled={disabled}
                    initialFocus={initialFocus}
                    dense={dense}
                >
                    {children}
                    {loading && (
                        <CommonLoading
                            message={loadingText}
                            dataTest={`${dataTest}-loading`}
                        />
                    )}
                </Select>
            </div>
            <StatusIcon error={error} valid={valid} warning={warning} />

            <style jsx>{`
                .root {
                    align-items: center;
                    display: flex;
                }

                .root-input {
                    margin-right: ${spacers.dp8};
                    flex: 1;
                }
            `}</style>
        </div>
    )
}

MultiSelect.defaultProps = {
    selected: [],
    dataTest: 'dhis2-uicore-multiselect',
}

MultiSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /** Required if `clearable` prop is `true` */
    clearText: requiredIf((props) => props.clearable, PropTypes.string),
    /** Adds a 'clear' option to the menu */
    clearable: PropTypes.bool,
    dataTest: PropTypes.string,
    dense: PropTypes.bool,
    disabled: PropTypes.bool,
    empty: PropTypes.node,
    error: sharedPropTypes.statusPropType,
    filterPlaceholder: PropTypes.string,
    /** Adds a 'filter' field to the menu */
    filterable: PropTypes.bool,
    initialFocus: PropTypes.bool,
    inputMaxHeight: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    maxHeight: PropTypes.string,
    /** Required if `filterable` prop is `true` */
    noMatchText: requiredIf((props) => props.filterable, PropTypes.string),
    placeholder: PropTypes.string,
    prefix: PropTypes.string,
    selected: PropTypes.arrayOf(PropTypes.string),
    tabIndex: PropTypes.string,
    valid: sharedPropTypes.statusPropType,
    warning: sharedPropTypes.statusPropType,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
}

export { MultiSelect }
