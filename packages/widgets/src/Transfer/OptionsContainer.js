import { CircularLoader } from '@dhis2/ui-core'
import { spacers } from '@dhis2/ui-constants'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import propTypes from '@dhis2/prop-types'

import { EndIntersectionDetector } from './EndIntersectionDetector.js'

export const OptionsContainer = ({
    dataTest,
    emptyComponent,
    onEndReached,
    getOptionClickHandlers,
    highlightedOptions,
    loading,
    renderOption,
    options,
    selectionHandler,
    toggleHighlightedOption,
}) => {
    const [remountCounter, setRemountCounter] = useState(0)
    const [resizeObserver, setResizeObserver] = useState(null)
    const optionsRef = useRef(null)
    const wrapperRef = useRef(null)

    useEffect(() => {
        if (onEndReached && wrapperRef.current) {
            // The initial call is irrelevant as there has been
            // no resize yet that we want to react to
            let firstCall = false

            const observer = new ResizeObserver(() => {
                if (!firstCall) {
                    const newCounter = remountCounter + 1
                    setRemountCounter(newCounter)
                    firstCall = true
                }
            })

            observer.observe(wrapperRef.current)
            setResizeObserver(observer)

            return () => observer.disconnect()
        }
    }, [onEndReached, wrapperRef.current, setRemountCounter])

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
                                    selected: false,
                                })}
                            </Fragment>
                        )
                    })}

                    {onEndReached && resizeObserver && (
                        <EndIntersectionDetector
                            dataTest={`${dataTest}-endintersectiondetector`}
                            key={`key-${remountCounter}`}
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

OptionsContainer.propTypes = {
    dataTest: propTypes.string.isRequired,
    getOptionClickHandlers: propTypes.func.isRequired,
    emptyComponent: propTypes.node,
    highlightedOptions: propTypes.arrayOf(propTypes.string),
    loading: propTypes.bool,
    options: propTypes.arrayOf(
        propTypes.shape({
            label: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
        })
    ),
    renderOption: propTypes.func,
    selectionHandler: propTypes.func,
    toggleHighlightedOption: propTypes.func,
    onEndReached: propTypes.func,
}
