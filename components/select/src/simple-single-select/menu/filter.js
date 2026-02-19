import PropTypes from 'prop-types'
import React from 'react'
import i18n from '../../locales/index.js'

export function Filter({
    ariaControls,
    dataTest,
    inputRef,
    label,
    placeholder,
    value,
    onChange,
    onKeyDown,
}) {
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

Filter.propTypes = {
    ariaControls: PropTypes.string.isRequired,
    inputRef: PropTypes.object.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onKeyDown: PropTypes.func,
}
