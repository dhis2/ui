import { spacers } from '@dhis2/ui-constants'
import PropTypes from 'prop-types'
import React from 'react'
import { borderColor } from './common/index.js'

export const RightFooter = ({ children, dataTest }) => (
    <div data-test={dataTest}>
        {children}

        <style jsx>{`
            div {
                flex-grow: 0;
                border-top: 1px solid ${borderColor};
                padding: 0 ${spacers.dp8};
            }
        `}</style>
    </div>
)

RightFooter.propTypes = {
    children: PropTypes.node,
    dataTest: PropTypes.string,
}
