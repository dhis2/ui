import PropTypes from 'prop-types'
import React, { forwardRef, useEffect } from 'react'
import { isOptionHidden } from '../is-option-hidden.js'
import { optionProp } from '../shared-prop-types.js'
import { Option } from './option.js'

export const OptionsList = forwardRef(function OptionsList(
    {
        comboBoxId,
        optionComponent,
        focussedOptionIndex,
        id,
        labelledBy,
        optionUpdateStrategy,
        options,
        selectedValue,
        dataTest,
        disabled,
        loading,
        onChange,
        onBlur,
        onEndReached,
        onKeyDown,
    },
    ref
) {
    // scrolls the highlighted option into view when:
    // * the highlighted option changes
    // * the menu opens
    useEffect(() => {
        const { current: listBox } = ref
        const highlightedOption = listBox.childNodes[focussedOptionIndex]

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
    }, [focussedOptionIndex, ref])

    return (
        <div
            ref={ref}
            role="listbox"
            tabIndex="-1"
            id={id}
            aria-labelledby={labelledBy}
            aria-live={optionUpdateStrategy}
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
                    const isSelected = value === selectedValue
                    const isLast = index === options.length - 1

                    return (
                        <Option
                            listBoxRef={ref}
                            dataTest={`${dataTest}-option`}
                            highlighted={focussedOptionIndex === index}
                            key={value}
                            value={value}
                            label={label}
                            index={index}
                            comboBoxId={comboBoxId}
                            disabled={disabled || optionDisabled}
                            onClick={isSelected ? () => null : onChange}
                            component={component || optionComponent}
                            onBecameVisible={isLast ? onEndReached : undefined}
                        />
                    )
                }
            )}
            <style jsx>{`
                div {
                    outline: none;
                }
            `}</style>
        </div>
    )
})

OptionsList.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    focussedOptionIndex: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(optionProp).isRequired,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    optionComponent: PropTypes.elementType,
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),
    selectedValue: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onEndReached: PropTypes.func,
    onKeyDown: PropTypes.func,
}
