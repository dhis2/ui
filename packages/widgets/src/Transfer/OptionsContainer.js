import { CircularLoader } from '@dhis2/ui-core'
import { spacers } from '@dhis2/ui-constants'
import React, { Fragment, useRef } from 'react'
import propTypes from '@dhis2/prop-types'

import { EndIntersectionDetector } from './EndIntersectionDetector.js'
import { useResizeCounter } from './useResizeCounter'

export const OptionsContainer = ({
    cursor,
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

    useEffect(() => {
        console.log(
            'cursor === 0 && wrapperRef.current',
            !!(cursor === 0 && wrapperRef.current)
        )
        if (cursor === 0 && wrapperRef.current) {
            // scrollTop
            wrapperRef.current.scrollTo(0, 0)
        }
    }, [cursor, options, wrapperRef.current])

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
    cursor: 0,
    selected: false,
}

OptionsContainer.propTypes = {
    dataTest: propTypes.string.isRequired,
    getOptionClickHandlers: propTypes.func.isRequired,
    cursor: propTypes.number,
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
    selected: propTypes.bool,
    selectionHandler: propTypes.func,
    toggleHighlightedOption: propTypes.func,
    onEndReached: propTypes.func,
}
