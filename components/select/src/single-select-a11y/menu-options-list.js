import React from 'react'
import { Option } from './option.js'

export function MenuOptionsList({
    idPrefix,
    labelledBy,
    options,
    selected,
    disabled,
    onChange,
    onBlur,
    onKeyDown,
}) {
    return (
        <div
            className="combo-menu"
            role="listbox"
            id={`listbox-${idPrefix}`}
            aria-labelledby={labelledBy}
            tabIndex="-1"
            onBlur={onBlur}
            onKeyDown={onKeyDown}
        >
            {options.map(({ value, label, disabled: optionDisabled = false }, index) => {
                const isSelected = value === selected
                return (
                    <Option
                        key={value}
                        value={value}
                        label={label}
                        index={index}
                        disabled={disabled || optionDisabled}
                        selected={isSelected}
                        onClick={isSelected ? undefined : onChange}
                    />
                )
            })}
        </div>
    )
}
