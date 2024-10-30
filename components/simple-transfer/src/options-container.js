import { CircularLoader } from '@dhis2-ui/loader'
import PropTypes from 'prop-types'
import React, { Fragment, useRef } from 'react'
import { SimpleTransferOption } from './simple-transfer-option.js'

export const OptionsContainer = ({
    dataTest,
    emptyComponent,
    highlightedOptions,
    loading,
    maxSelections,
    options,
    selected = false,
    selectionHandler,
    setHighlightedOptions,
}) => {
    const optionsRef = useRef(null)
    const wrapperRef = useRef(null)

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
                        {options.map((option) => {
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
                                    />
                                </Fragment>
                            )
                        })}
                    </select>
                )}
            </div>

            <style jsx>{`
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
}
