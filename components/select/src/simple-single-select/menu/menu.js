import { colors, elevations } from '@dhis2/ui-constants'
import { Layer } from '@dhis2-ui/layer'
import { Popper } from '@dhis2-ui/popper'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { optionProp } from '../shared-prop-types.js'
import { Empty } from './empty.js'
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
    filterValue,
    hidden,
    labelledBy,
    listBoxRef,
    loading,
    loadingText,
    maxHeight,
    maxWidth,
    minWidth,
    noMatchText,
    optionUpdateStrategy,
    selectRef,
    selectedValue,
    onBlur,
    onClose,
    onEndReached,
}) {
    const [selectWidth, setSelectWidth] = useState()
    const dataTestPrefix = `${dataTest}-menu`

    // Re-measuring whenever `hidden` changes keeps the width current when the
    // select's container has been resized since the menu was last opened
    useEffect(() => {
        if (selectRef) {
            setSelectWidth(`${selectRef.offsetWidth}px`)
        }
    }, [selectRef, hidden])

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

    const flexible = Boolean(minWidth || maxWidth)
    // We never want the menu narrower than the select, so a maxWidth below
    // the select's width intentionally has no effect
    const flexibleMinWidth =
        minWidth && selectWidth
            ? `max(${selectWidth}, ${minWidth})`
            : minWidth || selectWidth

    return (
        <Layer onBackdropClick={onClose} transparent>
            <Popper
                reference={selectRef}
                placement="bottom-start"
                observeReferenceResize
            >
                <div
                    className="menu"
                    style={{
                        width: flexible ? 'fit-content' : selectWidth,
                        minWidth: flexible ? flexibleMinWidth : undefined,
                        maxWidth,
                        maxHeight,
                    }}
                >
                    {isEmpty && <Empty>{empty}</Empty>}

                    {hasNoFilterMatch && <NoMatch>{noMatchText}</NoMatch>}

                    <div className="listbox-container">
                        <div className="listbox-wrapper">
                            <OptionsList
                                ref={listBoxRef}
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
    filterValue: PropTypes.string,
    hidden: PropTypes.bool,
    labelledBy: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    maxHeight: PropTypes.string,
    maxWidth: PropTypes.string,
    minWidth: PropTypes.string,
    noMatchText: PropTypes.string,
    optionComponent: PropTypes.elementType,
    optionUpdateStrategy: PropTypes.oneOf(['off', 'polite', 'assertive']),
    selectRef: PropTypes.instanceOf(HTMLElement),
    selectedValue: PropTypes.string,
    onBlur: PropTypes.func,
    onClose: PropTypes.func,
    onEndReached: PropTypes.func,
}
