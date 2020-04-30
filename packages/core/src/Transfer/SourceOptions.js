import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '@dhis2/ui-constants'

import { findOption, getModeByModifierKey } from './common.js'

// TODO: This will be refactored away to match the MultiSelect
export const multiSelectedPropType = propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string,
        value: propTypes.string,
    })
)

export const SourceOptions = ({
    children,
    dataTest,
    toggleHighlightedSourceOption,
    sourceEmptyPlaceholder,
    highlightedSourceOptions,
    selectSingleOption,
}) => (
    <div data-test={dataTest}>
        {React.Children.map(children, child => {
            const option = {
                label: child.props.label,
                value: child.props.value,
            }

            return React.cloneElement(child, {
                onClick: (_, event) => {
                    const mode = getModeByModifierKey(event)
                    toggleHighlightedSourceOption({ option, mode })
                },
                onDoubleClick: selectSingleOption,
                highlighted: !!findOption(highlightedSourceOptions, option),
            })
        })}

        {!React.Children.count(children) && sourceEmptyPlaceholder}

        <style jsx>{`
            div {
                padding: ${spacers.dp4} 0;
                flex-grow: 1;
                overflow-y: auto;
            }
        `}</style>
    </div>
)

SourceOptions.propTypes = {
    dataTest: propTypes.string.isRequired,
    selectSingleOption: propTypes.func.isRequired,
    toggleHighlightedSourceOption: propTypes.func.isRequired,
    children: propTypes.node,
    highlightedSourceOptions: multiSelectedPropType,
    sourceEmptyPlaceholder: propTypes.node,
}
