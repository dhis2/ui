import PropTypes from 'prop-types'
import React, { forwardRef, useEffect } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'
import { optionProp } from '../shared-prop-types.js'
import { Option } from './option.js'

export const MenuOptionsList = forwardRef(function MenuOptionsList(
    {
        comboBoxId,
        customOption,
        expanded,
        focussedOptionIndex,
        idPrefix,
        labelledBy,
        optionUpdateStrategy,
        options,
        selected,
        dataTest,
        disabled,
        loading,
        onChange,
        onBlur,
    },
    ref
) {
    // scrolls the highlighted option into view when:
    // * the highlighted option changes
    // * the menu opens
    useEffect(() => {
        const { current: listBox } = ref
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
    }, [expanded, focussedOptionIndex, ref])

    return (
        <div
            ref={ref}
            role="listbox"
            id={`${idPrefix}-listbox`}
            aria-labelledby={labelledBy}
            aria-live={optionUpdateStrategy}
            aria-busy={loading.toString()}
            data-test={dataTest}
            onBlur={onBlur}
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
                            component={component || customOption}
                        />
                    )
                }
            )}
        </div>
    )
})

MenuOptionsList.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    expanded: PropTypes.bool.isRequired,
    focussedOptionIndex: PropTypes.number.isRequired,
    idPrefix: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(optionProp).isRequired,
    onChange: PropTypes.func.isRequired,
    customOption: PropTypes.elementType,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),
    selected: PropTypes.string,
    onBlur: PropTypes.func,
}
