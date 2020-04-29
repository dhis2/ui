import './Transfer/types.js'

import React, { Children, useState } from 'react'
import propTypes from '@dhis2/prop-types'

import { Actions } from './Transfer/Actions.js'
import { AddAll } from './Transfer/AddAll.js'
import { AddIndividual } from './Transfer/AddIndividual.js'
import { Container } from './Transfer/Container.js'
import { Filter } from './Transfer/Filter.js'
import { LeftFooter } from './Transfer/LeftFooter.js'
import { LeftHeader } from './Transfer/LeftHeader.js'
import { LeftSide } from './Transfer/LeftSide.js'
import { PickedOptions } from './Transfer/PickedOptions.js'
import { RemoveAll } from './Transfer/RemoveAll.js'
import { RemoveIndividual } from './Transfer/RemoveIndividual.js'
import { ReorderingActions } from './Transfer/ReorderingActions.js'
import { RightFooter } from './Transfer/RightFooter.js'
import { RightSide } from './Transfer/RightSide.js'
import { SourceOptions } from './Transfer/SourceOptions.js'
import {
    addAllSelectableSourceOptions,
    addIndividualSourceOptions,
    createDoubleClickHandlers,
    extractPickedReactOptions,
    defaultFilterCallback,
    filterOutOptions,
    getSubsetByFilter,
    isReorderDownDisabled,
    isReorderUpDisabled,
    moveHighlightedPickedOptionDown,
    moveHighlightedPickedOptionUp,
    removeAllPickedOptions,
    removeIndividualPickedOptions,
    useHighlightedOptions,
} from './Transfer/helper/index.js'
import { filterReactOptionsBy } from './Transfer/helper/filterReactOptionsBy'
import {
    singleSelectedPropType,
    multiSelectedPropType,
} from './common-prop-types.js'

/**
 * @module
 * @param {Transfer.PropTypes} props
 *
 * @returns {React.Component}
 *
 * @example import { Transfer } from @dhis2/ui-core
 * @see Specification: {@link https://github.com/dhis2/design-system/blob/master/organisms/transfer.md|Design system}
 * @see Live demo: {@link /demo/?path=/story/transfer--basic|Storybook}
 *
 * This component has to differentiate between different types of options,
 * here's an explanation of their meaning:
 *
 * * source options -> These are options listed on the left and are available
 * for selection
 *
 * * picked options -> These options have been selected by the user and are on
 * the right side
 *
 * * highlighted option -> These are visually highlighted options than can be
 * on either side and are ready for transferral with the action buttons to the
 * other side
 *
 * * filtered options -> These are the displayed source options filtered
 * by a search term or a custom search algorithm.
 *
 * The api surface uses "selected" for "picked" to be consistent with the
 * rest of the library
 */
export const Transfer = ({
    onChange,

    children,
    className,
    dataTest,
    disabled,
    sourceEmptyPlaceholder,
    selectedEmptyComponent,
    enableOrderChange,
    filterLabel,
    filterCallback,
    filterable,
    height,
    initialSearchTerm,
    addAllText,
    addIndividualText,
    removeAllText,
    removeIndividualText,
    leftFooter,
    leftHeader,
    maxSelections,
    optionsWidth,
    rightFooter,
    searchTerm,
    selected,
    selectedWidth,
    hideFilterInput,
    onFilterChange,
}) => {
    /*
     * Used in the "Filter" section and for
     * limiting the selectable source options
     *
     * Filter can be controlled & uncontrolled.
     * Providing the "onFilterChange" callback will make it a controlled value
     */
    const [internalFilter, setInternalFilter] = useState(initialSearchTerm)
    const actualFilter = onFilterChange ? searchTerm : internalFilter

    /*
     * These are all the not-selected option react elements.
     * It will replace all selected options with null
     */
    const sourceOptions = filterOutOptions(children, selected)
    const filteredSourceOptions = getSubsetByFilter({
        reactOptions: sourceOptions,
        filter: actualFilter,
        filterable,
        filterCallback,
    })

    /*
     * Extract the selected options. This way custom options are supported
     * without having to provide a component via the props
     *
     * Children are sorted by the order given in the "selected" array.
     * This is done in order to cover the "append newly selected items
     * at the end" feature/behavior.
     */
    const pickedOptions = extractPickedReactOptions({
        reactOptions: children,
        selectedPlainOptions: selected,
    })

    /*
     * These are all the highlighted option react elements on the options side.
     */
    const {
        highlightedOptions: highlightedSourceOptions,
        setHighlightedOptions: setHighlightedSourceOptions,
        toggleHighlightedOption: toggleHighlightedSourceOption,
    } = useHighlightedOptions({
        reactOptions: filteredSourceOptions,
        disabled,
        maxSelections,
    })

    /*
     * These are all the highlighted option react elements on the selected side.
     */
    const {
        highlightedOptions: highlightedPickedOptions,
        setHighlightedOptions: setHighlightedPickedOptions,
        toggleHighlightedOption: toggleHighlightedPickedOption,
    } = useHighlightedOptions({
        reactOptions: pickedOptions,
        disabled,
        maxSelections,
    })

    const {
        selectSingleOption,
        deselectSingleOption,
    } = createDoubleClickHandlers({
        selectedPlainOptions: selected,
        setHighlightedSourceOptions,
        setHighlightedPickedOptions,
        onChange,
        maxSelections,
    })

    return (
        <Container dataTest={dataTest} className={className} height={height}>
            <LeftSide dataTest={`${dataTest}-leftside`} width={optionsWidth}>
                {(leftHeader || filterable) && (
                    <LeftHeader dataTest={`${dataTest}-leftheader`}>
                        {leftHeader}

                        {filterable && !hideFilterInput && (
                            <Filter
                                label={filterLabel}
                                dataTest={`${dataTest}-filter`}
                                filter={actualFilter}
                                onChange={
                                    onFilterChange
                                        ? onFilterChange
                                        : ({ value }) =>
                                              setInternalFilter(value)
                                }
                            />
                        )}
                    </LeftHeader>
                )}

                <SourceOptions
                    dataTest={`${dataTest}-sourceoptions`}
                    sourceEmptyPlaceholder={sourceEmptyPlaceholder}
                    toggleHighlightedSourceOption={
                        toggleHighlightedSourceOption
                    }
                    highlightedSourceOptions={highlightedSourceOptions}
                    selectSingleOption={selectSingleOption}
                >
                    {filteredSourceOptions}
                </SourceOptions>

                {leftFooter && (
                    <LeftFooter dataTest={`${dataTest}-leftfooter`}>
                        {leftFooter}
                    </LeftFooter>
                )}
            </LeftSide>

            <Actions dataTest={`${dataTest}-actions`}>
                {maxSelections === Infinity && (
                    <AddAll
                        label={addAllText}
                        dataTest={`${dataTest}-actions-addall`}
                        disabled={
                            disabled ||
                            !Children.count(
                                filterReactOptionsBy(
                                    ({ disabled }) => !disabled,
                                    filteredSourceOptions
                                )
                            )
                        }
                        onClick={() =>
                            addAllSelectableSourceOptions({
                                sourceReactOptions: filteredSourceOptions,
                                selectedPlainOptions: selected,
                                onChange,
                                setHighlightedSourceOptions,
                            })
                        }
                    />
                )}

                <AddIndividual
                    label={addIndividualText}
                    dataTest={`${dataTest}-actions-addindividual`}
                    disabled={disabled || !highlightedSourceOptions.length}
                    onClick={() =>
                        addIndividualSourceOptions({
                            filterable,
                            filteredSourcePlainOptions: filteredSourceOptions,
                            highlightedSourcePlainOptions: highlightedSourceOptions,
                            selectedPlainOptions: selected,
                            maxSelections,
                            onChange,
                            setHighlightedSourceOptions,
                        })
                    }
                />

                {maxSelections === Infinity && (
                    <RemoveAll
                        label={removeAllText}
                        dataTest={`${dataTest}-actions-removeall`}
                        disabled={disabled || !selected.length}
                        onClick={() =>
                            removeAllPickedOptions({
                                setHighlightedPickedOptions,
                                onChange,
                            })
                        }
                    />
                )}

                <RemoveIndividual
                    label={removeIndividualText}
                    dataTest={`${dataTest}-actions-removeindividual`}
                    disabled={disabled || !highlightedPickedOptions.length}
                    onClick={() =>
                        removeIndividualPickedOptions({
                            highlightedPickedReactOptions: highlightedPickedOptions,
                            onChange,
                            selectedPlainOptions: selected,
                            setHighlightedPickedOptions,
                        })
                    }
                />
            </Actions>

            <RightSide dataTest={`${dataTest}-rightside`} width={selectedWidth}>
                <PickedOptions
                    dataTest={`${dataTest}-pickedoptions`}
                    selectedEmptyComponent={selectedEmptyComponent}
                    highlightedPickedOptions={highlightedPickedOptions}
                    toggleHighlightedPickedOption={
                        toggleHighlightedPickedOption
                    }
                    deselectSingleOption={deselectSingleOption}
                >
                    {pickedOptions}
                </PickedOptions>

                {(rightFooter || enableOrderChange) && (
                    <RightFooter dataTest={`${dataTest}-rightfooter`}>
                        {enableOrderChange && (
                            <ReorderingActions
                                dataTest={`${dataTest}-reorderingactions`}
                                disabledDown={isReorderDownDisabled({
                                    highlightedPickedPlainOptions: highlightedPickedOptions,
                                    selectedPlainOptions: selected,
                                })}
                                disabledUp={isReorderUpDisabled({
                                    highlightedPickedPlainOptions: highlightedPickedOptions,
                                    selectedPlainOptions: selected,
                                })}
                                onChangeUp={() =>
                                    moveHighlightedPickedOptionUp({
                                        selectedPlainOptions: selected,
                                        highlightedPickedPlainOptions: highlightedPickedOptions,
                                        onChange,
                                    })
                                }
                                onChangeDown={() => {
                                    moveHighlightedPickedOptionDown({
                                        selectedPlainOptions: selected,
                                        highlightedPickedPlainOptions: highlightedPickedOptions,
                                        onChange,
                                    })
                                }}
                            />
                        )}

                        {rightFooter}
                    </RightFooter>
                )}
            </RightSide>
        </Container>
    )
}

Transfer.defaultProps = {
    dataTest: 'dhis2-uicore-transfer',
    initialSearchTerm: '',
    selected: [],
    height: '240px',
    optionsWidth: '320px',
    selectedWidth: '320px',
    maxSelections: Infinity,
    filterCallback: defaultFilterCallback,
}

/**
 * @typedef {Object} PropTypes
 * @static
 *
 * @prop {Function} onChange
 * @prop {string} [addAllText]
 * @prop {string} [addIndividualText]
 * @prop {Node} [children]
 * @prop {string} [className]
 * @prop {string} [dataTest]
 * @prop {Node} [sourceEmptyPlaceholder]
 * @prop {Node} [selectedEmptyComponent]
 * @prop {bool} [hideFilterInput] Automatically true when "hideFilterInput" is true
 * @prop {bool} [enableOrderChange]
 * @prop {string} [filterLabel]
 * @prop {Function} [filterCallback]
 * @prop {string} [height]
 * @prop {bool} [hideFilterInput]
 * @prop {string} [initialSearchTerm]
 * @prop {Node} [leftFooter]
 * @prop {Node} [leftHeader]
 * @prop {1|Infinity} maxSelections
 * @prop {string} [optionsWidth]
 * @prop {string} [removeAllText]
 * @prop {string} [removeIndividualText]
 * @prop {Node} [rightFooter]
 * @prop {string} [searchTerm]
 * @prop {Option|Option[]} selected
 * @prop {string} [selectedWidth]
 * @prop {Function} [onFilterChange]
 */
Transfer.propTypes = {
    onChange: propTypes.func.isRequired,

    addAllText: propTypes.string,
    addIndividualText: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    enableOrderChange: propTypes.bool,
    filterCallback: propTypes.func,
    filterLabel: propTypes.string,
    filterable: propTypes.bool,
    height: propTypes.string,
    hideFilterInput: propTypes.bool,
    initialSearchTerm: propTypes.string,
    leftFooter: propTypes.node,
    leftHeader: propTypes.node,
    maxSelections: propTypes.oneOf([1, Infinity]),
    optionsWidth: propTypes.string,
    removeAllText: propTypes.string,
    removeIndividualText: propTypes.string,
    rightFooter: propTypes.node,
    searchTerm: propTypes.string,
    selected: propTypes.oneOfType([
        singleSelectedPropType,
        multiSelectedPropType,
    ]),
    selectedEmptyComponent: propTypes.node,
    selectedWidth: propTypes.string,
    sourceEmptyPlaceholder: propTypes.node,
    onFilterChange: propTypes.func,
}
