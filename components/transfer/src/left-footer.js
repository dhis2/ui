import { colors, spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'

export const LeftFooter = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 0;
                border-top: 1px solid ${colors.grey400};
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)

LeftFooter.propTypes = {
    children: PropTypes.node,
    dataTest: PropTypes.string,
}
