import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '@dhis2/ui-constants'

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
    sourceEmptyPlaceholder,
}) => (
    <div data-test={dataTest}>
        {children}
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
    children: propTypes.node,
    sourceEmptyPlaceholder: propTypes.node,
}
