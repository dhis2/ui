import { spacers } from '@dhis2/ui-constants'
import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React, { Fragment, useEffect, useRef } from 'react'
import { SimpleTransferOption } from './simple-transfer-option.js'

export const OptionsContainer = ({
    dataTest,
    emptyComponent,
    onEndReached,
    loading,
    maxSelections,
    options,
    selectionHandler,
    setHighlightedOptions,
}) => {
    const selectRef = useRef(null)
    const wrapperRef = useRef(null)
    const lastOptionRef = useRef(null)
    const hasEndReachedRef = useRef(false)

    useEffect(() => {
        hasEndReachedRef.current = false
        const lastOption = lastOptionRef.current

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasEndReachedRef.current) {
                        if (onEndReached) {
                            onEndReached()
                            hasEndReachedRef.current = true
                        }
                    }
                })
            },
            {
                root: wrapperRef.current,
                threshold: 1.0,
            }
        )

        if (lastOption) {
            observer.observe(lastOption)
        }

        return () => {
            if (lastOption) {
                observer.unobserve(lastOption)
            }
            observer.disconnect()
        }
    }, [options.length])

    useEffect(() => {
        hasEndReachedRef.current = false
    }, [options.length])

    return (
        <div className="optionsContainer">
            {loading && (
                <div className="loading">
                    <CircularLoader />
                </div>
            )}

            <div className="container" ref={wrapperRef}>
                {!options.length && emptyComponent}
                {!!options.length && (
                    <select
                        data-test={dataTest}
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
                            return (
                                <Fragment key={option.value}>
                                    <SimpleTransferOption
                                        label={option.label}
                                        value={option.value}
                                        disabled={option.disabled}
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

                .loading + .container .content-select {
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
    loading: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
    selectionHandler: PropTypes.func,
    onEndReached: PropTypes.func,
}
