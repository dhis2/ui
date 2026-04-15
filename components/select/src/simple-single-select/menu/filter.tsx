import React from 'react'
import i18n from '../../locales/index.js'

export interface FilterProps {
    ariaControls: string
    inputRef: React.RefObject<HTMLInputElement>
    value: string
    onChange: (value: string) => void
    dataTest?: string
    label?: string
    placeholder?: string
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Filter({
    ariaControls,
    dataTest,
    inputRef,
    label,
    placeholder,
    value,
    onChange,
    onKeyDown,
}: FilterProps) {
    return (
        <>
            <input
                ref={inputRef}
                className="filter-input"
                type="text"
                name="filter"
                value={value}
                placeholder={placeholder}
                aria-label={label || i18n.t('Search options')}
                aria-controls={ariaControls}
                aria-haspopup="listbox"
                data-test={dataTest}
                onChange={(e) => onChange(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => {
                    e.stopPropagation()
                    onKeyDown?.(e)
                }}
            />
            <style jsx>{`
                .filter-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    background: transparent;
                    font-size: 14px;
                    line-height: 16px;
                    color: inherit;
                    padding: 0;
                    min-width: 0;
                }
            `}</style>
        </>
    )
}
