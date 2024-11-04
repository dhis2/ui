import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { optionProp } from '../shared-prop-types.js'
import { Empty } from './empty.js'
import { MenuFilter } from './menu-filter.js'
import { MenuLoading } from './menu-loading.js'
import { MenuOptionsList } from './menu-options-list.js'
import { NoMatch } from './no-match.js'

export function Menu({
    comboBoxId,
    focussedOptionIndex,
    idPrefix,
    options,
    onChange,
    customOption,
    dataTest,
    disabled,
    empty,
    filterLabel,
    filterPlaceholder,
    filterValue,
    filterable,
    hidden,
    labelledBy,
    listBoxRef,
    loading,
    loadingText,
    maxHeight,
    noMatchText,
    optionUpdateStrategy,
    selectRef,
    selected,
    onBlur,
    onClose,
    onFilterChange,
    onFilterInputKeyDown,
    onSearch,
}) {
    const [menuWidth, setMenuWidth] = useState('auto')
    const dataTestPrefix = `${dataTest}-menu`

    useEffect(() => {
        if (selectRef) {
            const callback = () => setMenuWidth(`${selectRef.offsetWidth}px`)
            callback() // We want to know the width as soon as the

            selectRef.addEventListener('resize', callback)
            return () => selectRef.removeEventListener('resize', callback)
        }
    }, [selectRef])

    if (hidden) {
        return null
    }

    return (
        <Layer onBackdropClick={onClose} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
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
                            onSearch={onSearch}
                            onKeyDown={onFilterInputKeyDown}
                        />
                    )}

                    {!options.length && !filterValue && <Empty>{empty}</Empty>}

                    {!options.length &&
                        filterValue &&
                        // We don't want to show the noMatchText when
                        // we're in the process of loading options
                        !loading && <NoMatch>{noMatchText}</NoMatch>}

                    <MenuOptionsList
                        ref={listBoxRef}
                        comboBoxId={comboBoxId}
                        customOption={customOption}
                        dataTest={`${dataTestPrefix}-list`}
                        disabled={disabled}
                        expanded={!hidden}
                        focussedOptionIndex={focussedOptionIndex}
                        idPrefix={idPrefix}
                        labelledBy={labelledBy}
                        loading={loading}
                        optionUpdateStrategy={optionUpdateStrategy}
                        options={options}
                        selected={selected}
                        onChange={onChange}
                        onBlur={onBlur}
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

                            /* We want the provided height to be exact */
                            box-sizing: content-box;
                        }
                    `}</style>
                </div>
            </Popper>
        </Layer>
    )
}

Menu.propTypes = {
    comboBoxId: PropTypes.string.isRequired,
    focussedOptionIndex: PropTypes.number.isRequired,
    idPrefix: PropTypes.string.isRequired,
    listBoxRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }).isRequired,
    options: PropTypes.arrayOf(optionProp).isRequired,
    onChange: PropTypes.func.isRequired,
    customOption: PropTypes.elementType,
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
    noMatchText: PropTypes.string,
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),
    selectRef: PropTypes.instanceOf(HTMLElement),
    selected: PropTypes.string,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onFilterChange: PropTypes.func,
    onFilterInputKeyDown: PropTypes.func,
    onSearch: PropTypes.func,
}
