import React, { useMemo } from 'react'
import { Actions } from './actions.tsx'
import { AddAll } from './add-all.tsx'
import { AddIndividual } from './add-individual.tsx'
import { Container } from './container.tsx'
import { Filter } from './filter.tsx'
import { LeftFooter } from './left-footer.tsx'
import { LeftHeader } from './left-header.tsx'
import { LeftSide } from './left-side.tsx'
import { OptionsContainer } from './options-container.tsx'
import { RemoveAll } from './remove-all.tsx'
import { RemoveIndividual } from './remove-individual.tsx'
import { ReorderingActions } from './reordering-actions.tsx'
import { RightFooter } from './right-footer.tsx'
import { RightHeader } from './right-header.tsx'
import { RightSide } from './right-side.tsx'
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
} from './transfer/index.ts'
import { TransferOption } from './transfer-option.tsx'

interface TransferOptionType {
    label: string
    value: string
    disabled?: boolean
}

const identity = <T,>(value: T): T => value
const defaultSelected: string[] = []
const defaultSelectedOptionsLookup: Record<string, TransferOptionType> = {}

export interface TransferProps {
    options: TransferOptionType[]
    onChange: (payload: { selected: string[] }) => void

    addAllText?: string
    addIndividualText?: string
    className?: string
    dataTest?: string
    disabled?: boolean
    enableOrderChange?: boolean
    filterCallback?: (
        options: TransferOptionType[],
        filter: string
    ) => TransferOptionType[]
    filterCallbackPicked?: (
        options: TransferOptionType[],
        filter: string
    ) => TransferOptionType[]
    filterLabel?: string
    filterLabelPicked?: string
    filterPlaceholder?: string
    filterPlaceholderPicked?: string
    filterable?: boolean
    filterablePicked?: boolean
    height?: string
    hideFilterInput?: boolean
    hideFilterInputPicked?: boolean
    initialSearchTerm?: string
    initialSearchTermPicked?: string
    selectedOptionsLookup?: Record<string, TransferOptionType>
    leftFooter?: React.ReactNode
    leftHeader?: React.ReactNode
    loadingPicked?: boolean
    loading?: boolean
    maxSelections?: number
    optionsWidth?: string
    removeAllText?: string
    removeIndividualText?: string
    renderOption?: (
        option: TransferOptionType & {
            onClick?: (
                payload: { value: string },
                event: React.MouseEvent<HTMLDivElement>
            ) => void
            onDoubleClick?: (
                payload: { value: string },
                ...args: unknown[]
            ) => void
            highlighted: boolean
            selected: boolean
        }
    ) => React.ReactNode
    rightFooter?: React.ReactNode
    rightHeader?: React.ReactNode
    searchTerm?: string
    searchTermPicked?: string
    selected?: string[]
    selectedEmptyComponent?: React.ReactNode
    /**
     * To be used in scenarios where selected options may not be present
     * in the options array. Like when having options that lazy load or can
     * be filtered async.
     */
    selectedWidth?: string
    sourceEmptyPlaceholder?: React.ReactNode
    onFilterChange?: (payload: { value: string }) => void
    onFilterChangePicked?: (payload: { value: string }) => void
    onEndReached?: () => void
    onEndReachedPicked?: () => void
}

export const Transfer = ({
    options,
    onChange,

    addAllText,
    addIndividualText,
    className,
    dataTest = 'dhis2-uicore-transfer',
    disabled,
    enableOrderChange,
    filterCallback = defaultFilterCallback,
    filterCallbackPicked = defaultFilterCallback,
    filterLabel,
    filterLabelPicked,
    filterPlaceholder,
    filterPlaceholderPicked,
    filterable,
    filterablePicked,
    height = '240px',
    hideFilterInput,
    hideFilterInputPicked,
    initialSearchTerm = '',
    initialSearchTermPicked = '',
    selectedOptionsLookup = defaultSelectedOptionsLookup,
    leftFooter,
    leftHeader,
    loadingPicked,
    loading,
    maxSelections = Infinity,
    optionsWidth = '320px',
    removeAllText,
    removeIndividualText,
    renderOption = defaultRenderOption,
    rightFooter,
    rightHeader,
    searchTerm,
    searchTermPicked,
    selected = defaultSelected,
    selectedEmptyComponent,
    selectedWidth = '320px',
    sourceEmptyPlaceholder,
    onFilterChange,
    onFilterChangePicked,
    onEndReached,
    onEndReachedPicked,
}: TransferProps) => {
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

    const sourceOptions = (
        actualFilterCallback as (
            options: TransferOptionType[],
            filter: string
        ) => TransferOptionType[]
    )(
        options.filter(({ value }) => !selected.includes(value)),
        actualFilter as string
    )

    const {
        highlightedOptions: highlightedSourceOptions,
        setHighlightedOptions: setHighlightedSourceOptions,
        toggleHighlightedOption: toggleHighlightedSourceOption,
    } = useHighlightedOptions({
        options: sourceOptions,
        disabled,
        maxSelections,
    })

    const {
        filterValue: actualFilterPicked,
        filter: actualFilterPickedCallback,
        setInternalFilter: setInternalFilterPicked,
    } = useFilter({
        filterable: filterablePicked,
        initialSearchTerm: initialSearchTermPicked,
        onFilterChange: onFilterChangePicked,
        externalSearchTerm: searchTermPicked,
        filterCallback: filterCallbackPicked,
    })

    const pickedOptions = useMemo(
        () =>
            Array.isArray(selected)
                ? (
                      actualFilterPickedCallback as (
                          options: TransferOptionType[],
                          filter: string
                      ) => TransferOptionType[]
                  )(
                      selected
                          .map(
                              (value) =>
                                  selectedOptionsLookup[value] ??
                                  options.find(
                                      (option) => value === option.value
                                  )
                          )
                          .filter(identity) as TransferOptionType[],
                      actualFilterPicked as string
                  )
                : [],
        [
            selected,
            options,
            actualFilterPicked,
            actualFilterPickedCallback,
            selectedOptionsLookup,
        ]
    )

    const {
        highlightedOptions: highlightedPickedOptions,
        setHighlightedOptions: setHighlightedPickedOptions,
        toggleHighlightedOption: toggleHighlightedPickedOption,
    } = useHighlightedOptions({
        options: pickedOptions,
        disabled,
        maxSelections,
    })

    const { selectSingleOption, deselectSingleOption } =
        createDoubleClickHandlers({
            selected,
            setHighlightedSourceOptions,
            setHighlightedPickedOptions,
            onChange,
            maxSelections,
        })

    const isAddAllDisabled =
        disabled ||
        sourceOptions.filter(({ disabled }) => !disabled).length === 0
    const isAddIndividualDisabled = disabled || !highlightedSourceOptions.length
    const isRemoveAllDisabled = disabled || !selected.length
    const isRemoveIndividualDisabled =
        disabled || !highlightedPickedOptions.length

    const allOptionsKey = useMemo(
        () => options.map(({ value }) => value).join('|'),
        [options]
    )
    const pickedOptionsKey = useMemo(
        () => pickedOptions.map(({ value }) => value).join('|'),
        [pickedOptions]
    )

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
                                filter={actualFilter as string}
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
                    allOptionsKey={allOptionsKey}
                    dataTest={`${dataTest}-sourceoptions`}
                    emptyComponent={sourceEmptyPlaceholder}
                    getOptionClickHandlers={getOptionClickHandlers}
                    highlightedOptions={highlightedSourceOptions}
                    loading={loading}
                    options={sourceOptions}
                    renderOption={renderOption}
                    selectionHandler={selectSingleOption}
                    toggleHighlightedOption={toggleHighlightedSourceOption}
                    onEndReached={onEndReached}
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
                                filter={actualFilterPicked as string}
                                onChange={
                                    onFilterChangePicked
                                        ? onFilterChangePicked
                                        : ({ value }) =>
                                              setInternalFilterPicked(value)
                                }
                            />
                        )}
                    </RightHeader>
                )}

                <OptionsContainer
                    selected
                    allOptionsKey={pickedOptionsKey}
                    dataTest={`${dataTest}-pickedoptions`}
                    emptyComponent={selectedEmptyComponent}
                    getOptionClickHandlers={getOptionClickHandlers}
                    highlightedOptions={highlightedPickedOptions}
                    loading={loadingPicked}
                    options={pickedOptions}
                    renderOption={renderOption}
                    selectionHandler={deselectSingleOption}
                    toggleHighlightedOption={toggleHighlightedPickedOption}
                    onEndReached={onEndReachedPicked}
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

const defaultRenderOption = (
    option: TransferOptionType & {
        onClick?: (
            payload: { value: string },
            event: React.MouseEvent<HTMLDivElement>
        ) => void
        onDoubleClick?: (payload: { value: string }, ...args: unknown[]) => void
        highlighted: boolean
        selected: boolean
    }
) => <TransferOption {...option} />
