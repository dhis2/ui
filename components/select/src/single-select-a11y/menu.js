import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import React, { useEffect, useState } from 'react'
import { MenuOptionsList } from './menu-options-list.js'
import { MenuFilter } from './menu-filter.js'

export function Menu({
    idPrefix,
    labelledBy,
    onBlur,
    onChange,
    onKeyDown,
    options,
    hidden,
    onClose,
    selectRef,
    selected,
    maxHeight,
    disabled,
    filterable,
    filterValue,
    onFilterChange,
    filterPlaceholder,
}) {
    const [menuWidth, setMenuWidth] = useState('auto')

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
        <div className={cx('listbox-container', { hidden })} style={{ width: menuWidth }}>
            {filterable && (
                <MenuFilter
                    value={filterValue}
                    onChange={onFilterChange}
                    placeholder={filterPlaceholder}
                />
            )}

            <MenuOptionsList
                idPrefix={idPrefix}
                labelledBy={labelledBy}
                options={options}
                selected={selected}
                disabled={disabled}
                onChange={onChange}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
            />

            {/* Put (infinite) loading stuff here */ ''}

            <style jsx>{`
                .listbox-container {
                    height: auto;
                    max-height: ${maxHeight};
                    overflow: auto;
                    background: ${colors.white};
                    border: 1px solid ${colors.grey200};
                    border-radius: 3px;
                    box-shadow: ${elevations.e300};
                }

                .hidden {
                    display: none;
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
