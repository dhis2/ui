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

export const PickedOptions = ({
    children,
    dataTest,
    toggleHighlightedPickedOption,
    selectedEmptyComponent,
    highlightedPickedOptions,
    deselectSingleOption,
}) => (
    <div data-test={dataTest}>
        {!React.Children.count(children) && selectedEmptyComponent}
        {React.Children.map(children, child => {
            const option = {
                label: child.props.label,
                value: child.props.value,
            }

            return React.cloneElement(child, {
                onClick: (_, event) => {
                    const mode = getModeByModifierKey(event)
                    toggleHighlightedPickedOption({ option, mode })
                },
                onDoubleClick: deselectSingleOption,
                highlighted: !!findOption(highlightedPickedOptions, option),
            })
        })}

        <style jsx>{`
            div {
                padding: ${spacers.dp4} 0;
                flex-grow: 1;
                overflow-y: auto;
            }
        `}</style>
    </div>
)

PickedOptions.propTypes = {
    children: propTypes.node.isRequired,
    dataTest: propTypes.string.isRequired,
    deselectSingleOption: propTypes.func.isRequired,
    toggleHighlightedPickedOption: propTypes.func.isRequired,
    highlightedPickedOptions: multiSelectedPropType,
    selectedEmptyComponent: propTypes.node,
}
