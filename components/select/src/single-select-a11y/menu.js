import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { MenuFilter } from './menu-filter.js'
import { MenuLoading } from './menu-loading.js'
import { MenuOptionsList } from './menu-options-list.js'
import { optionsProp } from './shared-prop-types.js'

export function Menu({
    comboBoxId,
    focussedOptionIndex,
    idPrefix,
    options,
    onChange,
    dataTest,
    disabled,
    empty,
    filterLabel,
    filterPlaceholder,
    filterValue,
    filterable,
    hidden,
    labelledBy,
    loading,
    loadingText,
    maxHeight,
    selectRef,
    selected,
    onBlur,
    onClose,
    onFilterChange,
    onKeyDown,
}) {
    const [menuWidth, setMenuWidth] = useState('auto')
    const dataTestPrefix = `${dataTest}-menu`

    useEffect(() => {
        if (selectRef) {
            const callback = () => setMenuWidth(`${selectRef.offsetWidth}px`)
            selectRef.addEventListener('resize', callback)

            // We want to know the width as soon as the
            callback()
            return () => selectRef.removeEventListener('resize', callback)
        }
    }, [selectRef])

    const menu = (
        <div
            className={cx('listbox-container', { hidden })}
            style={{ width: menuWidth, maxHeight }}
        >
            {filterable && (
                <MenuFilter
                    dataTest={`${dataTestPrefix}-filter`}
                    value={filterValue}
                    onChange={onFilterChange}
                    label={filterLabel}
                    placeholder={filterPlaceholder}
                />
            )}

            {!options.length && <div className="empty-container">{empty}</div>}

            <MenuOptionsList
                comboBoxId={comboBoxId}
                dataTest={`${dataTestPrefix}-list`}
                disabled={disabled}
                expanded={!hidden}
                focussedOptionIndex={focussedOptionIndex}
                idPrefix={idPrefix}
                labelledBy={labelledBy}
                loading={loading}
                options={options}
                selected={selected}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />

            {loading && <MenuLoading message={loadingText} />}

            <style jsx>{`
                .listbox-container {
                    height: auto;
                    overflow: auto;
                    background: ${colors.white};
                    border: 1px solid ${colors.grey200};
                    border-radius: 3px;
                    box-shadow: ${elevations.e300};
                }

                .hidden {
                    display: none;
                }

                .empty-container {
                    height: 16px;
                }
            `}</style>
        </div>
    )

    if (hidden) {
        return menu
    }

    return (
        <Layer onBackdropClick={onClose} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                {menu}
            </Popper>
        </Layer>
    )
}

Menu.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    focussedOptionIndex: PropTypes.number.isRequired,
    idPrefix: PropTypes.string.isRequired,
    options: optionsProp.isRequired,
    onChange: PropTypes.func.isRequired,
    dataTest: PropTypes.string,
    disabled: PropTypes.bool,
    empty: PropTypes.node,
    filterLabel: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    filterValue: PropTypes.string,
    filterable: PropTypes.bool,
    hidden: PropTypes.bool,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    maxHeight: PropTypes.string,
    selectRef: PropTypes.instanceOf(HTMLElement),
    selected: PropTypes.string,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onFilterChange: PropTypes.func,
    onKeyDown: PropTypes.func,
}
