import React, { useState } from 'react'
import propTypes from '@dhis2/prop-types'

import { Actions } from './Actions.js'
import { AddAll } from './AddAll.js'
import { AddIndividual } from './AddIndividual.js'
import { Container } from './Container.js'
import { Filter } from './Filter.js'
import { LeftFooter } from './LeftFooter.js'
import { LeftHeader } from './LeftHeader.js'
import { LeftSide } from './LeftSide.js'
import { PickedOptions } from './PickedOptions.js'
import { RemoveAll } from './RemoveAll.js'
import { RemoveIndividual } from './RemoveIndividual.js'
import { ReorderingActions } from './ReorderingActions.js'
import { RightFooter } from './RightFooter.js'
import { RightSide } from './RightSide.js'
import { SourceOptions } from './SourceOptions.js'
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
    useHighlightedOptions,
} from './Transfer/index.js'
import { isOption } from './common/index.js'

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
    optionComponent: TransferOption,
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
    //const sourceOptions = filterOutOptions(children, selected)
    const sourceOptions = options.filter(
        ({ value }) =>
            !selected.find(selectedOption => selectedOption.value === value)
    )
    const filteredSourceOptions = filterable
        ? filterCallback(sourceOptions, actualFilter)
        : sourceOptions

    /*
     * Extract the selected options. This way custom options are supported
     * without having to provide a component via the props
     *
     * Children are sorted by the order given in the "selected" array.
     * This is done in order to cover the "append newly selected items
     * at the end" feature/behavior.
     */
    const pickedOptions = selected
        .map(selectedOption =>
            options.find(option => option.value === selectedOption.value)
        )
        .filter(v => v)

    /*
     * These are all the highlighted option react elements on the options side.
     */
    const {
        highlightedOptions: highlightedSourceOptions,
        setHighlightedOptions: setHighlightedSourceOptions,
        toggleHighlightedOption: toggleHighlightedSourceOption,
    } = useHighlightedOptions({
        options: filteredSourceOptions,
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
        options: pickedOptions,
        disabled,
        maxSelections,
    })

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
                >
                    {filteredSourceOptions.map(option => {
                        const OptionComponent =
                            option.component || TransferOption

                        return (
                            <OptionComponent
                                key={option.value}
                                disabled={option.disabled}
                                option={option}
                                highlighted={
                                    !!highlightedSourceOptions.find(
                                        highlightedSourceOption =>
                                            isOption(
                                                highlightedSourceOption,
                                                option
                                            )
                                    )
                                }
                                {...getOptionClickHandlers(
                                    option,
                                    selectSingleOption,
                                    toggleHighlightedSourceOption
                                )}
                            />
                        )
                    })}
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
                            filteredSourceOptions.filter(
                                ({ disabled }) => !disabled
                            ).length === 0
                        }
                        onClick={() =>
                            addAllSelectableSourceOptions({
                                sourceOptions: filteredSourceOptions,
                                selectedOptions: selected,
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
                            filteredSourceOptions: filteredSourceOptions,
                            highlightedSourceOptions: highlightedSourceOptions,
                            selectedOptions: selected,
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
                            highlightedPickedOptions: highlightedPickedOptions,
                            onChange,
                            selectedOptions: selected,
                            setHighlightedPickedOptions,
                        })
                    }
                />
            </Actions>

            <RightSide dataTest={`${dataTest}-rightside`} width={selectedWidth}>
                <PickedOptions
                    dataTest={`${dataTest}-pickedoptions`}
                    selectedEmptyComponent={selectedEmptyComponent}
                >
                    {pickedOptions.map(option => {
                        const OptionComponent =
                            option.component || TransferOption

                        return (
                            <OptionComponent
                                key={option.value}
                                disabled={option.disabled}
                                option={option}
                                highlighted={
                                    !!highlightedPickedOptions.find(
                                        highlightedPickedOption =>
                                            isOption(
                                                highlightedPickedOption,
                                                option
                                            )
                                    )
                                }
                                {...getOptionClickHandlers(
                                    option,
                                    deselectSingleOption,
                                    toggleHighlightedPickedOption
                                )}
                            />
                        )
                    })}
                </PickedOptions>

                {(rightFooter || enableOrderChange) && (
                    <RightFooter dataTest={`${dataTest}-rightfooter`}>
                        {enableOrderChange && (
                            <ReorderingActions
                                dataTest={`${dataTest}-reorderingactions`}
                                disabledDown={isReorderDownDisabled({
                                    highlightedPickedOptions: highlightedPickedOptions,
                                    selectedOptions: selected,
                                })}
                                disabledUp={isReorderUpDisabled({
                                    highlightedPickedOptions: highlightedPickedOptions,
                                    selectedOptions: selected,
                                })}
                                onChangeUp={() =>
                                    moveHighlightedPickedOptionUp({
                                        selectedOptions: selected,
                                        highlightedPickedOptions: highlightedPickedOptions,
                                        onChange,
                                    })
                                }
                                onChangeDown={() => {
                                    moveHighlightedPickedOptionDown({
                                        selectedOptions: selected,
                                        highlightedPickedOptions: highlightedPickedOptions,
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
    optionComponent: TransferOption,
    optionsWidth: '320px',
    selectedWidth: '320px',
    maxSelections: Infinity,
    filterCallback: defaultFilterCallback,
}

// TODO: This will be refactored away to match the MultiSelect
export const singleSelectedPropType = propTypes.shape({
    label: propTypes.string,
    value: propTypes.string,
})

export const multiSelectedPropType = propTypes.arrayOf(singleSelectedPropType)
// ODOT

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
 * @prop {Object[]} selected
 * @prop {string} [selectedWidth]
 * @prop {Function} [onFilterChange]
 */
Transfer.propTypes = {
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            component: propTypes.func,
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
    filterLabel: propTypes.string,
    filterable: propTypes.bool,
    height: propTypes.string,
    hideFilterInput: propTypes.bool,
    initialSearchTerm: propTypes.string,
    leftFooter: propTypes.node,
    leftHeader: propTypes.node,
    maxSelections: propTypes.oneOf([1, Infinity]),
    optionComponent: propTypes.func,
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
