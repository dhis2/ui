import PropTypes from 'prop-types'
import React, { useEffect, useRef } from 'react'
import { isOptionHidden } from './is-option-hidden.js'
import { Option } from './option.js'
import { optionsProp } from './shared-prop-types.js'

export function MenuOptionsList({
    comboBoxId,
    expanded,
    focussedOptionIndex,
    idPrefix,
    labelledBy,
    options,
    selected,
    dataTest,
    disabled,
    loading,
    onChange,
    onBlur,
    onKeyDown,
}) {
    const listBoxRef = useRef()

    // scrolls the highlighted option into view when:
    // * the highlighted option changes
    // * the menu opens
    useEffect(() => {
        const { current: listBox } = listBoxRef
        const highlightedOption = expanded
            ? listBox.childNodes[focussedOptionIndex]
            : null

        if (highlightedOption) {
            const listBoxParent = listBox.parentNode
            const optionHidden = isOptionHidden(
                highlightedOption,
                listBoxParent
            )

            if (optionHidden) {
                highlightedOption.scrollIntoView()
            }
        }
    }, [expanded, focussedOptionIndex])

    return (
        <div
            ref={listBoxRef}
            role="listbox"
            id={`${idPrefix}-listbox`}
            aria-labelledby={labelledBy}
            aria-live="polite"
            aria-busy={loading.toString()}
            data-test={dataTest}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
        >
            {options.map(
                (
                    {
                        value,
                        label,
                        component,
                        disabled: optionDisabled = false,
                    },
                    index
                ) => {
                    const isSelected = value === selected
                    return (
                        <Option
                            dataTest={`${dataTest}-option`}
                            highlighted={focussedOptionIndex === index}
                            key={value}
                            value={value}
                            label={label}
                            index={index}
                            comboBoxId={comboBoxId}
                            disabled={disabled || optionDisabled}
                            onClick={isSelected ? () => null : onChange}
                            component={component}
                        />
                    )
                }
            )}
        </div>
    )
}

MenuOptionsList.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
    focussedOptionIndex: PropTypes.number.isRequired,
    idPrefix: PropTypes.string.isRequired,
    options: optionsProp.isRequired,
    onChange: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    selected: PropTypes.string,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
}
