import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const LeftHeader = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                border-bottom: 1px solid ${colors.grey400};
                flex-grow: 0;
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)

LeftHeader.propTypes = {
    children: PropTypes.node,
    dataTest: PropTypes.string,
}
