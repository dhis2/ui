import React from 'react'
import propTypes from '@dhis2/prop-types'

import { findOption, getModeByModifierKey } from './common'
import { multiSelectedPropType } from '../common-prop-types'
import { spacers } from '../theme.js'

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
