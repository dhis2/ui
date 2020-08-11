import React from 'react'
import propTypes from '@dhis2/prop-types'

import { Actions } from './Actions.js'
import { AddAll } from './AddAll.js'
import { AddIndividual } from './AddIndividual.js'
import { Container } from './Container.js'
import { Filter } from './Filter.js'
import { LeftFooter } from './LeftFooter.js'
import { LeftHeader } from './LeftHeader.js'
import { LeftSide } from './LeftSide.js'
import { OptionsContainer } from './OptionsContainer.js'
import { RemoveAll } from './RemoveAll.js'
import { RemoveIndividual } from './RemoveIndividual.js'
import { ReorderingActions } from './ReorderingActions.js'
import { RightHeader } from './RightHeader.js'
import { RightFooter } from './RightFooter.js'
import { RightSide } from './RightSide.js'
import { TransferOption } from './TransferOption.js'
import {
    addAllSelectableSourceOptions,
    addIndividualSourceOptions,
    createDoubleClickHandlers,
    defaultFilterCallback,
    getOptionClickHandlers,
    isReorderDownDisabled,
    isReorderUpDisabled,
    moveHighlightedPickedOptionDown,
    moveHighlightedPickedOptionUp,
    removeAllPickedOptions,
    removeIndividualPickedOptions,
    useFilter,
    useHighlightedOptions,
} from './Transfer/index.js'

const identity = value => value

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
    options,
    onChange,

    addAllText,
    addIndividualText,
    className,
    dataTest,
    disabled,
    enableOrderChange,
    filterCallback,
    filterCallbackPicked,
    filterLabel,
    filterLabelPicked,
    filterPlaceholder,
    filterPlaceholderPicked,
    filterable,
    filterablePicked,
    height,
    hideFilterInput,
    hideFilterInputPicked,
    initialSearchTerm,
    initialSearchTermPicked,
    leftFooter,
    leftHeader,
    loadingPicked,
    loadingSource,
    maxSelections,
    optionsWidth,
    removeAllText,
    removeIndividualText,
    renderOption,
    rightFooter,
    rightHeader,
    searchTerm,
    searchTermPicked,
    selected,
    selectedEmptyComponent,
    selectedWidth,
    sourceEmptyPlaceholder,
    onFilterChange,
    onFilterPickedChange,
    onSourceEndReached,
    onPickedEndReached,
}) => {
    /* Source options search value:
     * Depending on whether the onFilterChange callback has been provided
     * either the internal or external search value is used */
    const {
        filterValue: actualFilter,
        filter: actualFilterCallback,
        setInternalFilter,
    } = useFilter({
        initialSearchTerm,
        onFilterChange,
        externalSearchTerm: searchTerm,
        filterable,
        filterCallback,
    })

    /*
     * Actual source options:
     * Extract the not-selected options.
     * Filters options if filterable is true.
     */
    const sourceOptions = actualFilterCallback(
        options.filter(({ value }) => !selected.includes(value)),
        actualFilter
    )

    /*
     * Picked options highlighting:
     * These are all the highlighted options on the options side.
     */
    const {
        highlightedOptions: highlightedSourceOptions,
        setHighlightedOptions: setHighlightedSourceOptions,
        toggleHighlightedOption: toggleHighlightedSourceOption,
    } = useHighlightedOptions({
        options: sourceOptions,
        disabled,
        maxSelections,
    })

    /* Picked options search value:
     * Depending on whether the onFilterPickedChange callback has been provided
     * either the internal or external search value is used */
    const {
        filterValue: actualFilterPicked,
        filter: actualFilterPickedCallback,
        setInternalFilter: setInternalFilterPicked,
    } = useFilter({
        filterable: filterablePicked,
        initialSearchTerm: initialSearchTermPicked,
        onFilterChange: onFilterPickedChange,
        externalSearchTerm: searchTermPicked,
        filterCallback: filterCallbackPicked,
    })

    /*
     * Actual picked options:
     * Extract the selected options. Can't use `options.filter`
     * because we need to keep the order of `selected`
     */
    const pickedOptions = actualFilterPickedCallback(
        selected
            .map(value => options.find(option => value === option.value))
            // filter -> in case a selected value has been provided
            // that does not exist as option
            .filter(identity),
        actualFilterPicked
    )

    /*
     * Source options highlighting:
     * These are all the highlighted options on the selected side.
     */
    const {
        highlightedOptions: highlightedPickedOptions,
        setHighlightedOptions: setHighlightedPickedOptions,
        toggleHighlightedOption: toggleHighlightedPickedOption,
    } = useHighlightedOptions({
        options: pickedOptions,
        disabled,
        maxSelections,
    })

    /*
     * Source & Picked options:
     * These are the double click handlers for (de-)selection
     */
    const {
        selectSingleOption,
        deselectSingleOption,
    } = createDoubleClickHandlers({
        selected,
        setHighlightedSourceOptions,
        setHighlightedPickedOptions,
        onChange,
        maxSelections,
    })

    /**
     * Disabled button states
     */
    const isAddAllDisabled =
        disabled ||
        sourceOptions.filter(({ disabled }) => !disabled).length === 0
    const isAddIndividualDisabled = disabled || !highlightedSourceOptions.length
    const isRemoveAllDisabled = disabled || !selected.length
    const isRemoveIndividualDisabled =
        disabled || !highlightedPickedOptions.length

    return (
        <Container dataTest={dataTest} className={className} height={height}>
            <LeftSide dataTest={`${dataTest}-leftside`} width={optionsWidth}>
                {(leftHeader || filterable) && (
                    <LeftHeader dataTest={`${dataTest}-leftheader`}>
                        {leftHeader}

                        {filterable && !hideFilterInput && (
                            <Filter
                                label={filterLabel}
                                placeholder={filterPlaceholder}
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

                <OptionsContainer
                    dataTest={`${dataTest}-sourceoptions`}
                    emptyComponent={sourceEmptyPlaceholder}
                    getOptionClickHandlers={getOptionClickHandlers}
                    highlightedOptions={highlightedSourceOptions}
                    loading={loadingSource}
                    options={sourceOptions}
                    renderOption={renderOption}
                    selectionHandler={selectSingleOption}
                    toggleHighlightedOption={toggleHighlightedSourceOption}
                    onEndReached={onSourceEndReached}
                />

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
                        disabled={isAddAllDisabled}
                        onClick={() =>
                            addAllSelectableSourceOptions({
                                sourceOptions,
                                selected,
                                onChange,
                                setHighlightedSourceOptions,
                            })
                        }
                    />
                )}

                <AddIndividual
                    label={addIndividualText}
                    dataTest={`${dataTest}-actions-addindividual`}
                    disabled={isAddIndividualDisabled}
                    onClick={() =>
                        addIndividualSourceOptions({
                            filterable,
                            sourceOptions,
                            highlightedSourceOptions,
                            selected,
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
                        disabled={isRemoveAllDisabled}
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
                    disabled={isRemoveIndividualDisabled}
                    onClick={() =>
                        removeIndividualPickedOptions({
                            filterablePicked,
                            pickedOptions,
                            highlightedPickedOptions,
                            onChange,
                            selected,
                            setHighlightedPickedOptions,
                        })
                    }
                />
            </Actions>

            <RightSide dataTest={`${dataTest}-rightside`} width={selectedWidth}>
                {(rightHeader || filterablePicked) && (
                    <RightHeader dataTest={`${dataTest}-rightheader`}>
                        {rightHeader}

                        {filterablePicked && !hideFilterInputPicked && (
                            <Filter
                                label={filterLabelPicked}
                                placeholder={filterPlaceholderPicked}
                                dataTest={`${dataTest}-filter`}
                                filter={actualFilterPicked}
                                onChange={
                                    onFilterPickedChange
                                        ? onFilterPickedChange
                                        : ({ value }) =>
                                              setInternalFilterPicked(value)
                                }
                            />
                        )}
                    </RightHeader>
                )}

                <OptionsContainer
                    dataTest={`${dataTest}-pickedoptions`}
                    emptyComponent={selectedEmptyComponent}
                    getOptionClickHandlers={getOptionClickHandlers}
                    highlightedOptions={highlightedPickedOptions}
                    loading={loadingPicked}
                    options={pickedOptions}
                    renderOption={renderOption}
                    selectionHandler={deselectSingleOption}
                    toggleHighlightedOption={toggleHighlightedPickedOption}
                    onEndReached={onPickedEndReached}
                />

                {(rightFooter || enableOrderChange) && (
                    <RightFooter dataTest={`${dataTest}-rightfooter`}>
                        {enableOrderChange && (
                            <ReorderingActions
                                dataTest={`${dataTest}-reorderingactions`}
                                disabledDown={isReorderDownDisabled({
                                    highlightedPickedOptions,
                                    selected,
                                })}
                                disabledUp={isReorderUpDisabled({
                                    highlightedPickedOptions,
                                    selected,
                                })}
                                onChangeUp={() =>
                                    moveHighlightedPickedOptionUp({
                                        selected,
                                        highlightedPickedOptions,
                                        onChange,
                                    })
                                }
                                onChangeDown={() => {
                                    moveHighlightedPickedOptionDown({
                                        selected,
                                        highlightedPickedOptions,
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

const defaultRenderOption = option => <TransferOption {...option} />

Transfer.defaultProps = {
    dataTest: 'dhis2-uicore-transfer',
    height: '240px',
    initialSearchTerm: '',
    initialSearchTermPicked: '',
    maxSelections: Infinity,
    optionsWidth: '320px',
    renderOption: defaultRenderOption,
    selected: [],
    selectedWidth: '320px',
    filterCallback: defaultFilterCallback,
    filterCallbackPicked: defaultFilterCallback,
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
 * @prop {string} [filterPlaceholder]
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
 * @prop {Node} [rightHeader]
 * @prop {Node} [rightFooter]
 * @prop {string} [searchTerm]
 * @prop {string[]} selected
 * @prop {string} [selectedWidth]
 * @prop {Function} [onFilterChange]
 */
Transfer.propTypes = {
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            disabled: propTypes.bool,
        })
    ).isRequired,
    onChange: propTypes.func.isRequired,

    addAllText: propTypes.string,
    addIndividualText: propTypes.string,
    className: propTypes.string,
    dataTest: propTypes.string,
    disabled: propTypes.bool,
    enableOrderChange: propTypes.bool,
    filterCallback: propTypes.func,
    filterCallbackPicked: propTypes.func,
    filterLabel: propTypes.string,
    filterLabelPicked: propTypes.string,
    filterPlaceholder: propTypes.string,
    filterPlaceholderPicked: propTypes.string,
    filterable: propTypes.bool,
    filterablePicked: propTypes.bool,
    height: propTypes.string,
    hideFilterInput: propTypes.bool,
    hideFilterInputPicked: propTypes.bool,
    initialSearchTerm: propTypes.string,
    initialSearchTermPicked: propTypes.string,
    leftFooter: propTypes.node,
    leftHeader: propTypes.node,
    loadingPicked: propTypes.bool,
    loadingSource: propTypes.bool,
    maxSelections: propTypes.oneOf([1, Infinity]),
    optionsWidth: propTypes.string,
    removeAllText: propTypes.string,
    removeIndividualText: propTypes.string,
    renderOption: propTypes.func,
    rightFooter: propTypes.node,
    rightHeader: propTypes.node,
    searchTerm: propTypes.string,
    searchTermPicked: propTypes.string,
    selected: propTypes.arrayOf(propTypes.string),
    selectedEmptyComponent: propTypes.node,
    selectedWidth: propTypes.string,
    sourceEmptyPlaceholder: propTypes.node,
    onFilterChange: propTypes.func,
    onFilterPickedChange: propTypes.func,
    onPickedEndReached: propTypes.func,
    onSourceEndReached: propTypes.func,
}
