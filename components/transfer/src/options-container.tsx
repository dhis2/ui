import { CircularLoader } from '@dhis2-ui/loader'
import React, { Fragment, useRef } from 'react'
import { EndIntersectionDetector } from './end-intersection-detector.tsx'
import { useOptionsKeyMonitor } from './transfer/use-options-key-monitor.tsx'

interface OptionObject {
    label: string
    value: string
    disabled?: boolean
}

type OptionClickHandler = (payload: { value: string }, event: React.MouseEvent<HTMLDivElement>) => void
type OptionDoubleClickHandler = (payload: { value: string }, ...args: unknown[]) => void

interface OptionClickHandlers {
    onClick: OptionClickHandler | undefined
    onDoubleClick: OptionDoubleClickHandler | undefined
}

export interface OptionsContainerProps {
    allOptionsKey: string
    dataTest: string
    getOptionClickHandlers: (
        option: OptionObject,
        selectionHandler: ((payload: { value: string }) => void) | undefined,
        toggleHighlightedOption: (args: { option: OptionObject; mode: string }) => void
    ) => OptionClickHandlers
    emptyComponent?: React.ReactNode
    highlightedOptions?: string[]
    loading?: boolean
    options?: OptionObject[]
    renderOption?: (option: OptionObject & OptionClickHandlers & { highlighted: boolean; selected: boolean }) => React.ReactNode
    selected?: boolean
    selectionHandler?: (payload: { value: string }) => void
    toggleHighlightedOption?: (args: { option: OptionObject; mode: string }) => void
    onEndReached?: () => void
}

export const OptionsContainer = ({
    allOptionsKey,
    dataTest,
    emptyComponent,
    onEndReached,
    getOptionClickHandlers,
    highlightedOptions = [],
    loading,
    renderOption,
    options = [],
    selected = false,
    selectionHandler,
    toggleHighlightedOption,
}: OptionsContainerProps) => {
    const scrollBoxRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    useOptionsKeyMonitor({
        scrollBoxRef,
        listRef,
        allOptionsKey,
        onEndReached,
    })
    return (
        <div className="optionsContainer">
            {loading && (
                <div className="loading">
                    <CircularLoader />
                </div>
            )}

            <div className="container" data-test={dataTest} ref={scrollBoxRef}>
                <div className="content-container" ref={listRef}>
                    {!options.length && emptyComponent}
                    {options.map((option) => {
                        const highlighted = !!highlightedOptions.find(
                            (highlightedSourceOption) =>
                                highlightedSourceOption === option.value
                        )

                        return (
                            <Fragment key={option.value}>
                                {renderOption?.({
                                    ...option,
                                    ...getOptionClickHandlers(
                                        option,
                                        selectionHandler,
                                        toggleHighlightedOption!
                                    ),
                                    highlighted,
                                    selected,
                                })}
                            </Fragment>
                        )
                    })}

                    {onEndReached && (
                        <EndIntersectionDetector
                            dataTest={`${dataTest}-endintersectiondetector`}
                            rootRef={scrollBoxRef as React.RefObject<HTMLElement>}
                            onEndReached={onEndReached}
                        />
                    )}
                </div>
            </div>

            <style jsx>{`
                .optionsContainer {
                    flex-grow: 1;
                    position: relative;
                    overflow: hidden;
                }

                .container {
                    overflow-y: auto;
                    height: 100%;
                }

                .loading {
                    display: flex;
                    height: 100%;
                    width: 100%;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    z-index: 2;
                    top: 0;
                    inset-inline-start: 0;
                }

                .content-container {
                    z-index: 1;
                    position: relative;
                }

                .loading + .container .content-container {
                    filter: blur(2px);
                }
            `}</style>
        </div>
    )
}
