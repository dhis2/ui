import React from 'react'
import propTypes from '@dhis2/prop-types'

import { spacers } from '@dhis2/ui-constants'

export const PickedOptions = ({
    children,
    dataTest,
    selectedEmptyComponent,
}) => (
    <div data-test={dataTest}>
        {!React.Children.count(children) && selectedEmptyComponent}
        {children}

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
    selectedEmptyComponent: propTypes.node,
}
