import { spacers } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React, { Fragment, useRef } from 'react'
import { EndIntersectionDetector } from './end-intersection-detector.js'
import { useResizeCounter } from './use-resize-counter.js'

export const OptionsContainer = ({
    dataTest,
    emptyComponent,
    onEndReached,
    getOptionClickHandlers,
    highlightedOptions,
    loading,
    maxSelections,
    renderOption,
    options,
    selected,
    selectionHandler,
    setHighlightedOptions,
    toggleHighlightedOption,
}) => {
    const optionsRef = useRef(null)
    const wrapperRef = useRef(null)
    const resizeCounter = useResizeCounter(wrapperRef.current)

    return (
        <div className="optionsContainer">
            {loading && (
                <div className="loading">
                    <CircularLoader />
                </div>
            )}

            <div className="container" data-test={dataTest} ref={optionsRef}>
                {!options.length && emptyComponent}
                {!!options.length && (
                    <select
                        multiple={maxSelections === Infinity}
                        size={maxSelections === 1 ? 2 : undefined}
                        className="content-container"
                        ref={wrapperRef}
                        onChange={(e) => {
                            const nextSelected = [...e.target.options].reduce(
                                (curNextSelected, option) => {
                                    if (!option.selected) {
                                        return curNextSelected
                                    }

                                    return [...curNextSelected, option.value]
                                },
                                []
                            )
                            setHighlightedOptions(nextSelected)
                        }}
                    >
                        {options.map((option, index) => {
                            const isLast = index === options.length - 1
                            const highlighted = !!highlightedOptions.find(
                                (highlightedSourceOption) =>
                                    highlightedSourceOption === option.value
                            )

                            return (
                                <Fragment key={option.value}>
                                    {renderOption({
                                        ...option,
                                        ...getOptionClickHandlers(
                                            option,
                                            selectionHandler,
                                            toggleHighlightedOption
                                        ),
                                        highlighted,
                                        selected,
                                    })}
                                </Fragment>
                            )
                        })}
                    </select>
                )}
            </div>

            <style jsx>{`
                .optionsContainer {
                    flex-grow: 1;
                    position: relative;
                    overflow: hidden;
                }

                .container {
                    overflow: hidden;
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
                    height: 100%;
                    width: 100%;
                    overflow: auto;
                    border: 0;
                    padding: ${spacers.dp4} 0;
                }

                .loading + .container .content-container {
                    filter: blur(2px);
                }
            `}</style>
        </div>
    )
}

OptionsContainer.defaultProps = {
    selected: false,
}

OptionsContainer.propTypes = {
    dataTest: PropTypes.string.isRequired,
    getOptionClickHandlers: PropTypes.func.isRequired,
    maxSelections: PropTypes.oneOf([1, Infinity]).isRequired,
    setHighlightedOptions: PropTypes.func.isRequired,
    emptyComponent: PropTypes.node,
    highlightedOptions: PropTypes.arrayOf(PropTypes.string),
    loading: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
    renderOption: PropTypes.func,
    selected: PropTypes.bool,
    selectionHandler: PropTypes.func,
    toggleHighlightedOption: PropTypes.func,
    onEndReached: PropTypes.func,
}
