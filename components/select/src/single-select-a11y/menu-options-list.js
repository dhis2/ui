import { colors, spacers, theme } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React from 'react'
import { Option } from './option.js'
import { optionsProp } from './shared-prop-types.js'

function Loading({ message }) {
    return (
        <div className="container">
            <div>
                <CircularLoader small />
            </div>

            {message}

            <style jsx>{`
                .container {
                    display: flex;
                    gap: ${spacers.dp16};
                    align-items: center;
                    justify-content: center;
                    color: ${colors.grey700};
                    font-family: ${theme.fonts};
                    font-size: 13px;
                    padding-block: ${spacers.dp8};
                    padding-inline: ${spacers.dp24};
                }
            `}</style>
        </div>
    )
}

Loading.propTypes = {
    message: PropTypes.string,
}

export function MenuOptionsList({
    comboBoxId,
    idPrefix,
    labelledBy,
    options,
    selected,
    dataTest,
    disabled,
    empty,
    loading,
    loadingText,
    onChange,
    onBlur,
    onKeyDown,
}) {
    return (
        <div
            role="listbox"
            id={`listbox-${idPrefix}`}
            aria-labelledby={labelledBy}
            aria-live="polite"
            aria-busy={loading.toString()}
            data-test={dataTest}
            tabIndex="-1"
            onBlur={onBlur}
            onKeyDown={onKeyDown}
        >
            {!options.length && empty}

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
                            key={value}
                            value={value}
                            label={label}
                            index={index}
                            comboBoxId={comboBoxId}
                            disabled={disabled || optionDisabled}
                            selected={isSelected}
                            onClick={isSelected ? () => null : onChange}
                            component={component}
                        />
                    )
                }
            )}

            {loading && <Loading message={loadingText} />}

            <style jsx>{`
                div:empty {
                    height: 16px;
                }
            `}</style>
        </div>
    )
}

MenuOptionsList.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    idPrefix: PropTypes.string.isRequired,
    options: optionsProp.isRequired,
    onChange: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    empty: PropTypes.node,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    selected: PropTypes.string,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
}
