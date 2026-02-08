import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { optionProp } from '../shared-prop-types.js'
import { Empty } from './empty.js'
import { Filter } from './filter.js'
import { Loading } from './loading.js'
import { NoMatch } from './no-match.js'
import { OptionsList } from './options-list.js'

export function Menu({
    comboBoxId,
    focussedOptionIndex,
    name,
    options,
    onChange,
    optionComponent,
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
    selectedValue,
    tabIndex,
    onBlur,
    onClose,
    onEndReached,
    onFilterChange,
    onFilterInputKeyDown,
    filterRef,
    onOptionsKeyDown,
}) {
    const [menuWidth, setWidth] = useState('auto')
    const dataTestPrefix = `${dataTest}-menu`

    useEffect(() => {
        if (selectRef) {
            const callback = () => setWidth(`${selectRef.offsetWidth}px`)
            callback() // We want to know the width as soon as the

            selectRef.addEventListener('resize', callback)
            return () => selectRef.removeEventListener('resize', callback)
        }
    }, [selectRef])

    if (hidden) {
        return null
    }

    const hasNoFilterMatch =
        !options.length &&
        filterValue &&
        // We don't want to show the noMatchText when
        // we're in the process of loading options
        !loading

    const isEmpty = !options.length && !filterValue

    return (
        <Layer onBackdropClick={onClose} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                <div className="menu" style={{ width: menuWidth, maxHeight }}>
                    {filterable && (
                        <div className="filter-container">
                            <Filter
                                ref={filterRef}
                                dataTest={`${dataTestPrefix}-filter`}
                                value={filterValue}
                                label={filterLabel}
                                ariaControls={`${name}-listbox`}
                                placeholder={filterPlaceholder}
                                tabIndex={tabIndex}
                                onChange={onFilterChange}
                                onKeyDown={onFilterInputKeyDown}
                            />
                        </div>
                    )}

                    {isEmpty && <Empty>{empty}</Empty>}

                    {hasNoFilterMatch && <NoMatch>{noMatchText}</NoMatch>}

                    <div className="listbox-container">
                        <div className="listbox-wrapper">
                            <OptionsList
                                ref={listBoxRef}
                                onKeyDown={onOptionsKeyDown}
                                comboBoxId={comboBoxId}
                                optionComponent={optionComponent}
                                dataTest={`${dataTestPrefix}-list`}
                                disabled={disabled}
                                focussedOptionIndex={focussedOptionIndex}
                                labelledBy={labelledBy}
                                loading={loading}
                                id={`${name}-listbox`}
                                optionUpdateStrategy={optionUpdateStrategy}
                                options={options}
                                selectedValue={selectedValue}
                                onBlur={onBlur}
                                onChange={onChange}
                                onEndReached={onEndReached}
                            />
                        </div>

                        {loading && (
                            <div className="menu-loading-container">
                                <Loading message={loadingText} />
                            </div>
                        )}
                    </div>

                    <style jsx>{`
                        .menu {
                            display: flex;
                            flex-direction: column;
                            height: auto;
                            background: ${colors.white};
                            border: 1px solid ${colors.grey200};
                            border-radius: 3px;
                            box-shadow: ${elevations.e300};

                            /* We want the provided height to be exact, otherwise
                               the consumer would have to know about the border's width */
                            box-sizing: content-box;
                        }

                        .listbox-container {
                            position: relative;
                            flex-grow: 1;
                            display: flex;
                            flex-direction: column;
                            overflow: hidden;
                        }

                        .listbox-wrapper {
                            overflow: auto;
                            flex-grow: 1;
                        }

                        .menu-loading-container {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
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
    listBoxRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }).isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(optionProp).isRequired,
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
    noMatchText: PropTypes.string,
    optionComponent: PropTypes.elementType,
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),
    selectRef: PropTypes.instanceOf(HTMLElement),
    selectedValue: PropTypes.string,
    tabIndex: PropTypes.string,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onEndReached: PropTypes.func,
    onFilterChange: PropTypes.func,
    onFilterInputKeyDown: PropTypes.func,
    onOptionsKeyDown: PropTypes.func,
    filterRef: PropTypes.shape({
        current: PropTypes.instanceOf(HTMLElement),
    }),
}
