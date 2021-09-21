import { CircularLoader } from '@dhis2-ui/loader'
import { spacers } from '@dhis2/ui-constants'
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
    renderOption,
    options,
    selected,
    selectionHandler,
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
                <div className="content-container" ref={wrapperRef}>
                    {!options.length && emptyComponent}
                    {options.map(option => {
                        const highlighted = !!highlightedOptions.find(
                            highlightedSourceOption =>
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

                    {onEndReached && (
                        <EndIntersectionDetector
                            dataTest={`${dataTest}-endintersectiondetector`}
                            key={`key-${resizeCounter}`}
                            rootRef={optionsRef}
                            onEndReached={onEndReached}
                        />
                    )}
                </div>
            </div>

            <style jsx>{`
                .optionsContainer {
                    flex-grow: 1;
                    padding: ${spacers.dp4} 0;
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
                    left: 0;
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

OptionsContainer.defaultProps = {
    selected: false,
}

OptionsContainer.propTypes = {
    dataTest: PropTypes.string.isRequired,
    getOptionClickHandlers: PropTypes.func.isRequired,
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
