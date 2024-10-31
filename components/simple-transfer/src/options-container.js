import { spacers } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useRef } from 'react'
import { SimpleTransferOption } from './simple-transfer-option.js'

export const OptionsContainer = ({
    dataTest,
    emptyComponent,
    onEndReached,
    highlightedOptions,
    loading,
    maxSelections,
    options,
    selected = false,
    selectionHandler,
    setHighlightedOptions,
}) => {
    const selectRef = useRef(null)
    const wrapperRef = useRef(null)
    // const resizeCounter = useResizeCounter(wrapperRef.current)
    const lastOptionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        onEndReached && onEndReached()
                    }
                })
            },
            {
                root: wrapperRef.current,
                threshold: 1.0,
            }
        )

        if (lastOptionRef.current) {
            observer.observe(lastOptionRef.current)
        }

        return () => {
            if (lastOptionRef.current) {
                observer.unobserve(lastOptionRef.current)
            }
            observer.disconnect()
        }
    }, [options])

    return (
        <div className="optionsContainer">
            {loading && (
                <div className="loading">
                    <CircularLoader />
                </div>
            )}

            <div className="container" data-test={dataTest} ref={wrapperRef}>
                {!options.length && emptyComponent}
                {!!options.length && (
                    <select
                        ref={selectRef}
                        className="content-select"
                        multiple={maxSelections === Infinity}
                        size={maxSelections === 1 ? 2 : undefined}
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
                            const highlighted = !!highlightedOptions.find(
                                (highlightedSourceOption) =>
                                    highlightedSourceOption === option.value
                            )

                            return (
                                <Fragment key={option.value}>
                                    <SimpleTransferOption
                                        label={option.label}
                                        value={option.value}
                                        highlighted={highlighted}
                                        selected={selected}
                                        onDoubleClick={selectionHandler}
                                        lastOptionReference={
                                            index === options.length - 1
                                                ? lastOptionRef
                                                : undefined
                                        }
                                    />
                                </Fragment>
                            )
                        })}
                    </select>
                )}
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
                    inset-inline-start: 0;
                }

                .content-select {
                    border: none;
                    position: relative;
                    height: 100%;
                    width: 100%;
                }

                .loading + .container .content-container {
                    filter: blur(2px);
                }
            `}</style>
        </div>
    )
}

OptionsContainer.propTypes = {
    dataTest: PropTypes.string.isRequired,
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
    selected: PropTypes.bool,
    selectionHandler: PropTypes.func,
    onEndReached: PropTypes.func,
}
